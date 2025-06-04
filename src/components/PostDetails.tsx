import {
  Card,
  CardContent,
  Typography,
  Container,
  Button,
  Box,
  Paper,
  Avatar,
  Divider,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';

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

interface PostDetailsProps {
  post: Post;
  user: User;
  onBack: () => void;
}

function PostDetails({ post, user, onBack }: PostDetailsProps) {
  return (
    <Container maxWidth="md">
      <Button
        startIcon={<ArrowBackIcon />}
        onClick={onBack}
        sx={{ 
          mt: 4, 
          mb: 2,
          '&:hover': {
            backgroundColor: 'rgba(25, 118, 210, 0.08)',
          },
        }}
      >
        Voltar para Lista
      </Button>

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
        <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 600 }}>
          {post.title}
        </Typography>
        <Typography variant="subtitle1" sx={{ opacity: 0.8 }}>
          Post #{post.id}
        </Typography>
      </Paper>

      <Card sx={{ mb: 4, borderRadius: 2 }}>
        <CardContent>
          <Typography 
            variant="body1" 
            paragraph 
            sx={{ 
              lineHeight: 1.8,
              fontSize: '1.1rem',
              color: 'text.primary'
            }}
          >
            {post.body}
          </Typography>
        </CardContent>
      </Card>

      <Paper 
        elevation={0}
        sx={{ 
          p: 3, 
          borderRadius: 2,
          backgroundColor: 'rgba(106, 27, 154, 0.04)',
          border: '1px solid rgba(106, 27, 154, 0.12)'
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <Avatar sx={{ bgcolor: 'primary.main', mr: 2 }}>
            <PersonIcon />
          </Avatar>
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            Informações do Autor
          </Typography>
        </Box>

        <Divider sx={{ mb: 3 }} />

        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <PersonIcon sx={{ mr: 2, color: 'primary.main' }} />
          <Box>
            <Typography variant="subtitle2" color="text.secondary">
              Nome
            </Typography>
            <Typography variant="body1">
              {user.name}
            </Typography>
          </Box>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <EmailIcon sx={{ mr: 2, color: 'primary.main' }} />
          <Box>
            <Typography variant="subtitle2" color="text.secondary">
              Email
            </Typography>
            <Typography variant="body1">
              {user.email}
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
}

export default PostDetails; 