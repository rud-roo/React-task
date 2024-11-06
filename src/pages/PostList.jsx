import {useState, useEffect} from 'react'
import Nav from '../components/Nav'
import { Link } from 'react-router-dom';

const PostList = () => {
    const [posts, setPosts] = useState([]);
    
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts?_limit=5`)
            .then(response => response.json())
            .then(data => setPosts(data))
    }, []);
  return (
    <div>

        <h3>All posts</h3>
        <ul>
            {posts.map((post)=> (
                <li key={post.id}>
                    <Link to={`/posts/${post.id}`}>{post.title}</Link>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default PostList