import { CircularProgress, Stack } from '@mui/material';

const CircularSpinner = () => {
  return (
    <Stack justifyContent='center' alignItems='center'>
      <CircularProgress color='primary' sx={{ mt: 3, mb: 8 }} />
    </Stack>
  );
};

export default CircularSpinner;
