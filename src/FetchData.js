import React, { useEffect, useState } from 'react'
import './FetchData.css';

/*function FetchData() {
    const [Image, setImage] = useState('');

    useEffect(() => {
        fetch('https://api.thedogapi.com/v1/images/search')
        .then(response => response.json())
        .then(data => setImage(data[0].url))
        .catch(err => console.err(err))
    }, [])
  return (
    <div>
      {Image && <img src={Image} alt='dog' />}
    </div>
  )
}
  */

function FetchData(){
  const [posts, setPosts] = useState([]);

  useEffect (() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => setPosts(data))
    .catch(err => console.log(err))
  }, []);

    return (
        <div>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default FetchData
