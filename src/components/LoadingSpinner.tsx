import { Box, CircularProgress } from '@mui/material';

interface LoadingSpinnerProps {
  minHeight?: string;
}

function LoadingSpinner({ minHeight = '80vh' }: LoadingSpinnerProps) {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight={minHeight}>
      <CircularProgress />
    </Box>
  );
}

export default LoadingSpinner; 