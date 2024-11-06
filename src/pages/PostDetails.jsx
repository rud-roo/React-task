import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const PostDetails = () => {
    const [post, setPost] = useState(null);
    const {id} = useParams();

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).
            then(res => res.json())
            .then(data => setPost(data))
    },[])

  return (
    <div>
        <h3>PostDetails</h3>

        <p><strong>Title: </strong>{post?.title}</p>
        <p><strong>Description: </strong>{post?.body}</p>
    </div>
  )
}

export default PostDetails