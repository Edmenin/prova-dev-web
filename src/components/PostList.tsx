import { Box, Typography, Container, Paper } from '@mui/material';
import PostCard from './PostCard';
import LoadingSpinner from './LoadingSpinner';
import FeedIcon from '@mui/icons-material/Feed';

interface Post {
  id: number;
  title: string;
  body: string;
}

interface PostListProps {
  posts: Post[];
  loading: boolean;
  onPostClick: (id: number) => void;
}

function PostList({ posts, loading, onPostClick }: PostListProps) {
  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <Container maxWidth="lg">
      <Paper 
        elevation={0} 
        sx={{ 
          p: 4, 
          mb: 4, 
          borderRadius: 2,
          background: 'linear-gradient(45deg, #6a1b9a 30%, #9c4dcc 90%)',
          color: 'white'
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <FeedIcon sx={{ fontSize: 40 }} />
          <Box>
            <Typography variant="h4" component="h1" sx={{ fontWeight: 600 }}>
              Lista de Posts
            </Typography>
            <Typography variant="subtitle1" sx={{ opacity: 0.8 }}>
              Explore esses posts interessantes
            </Typography>
          </Box>
        </Box>
      </Paper>

      <Box 
        sx={{ 
          display: 'grid', 
          gridTemplateColumns: { 
            xs: '1fr', 
            sm: 'repeat(2, 1fr)', 
            md: 'repeat(3, 1fr)',
            lg: 'repeat(4, 1fr)'
          }, 
          gap: 3 
        }}
      >
        {posts.map((post) => (
          <Box key={post.id}>
            <PostCard post={post} onClick={onPostClick} />
          </Box>
        ))}
      </Box>
    </Container>
  );
}

export default PostList; 