import React from 'react'
import NewPostForm from '../../components/NewPostForm'

const NewPostPage = ({ addPost }) => {
  return (
    <NewPostForm addPost={addPost} />
  )
}

export default NewPostPage