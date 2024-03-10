import React from 'react'
import { Feed } from './feed'
import { PostBox } from './postBox'

export const Home: React.FC = () => {
  return (
    <div className=" my-7 mx-auto max-w-5xl">
      <PostBox />
      <Feed />
    </div>
  )
}
