import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, CssBaseline, Container } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import Posts from './pages/Posts';
import PostDetails from './pages/PostDetails';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#6a1b9a',
      light: '#9c4dcc',
      dark: '#38006b',
    },
    secondary: {
      main: '#aa00ff',
      light: '#e254ff',
      dark: '#7200ca',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Routes>
            <Route path="/" element={<Posts />} />
            <Route path="/post" element={<Posts />} />
            <Route path="/dados/:id" element={<PostDetails />} />
          </Routes>
        </Container>
      </Router>
    </ThemeProvider>
  );
}

export default App;
