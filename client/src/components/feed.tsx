import {
  ArrowDownOutlined,
  ArrowUpOutlined,
  CommentOutlined,
  EllipsisOutlined,
  GiftOutlined,
  SaveOutlined,
  ShareAltOutlined
} from '@ant-design/icons'
import React from 'react'
import TimeAgo from 'react-timeago'
import { useGetPostsQuery } from '../generated/graphql'
import { CardBody, CardContainer, CardItem } from './animatedCard'

export const Feed: React.FC = () => {
  //? Queries
  const { data: getPosts } = useGetPostsQuery()
  console.log('postssss', getPosts?.getPosts)

  return (
    <>
      {getPosts?.getPosts.map(post => (
        <CardContainer key={post?.id}>
          <CardBody className="bg-white relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:border-white/[0.2] border-black/[0.1] w-full sm:w-[60rem] h-full rounded-xl p-6 border hover:border-gray-600 hover:border">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              <div className="flex flex-col items-center justify-start space-y-1 mr-4">
                <ArrowUpOutlined className="hover:bg-gray-200 text-gray-400 p-1 rounded-md hover:text-red-400 h-6 w-6" />
                <p className="text-gray-400">0</p>
                <ArrowDownOutlined className="hover:bg-gray-200 text-gray-400 p-1 rounded-md hover:text-blue-400 h-6 w-6" />
              </div>
            </CardItem>
            <div className="flex flex-col w-full">
              <CardItem translateZ="100" className="w-full mt-4">
                <div className="relative border-gray-300 overflow-hidden">
                  <img
                    src={`https://api.dicebear.com/7.x/adventurer/svg?seed=${post.userName}&backgroundColor=b6e3f4,c0aede,d1d4f9&backgroundType=gradientLinear,solid`}
                    alt="User Avatar"
                    className="w-10 h-10 rounded-full"
                  />
                </div>
              </CardItem>
              <CardItem
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                <p className="text-xs text-gray-400">
                  <span className="font-bold text-black hover:text-blue-400 hover:underline">
                    r/{post.subreddit?.topic}
                  </span>{' '}
                  . Posted by u/{post?.userName}{' '}
                  <TimeAgo date={post.createdAt} />
                </p>
              </CardItem>

              <CardItem translateZ="100" className="w-full mt-4">
                <div className="mt-4">
                  <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                  <p className="mt-2 text-sm font-light">{post.body}</p>
                </div>
                {post?.image != null && post?.image !== '' && (
                  <img
                    className="w-96 h-96 object-cover rounded-xl group-hover/card:shadow-xl"
                    src={post.image}
                    alt=""
                  />
                )}
              </CardItem>

              <div className="flex space-x-4 text-gray-400">
                <div className="flex items-center space-x-1 text-sm font-semibold p-2 hover:bg-gray-100 cursor-pointer rounded-sm">
                  <CommentOutlined className="h-6 w-6" />
                  <p>{post.comments?.length}</p>
                </div>
                <div className="flex items-center space-x-1 text-sm font-semibold p-2 hover:bg-gray-100 cursor-pointer rounded-sm">
                  <GiftOutlined className="h-6 w-6" />
                  <p className="hidden sm:inline">Award</p>
                </div>
                <div className="flex items-center space-x-1 text-sm font-semibold p-2 hover:bg-gray-100 cursor-pointer rounded-sm">
                  <ShareAltOutlined className="h-6 w-6" />
                  <p className="hidden sm:inline">share</p>
                </div>
                <div className="flex items-center space-x-1 text-sm font-semibold p-2 hover:bg-gray-100 cursor-pointer rounded-sm">
                  <SaveOutlined className="h-6 w-6" />
                  <p className="hidden sm:inline">Save</p>
                </div>
                <div className="flex items-center space-x-1 text-sm font-semibold p-2 hover:bg-gray-100 cursor-pointer rounded-sm">
                  <EllipsisOutlined className="h-6 w-6" />
                </div>
              </div>
            </div>
          </CardBody>
        </CardContainer>
      ))}
    </>
  )
}

//non animated

// import {
//   ArrowDownOutlined,
//   ArrowUpOutlined,
//   CommentOutlined,
//   EllipsisOutlined,
//   GiftOutlined,
//   SaveOutlined,
//   ShareAltOutlined
// } from '@ant-design/icons'
// import React from 'react'
// import TimeAgo from 'react-timeago'
// import { useGetPostsQuery } from '../generated/graphql'

// export const Feed: React.FC = () => {
//   const { data: getPosts, refetch: refetchPosts } = useGetPostsQuery()
//   console.log('postsssss', getPosts?.getPosts)
//   return (
//     <>
//       {getPosts?.getPosts.map(post => (
//         <div
//           className="flex cursor-pointer rounded-md border border-gray-300 bg-white shadow-sm hover:border hover:border-gray-600 p-4 mt-5 space-y-4 "
//           key={post?.id}
//         >
//           <div className="flex flex-col items-center justify-start space-y-1 mr-4">
//             <ArrowUpOutlined className="hover:bg-gray-200 p-1 rounded-md hover:text-red-400 h-6 w-6 " />
//             <p>0</p>
//             <ArrowDownOutlined className="hover:bg-gray-200 p-1 rounded-md hover:text-blue-400 h-6 w-6 " />
//           </div>
//           <div className="flex flex-col w-full">
//             <div className="flex items-center space-x-2 mb-2">
//               <div className="relative border-gray-300 overflow-hidden">
//                 <img
//                   src={`https://api.dicebear.com/7.x/adventurer/svg?seed=${post.userName}&backgroundColor=b6e3f4,c0aede,d1d4f9&backgroundType=gradientLinear,solid`}
//                   alt="User Avatar"
//                   className="w-10 h-10 rounded-full"
//                 />
//               </div>
//               <p className="text-xs text-gray-400">
//                 <span className="font-bold text-black hover:text-blue-400 hover:underline">
//                   r/{post.subreddit?.topic}
//                 </span>{' '}
//                 . Posted by u/{post?.userName} <TimeAgo date={post.createdAt} />
//               </p>
//             </div>
//             <div className="mt-4">
//               <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
//               <p className="mt-2 text-sm font-light">{post.body}</p>
//             </div>
//             <div>
//               <img className="w-full" src={post?.image || ''} alt="" />
//             </div>
//             <div className="flex space-x-4 text-gray-400">
//               <div className="flex items-center space-x-1 text-sm font-semibold p-2 hover:bg-gray-100 cursor-pointer rounded-sm">
//                 <CommentOutlined className="h-6 w-6" />
//                 <p>{post.comments?.length}</p>
//               </div>
//               <div className="flex items-center space-x-1 text-sm font-semibold p-2 hover:bg-gray-100 cursor-pointer rounded-sm">
//                 <GiftOutlined className="h-6 w-6" />
//                 <p className="hidden sm:inline">Award</p>
//               </div>
//               <div className="flex items-center space-x-1 text-sm font-semibold p-2 hover:bg-gray-100 cursor-pointer rounded-sm">
//                 <ShareAltOutlined className="h-6 w-6" />
//                 <p className="hidden sm:inline">share</p>
//               </div>
//               <div className="flex items-center space-x-1 text-sm font-semibold p-2 hover:bg-gray-100 cursor-pointer rounded-sm">
//                 <SaveOutlined className="h-6 w-6" />
//                 <p className="hidden sm:inline">Save</p>
//               </div>
//               <div className="flex items-center space-x-1 text-sm font-semibold p-2 hover:bg-gray-100 cursor-pointer rounded-sm">
//                 <EllipsisOutlined className="h-6 w-6" />
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}
//     </>
//   )
// }
