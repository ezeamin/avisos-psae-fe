import { useState } from 'react';
import { Stack, Typography } from '@mui/material';

import { customSwal } from '../../helpers/customSwal';

import { RoundedButton } from '../../styled';

import AlertDialog from '../AlertDialog/AlertDialog';

const viewedBy = 1665;
const totalUsers = 4122;
const percentage = ((viewedBy / totalUsers) * 100).toFixed(1);

const isThereCurrentAlert = true;

const Statistics = () => {
  const [openAlert, setOpenAlert] = useState<boolean>(false);

  const handleViewAlert = () => {
    setOpenAlert(true);
  };

  const handleDeleteAlert = () => {
    customSwal({
        title: 'Atención',
        text: 'Esta acción dará de baja el aviso actual, y ningún usuario podrá visualizarlo. ¿Desea continuar?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Si, eliminar aviso',
      }).then((result) => {
        if (!result.isConfirmed) return;
  
        //   delete alert and remove this section from DOM
        
      });
  }

  const handleCloseViewAlert = () => {
    setOpenAlert(false);
  };

  if(!isThereCurrentAlert) {
    return (
      <Typography
        variant='h6'
        component='p'
        textAlign='center'
        className='animate-in-bottom-short'
        sx={{ animationDelay: '1500ms' }}
      >
        No hay ningún aviso activo en este momento.
      </Typography>
    )
  }

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
          El aviso que se encuentra actualmente activo fue visualizado por{' '}
          <strong>{viewedBy}</strong> de <strong>{totalUsers}</strong> usuarios
          ({percentage}%).{' '}
        </Typography>
        <Stack direction='row' gap={2}>
          <RoundedButton
            variant='outlined'
            sx={{ my: 2, animationDelay: '1700ms' }}
            onClick={handleViewAlert}
            className='animate-in-bottom-short'
          >
            Ver aviso
          </RoundedButton>
          <RoundedButton
            variant='outlined'
            sx={{ my: 2, animationDelay: '1900ms' }}
            onClick={handleDeleteAlert}
            className='animate-in-bottom-short'
            color='error'
          >
            Dar de baja aviso
          </RoundedButton>
        </Stack>
      </Stack>

      <AlertDialog opened={openAlert} handleClose={handleCloseViewAlert} />
    </>
  );
};

export default Statistics;
