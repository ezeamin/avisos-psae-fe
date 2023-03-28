import { useState } from 'react';
import { Stack, Typography } from '@mui/material';

import { RoundedButton } from '../../styled';

import AlertDialog from '../AlertDialog/AlertDialog';

const viewedBy = 1665;
const totalUsers = 4122;
const percentage = ((viewedBy / totalUsers) * 100).toFixed(1);

const Statistics = () => {
  const [openAlert, setOpenAlert] = useState<boolean>(false);

  const handleViewAlert = () => {
    setOpenAlert(true);
  };

  const handleCloseViewAlert = () => {
    setOpenAlert(false);
  };

  return (
    <>
      <Stack alignItems='center'>
        <Typography
          variant='h6'
          component='p'
          textAlign='center'
          className='animate-in-bottom-short'
          sx={{ animationDelay: '1500ms' }}
        >
          El aviso que se encuentra actualmente subido fue visualizado por{' '}
          <strong>{viewedBy}</strong> de <strong>{totalUsers}</strong> usuarios
          ({percentage}%).{' '}
        </Typography>
        <RoundedButton
          variant='outlined'
          sx={{ my: 2, animationDelay: '1700ms' }}
          onClick={handleViewAlert}
          className='animate-in-bottom-short'
        >
          Ver aviso
        </RoundedButton>
      </Stack>

      <AlertDialog opened={openAlert} handleClose={handleCloseViewAlert} />
    </>
  );
};

export default Statistics;
