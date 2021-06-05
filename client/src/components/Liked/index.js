import React, { useEffect, useState } from 'react';
import axios from 'axios';
import get from 'lodash/get';

import LikedCard from './LikedCard';

const blockName = 'liked';

const renderLikedPosts = posts => posts.filter(post => post.liked === true).map(post => <LikedCard post={post} key={post._id} />);

export default function Liked() {
  const [ posts, setPosts] = useState([]);
  useEffect(() => {
    async function fetchPosts() {
      const response = await axios.get("/api/all-posts");
      const data = get(response, ['data', 'posts'], []);
      setPosts(data);
    }
    fetchPosts();
  }, []);

  console.log('posts', posts)
  return (
    <div className={`${blockName}__container`}>{renderLikedPosts(posts)}</div>
  )
}
