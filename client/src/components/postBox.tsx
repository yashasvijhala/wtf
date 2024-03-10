import { LinkOutlined, PictureOutlined } from '@ant-design/icons'
import { useAuth0 } from '@auth0/auth0-react'
import { Button, Form } from 'antd'
import { FC, useState } from 'react'
import toast from 'react-hot-toast'
import { useCreatePostMutation } from '../generated/graphql'

export const PostBox: FC = () => {
  //? Constants
  const { user, isAuthenticated } = useAuth0()

  // ? states
  const [post, setPost] = useState<{
    title: string
    subreddit: string
    image: string
    body: string
    userName: string
  }>({
    title: '',
    subreddit: '',
    image: '',
    body: '',
    userName: ''
  })
  const [image, setImage] = useState(false)

  //? Mutations
  const [createPost] = useCreatePostMutation()

  return (
    <>
      {console.log('is auth??', user, isAuthenticated)}
      <Form
        className="z-50 bg-white rounded-md border border-gray-300 p-2"
        onFinish={async () => {
          console.log('form submitted')
          const notification = toast.loading('creating a new Post...')
          await createPost({
            variables: {
              title: post.title,
              body: post.body,
              subredditTopic: post.subreddit,
              imageUrl: post.image,
              userName: user?.name
            }
          })
          setPost({
            title: '',
            subreddit: '',
            image: '',
            body: '',
            userName: ''
          })
          toast.success('Post created', {
            id: notification
          })
        }}
      >
        <div className="flex items-center space-x-3">
          <div className="relative border-gray-300 overflow-hidden  ">
            <img
              src={`
https://api.dicebear.com/7.x/adventurer/svg?seed=${user?.nickname}&backgroundColor=b6e3f4,c0aede,d1d4f9&backgroundType=gradientLinear,solid`}
              alt="User Avatar"
              className="w-10 h-10 rounded-full"
            />
          </div>
          <input
            className="flex-1 rounded-md  bg-gray-50 p-2 pl-5 outline-none"
            disabled={!isAuthenticated}
            type="text"
            placeholder={
              isAuthenticated
                ? 'Create a post by entering a title'
                : 'sign in to post'
            }
            value={post.title}
            onChange={e => {
              setPost(prev => ({
                ...prev,
                title: e.target.value
              }))
            }}
          ></input>
          <PictureOutlined
            onClick={() => {
              setImage(true)
            }}
            className={`h-6 text-gray-400 cursor-pointer ${
              image && 'text-blue-500'
            }`}
          />
          <LinkOutlined className={`h-6 text-gray-400 cursor-pointer`} />
        </div>
        {post.title && (
          <div className="flex flex-col py-2">
            <div className="flex items-center px-2">
              <p className="min-w[90x]">Body:</p>
              <input
                className="m-2 flex-1 bg-blue-50 p-2 outline-none"
                type="text"
                placeholder="Text (optional)"
                onChange={e => {
                  setPost(prev => ({
                    ...prev,
                    body: e.target.value
                  }))
                }}
              ></input>
            </div>
            <div className="flex items-center px-2">
              <p className="min-w[90x]">Subreddit:</p>
              <input
                required
                className="m-2 flex-1 bg-blue-50 p-2 outline-none"
                type="text"
                placeholder="i.e. reactjs"
                onChange={e => {
                  setPost(prev => ({
                    ...prev,
                    subreddit: e.target.value
                  }))
                }}
              ></input>
            </div>
            {image && (
              <div className="flex items-center px-2">
                <p className="min-w[90x]">Image Url:</p>
                <input
                  className="m-2 flex-1 bg-blue-50 p-2 outline-none"
                  type="text"
                  placeholder="optional..."
                  onChange={e => {
                    setPost(prev => ({
                      ...prev,
                      image: e.target.value
                    }))
                  }}
                ></input>
              </div>
            )}
            {post.title && (
              <Button
                type="primary"
                htmlType="submit"
                className="bg-blue-400 rounded-full w--full"
              >
                Create Post
              </Button>
            )}
          </div>
        )}
      </Form>
    </>
  )
}
