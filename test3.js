import React, { useState, useEffect } from 'react';
function Posts() {
  const [posts, setPosts] = useState([]);
  const url = `https://dev-react-explained-api.pantheonsite.io/wp-json/wp/v2/posts/`;
  const fetchPosts = () => {
    fetch(url)
      .then((response) => response.json())
      .then((posts) => {
        setPosts(posts);
      })
      .catch((error) => console.error(error));
  };
  useEffect(() => {
    if (posts.length === 0) {
      fetchPosts();
    }
  });
  return (
    <>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title.rendered}</li>
        ))}
      </ul>
      <button onClick={() => setPosts([])}>Refresh Posts</button>
    </>
  );
}

const fetchPosts = () => {
  fetch(url)
    .then((response) => response.json())
    .then((posts) => {
      setPosts(posts);
    })
    .catch((error) => console.error(error));
};

<button onClick={() => setPosts([])}>Refresh Posts</button>;

export default function App() {
  const [posts, setPosts] = useState([]);
  const url = `https://dev-react-explained-api.pantheonsite.io/wp-json/wp/v2/posts/`;
  const fetchPosts = () => {
    console.log(`Fetching posts`);
    fetch(url)
      .then((response) => response.json())
      .then((posts) => {
        setPosts(posts);
      })
      .catch((error) => console.error(error));
  };
  // Log when posts change
  useEffect(() => console.log(posts), [posts]);
  // Get posts on initial render and if no posts exist
  useEffect(() => {
    fetchPosts();
  }, []);
  // Fetch posts every 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log(`5 Second Refresh!`);
      fetchPosts();
    }, 5000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title.rendered}</li>
        ))}
      </ul>
    </>
  );
}

useEffect(() => {
  fetchPosts();
}, []);
