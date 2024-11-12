import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from '../store/api-services/post';


const PostList = () => {
  const { posts, isLoading, errorMessage } = useSelector(
		(storeState) => storeState.post,
	);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchPosts);
	}, []);
  
  return (
    <div>
      <h2>All Post</h2>
      {isLoading && <h2>Loading data.............</h2>}
      {errorMessage && (
				<p>Some Error Occurred. try to navigate to the other pages</p>
			)}
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PostList