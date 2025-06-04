import { Card, CardContent, Typography, CardActionArea, Chip, Box } from '@mui/material';
import ArticleIcon from '@mui/icons-material/Article';

interface Post {
  id: number;
  title: string;
  body: string;
}

interface PostCardProps {
  post: Post;
  onClick: (id: number) => void;
}

function PostCard({ post, onClick }: PostCardProps) {
  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
        },
      }}
    >
      <CardActionArea onClick={() => onClick(post.id)} sx={{ height: '100%' }}>
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <ArticleIcon color="primary" sx={{ mr: 1 }} />
            <Chip 
              label={`Post #${post.id}`} 
              size="small" 
              color="primary" 
              variant="outlined"
            />
          </Box>
          <Typography 
            variant="h6" 
            component="h2" 
            gutterBottom
            sx={{
              fontWeight: 600,
              color: 'primary.main',
              mb: 2,
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}
          >
            {post.title}
          </Typography>
          <Typography 
            variant="body2" 
            color="text.secondary"
            sx={{
              display: '-webkit-box',
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              lineHeight: 1.5,
            }}
          >
            {post.body}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default PostCard; 