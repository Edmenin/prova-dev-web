import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import PostDetails from '../components/PostDetails';
import LoadingSpinner from '../components/LoadingSpinner';

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

interface User {
  id: number;
  name: string;
  email: string;
}

function PostDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<Post | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPostDetails = async () => {
      try {
        const postResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
        setPost(postResponse.data);

        const userResponse = await axios.get(
          `https://jsonplaceholder.typicode.com/users/${postResponse.data.userId}`
        );
        setUser(userResponse.data);
      } catch (error) {
        console.error('Erro ao buscar detalhes do post:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPostDetails();
  }, [id]);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (!post || !user) {
    return null;
  }

  return (
    <PostDetails
      post={post}
      user={user}
      onBack={() => navigate('/posts')}
    />
  );
}

export default PostDetailsPage; 