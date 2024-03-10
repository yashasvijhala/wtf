import {
  DownOutlined,
  HomeOutlined,
  MenuOutlined,
  PlusOutlined,
  RedditOutlined,
  UserOutlined
} from '@ant-design/icons'
import { useAuth0 } from '@auth0/auth0-react'
import { Avatar, Col, Drawer, Dropdown, Input, Menu, Row } from 'antd'
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll
} from 'framer-motion'
import { useState } from 'react'
import { cn } from '../utils/cn'

export const Navbar = () => {
  //? Constants
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0()
  const { scrollYProgress } = useScroll()

  // ? states
  const [drawerVisible, setDrawerVisible] = useState(false)
  const [visible, setVisible] = useState(false)

  useMotionValueEvent(scrollYProgress, 'change', current => {
    if (typeof current === 'number') {
      let direction = current - (scrollYProgress?.getPrevious() ?? 0)

      if (scrollYProgress.get() < 0.05) {
        setVisible(false)
      } else {
        if (direction < 0) {
          setVisible(true)
        } else {
          setVisible(false)
        }
      }
    }
  })

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0
        }}
        transition={{
          duration: 0.2
        }}
        className={cn(
          'bg-white shadow-md p-4 fixed top-0 left-0 right-0 z-50 transition-transform duration-200',
          visible ? 'translate-y-0' : '-translate-y-full'
        )}
      >
        <Row
          className="bg-transparent w-full"
          justify="space-between"
          align="middle"
          style={{ position: 'relative', zIndex: 1000 }}
        >
          <Col xs={24} sm={6} className="flex items-center">
            <div className="logo text-xl text-red-500 pr-8">
              <RedditOutlined />
            </div>
            <span className="text-sm mr-2 lg:hidden">
              <MenuOutlined onClick={() => setDrawerVisible(true)} />
            </span>
            <span className="text-sm ml-auto hidden sm:inline">
              <HomeOutlined className="mr-1" />
              <span className="ml-1">Home</span>
              <DownOutlined className="ml-1" />
            </span>
            <span className="text-sm ml-auto">
              <Input.Search placeholder="Search" />
            </span>
          </Col>

          <Col xs={24} sm={1} className="ml-auto text-right">
            <PlusOutlined className="mr-2 hidden sm:inline" />
            {isAuthenticated ? (
              <Dropdown
                overlay={
                  <Menu>
                    <Menu.Item key="1" onClick={() => logout()}>
                      Logout
                    </Menu.Item>
                  </Menu>
                }
                trigger={['click']}
              >
                <Avatar
                  src={user?.picture}
                  alt={user?.nickname}
                  className="cursor-pointer inline-block align-middle"
                />
              </Dropdown>
            ) : (
              <Dropdown
                overlay={
                  <Menu>
                    <Menu.Item key="1" onClick={() => loginWithRedirect()}>
                      Login / SignUp
                    </Menu.Item>
                  </Menu>
                }
                trigger={['click']}
              >
                <UserOutlined className="cursor-pointer hidden sm:inline" />
              </Dropdown>
            )}
          </Col>
        </Row>

        <Drawer
          title="Menu"
          placement="left"
          closable={false}
          onClose={() => setDrawerVisible(false)}
          visible={drawerVisible}
        >
          {isAuthenticated ? (
            <Menu mode="vertical">
              <Menu.Item key="logout" onClick={() => logout()}>
                Logout
              </Menu.Item>
            </Menu>
          ) : (
            <Menu mode="vertical">
              <Menu.Item key="login" onClick={() => loginWithRedirect()}>
                Login
              </Menu.Item>
              <Menu.Item key="signup">Signup</Menu.Item>
            </Menu>
          )}
          <Menu mode="vertical">
            <Menu.Item key="createPost">Create New Post</Menu.Item>
          </Menu>
        </Drawer>
      </motion.div>
    </AnimatePresence>
  )
}

//Non Floating

// User
// import {
//   DownOutlined,
//   HomeOutlined,
//   MenuOutlined,
//   PlusOutlined,
//   RedditOutlined,
//   UserOutlined
// } from '@ant-design/icons'
// import { useAuth0 } from '@auth0/auth0-react'
// import { Avatar, Col, Drawer, Dropdown, Input, Menu, Row } from 'antd'
// import { FC, useState } from 'react'

// export const Navbar: FC = () => {
//   const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0()
//   const [drawerVisible, setDrawerVisible] = useState(false)

//   return (
//     <Row
//       className="bg-white shadow-md p-4"
//       justify="space-between"
//       align="middle"
//     >
//       <Col xs={24} sm={6} className="flex items-center">
//         <div className="logo text-xl text-red-500 pr-8">
//           <RedditOutlined />
//         </div>
//         <span className="text-sm lg:hidden">
//           <MenuOutlined
//             onClick={() => {
//               setDrawerVisible(true)
//             }}
//           />
//         </span>
//         <span className="text-sm ml-auto hidden sm:inline">
//           <HomeOutlined className="mr-1" />
//           <span className="ml-1">Home</span>
//           <DownOutlined className="ml-1" />
//         </span>

//         <span className="text-sm  ml-auto">
//           <Input.Search placeholder="Search" />
//         </span>
//       </Col>

//       <Col xs={24} sm={1} className="ml-auto text-right">
//         <PlusOutlined className="mr-4 hidden sm:inline" />

//         {isAuthenticated ? (
//           <Dropdown
//             overlay={
//               <Menu>
//                 <Menu.Item key="1" onClick={() => logout()}>
//                   Logout
//                 </Menu.Item>
//               </Menu>
//             }
//             trigger={['click']}
//           >
//             <Avatar
//               src={user?.picture}
//               alt={user?.nickname}
//               className="cursor-pointer inline-block align-middle "
//             />
//           </Dropdown>
//         ) : (
//           <Dropdown
//             overlay={
//               <Menu>
//                 <Menu.Item key="1" onClick={() => loginWithRedirect()}>
//                   Login / SignUp
//                 </Menu.Item>
//               </Menu>
//             }
//             trigger={['click']}
//           >
//             <UserOutlined className="cursor-pointer  hidden sm:inline" />
//           </Dropdown>
//         )}
//       </Col>

//       <Drawer
//         title="Menu"
//         placement="left"
//         closable={false}
//         onClose={() => {
//           setDrawerVisible(false)
//         }}
//         open={drawerVisible}
//       >
//         {isAuthenticated ? (
//           <Menu mode="vertical">
//             <Menu.Item key="logout" onClick={() => logout()}>
//               Logout
//             </Menu.Item>
//           </Menu>
//         ) : (
//           <Menu mode="vertical">
//             <Menu.Item key="login" onClick={() => loginWithRedirect()}>
//               Login
//             </Menu.Item>
//             <Menu.Item key="signup">Signup</Menu.Item>
//           </Menu>
//         )}
//         <Menu mode="vertical">
//           <Menu.Item key="createPost">Create New Post</Menu.Item>
//         </Menu>
//       </Drawer>
//     </Row>
//   )
// }
