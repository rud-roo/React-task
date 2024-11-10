import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch';

const PostDetail = () => {
  const { id } = useParams();
  const {
    data: post,
    isLoading,
    errorMessage
  } = useFetch(null, `https://jsonplaceholder.typicode.com/posts/${id}`)
  return (
    <div>
      <h2>The details of post {post?.id}</h2>
      {isLoading && <h2>Loading data.............</h2>}
      {errorMessage && (
				<p>Some Error Occurred. try to navigate to the other pages</p>
			)}
			<hr />
			<h2>Title: {post?.title}</h2>
			<h2>Description: {post?.body}</h2>
    </div>
  )
}

export default PostDetail