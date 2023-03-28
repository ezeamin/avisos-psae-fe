import { Stack } from '@mui/material';

import { RoundedButton } from '../../styled';

interface Props {
  saveAndAlert: () => void;
  clear: () => void;
}

const ButtonsSection = (props: Props) => {
  const { saveAndAlert, clear } = props;

  return (
    <Stack
      direction={{ xs: 'column', md: 'row' }}
      justifyContent='space-around'
      sx={{ mt: 2 }}
    >
      <RoundedButton
        variant='contained'
        onClick={saveAndAlert}
        className='animate-in-right-short'
        sx={{ animationDelay: '1000ms',mb: { xs: 2, md: 0 } }}
      >
        Guardar y alertar a usuarios
      </RoundedButton>
      {/* @ts-no-check */}
      <RoundedButton
        variant='outlined'
        onClick={clear}
        className='animate-in-right-short'
        sx={{ animationDelay: '1300ms' }}
      >
        Limpiar texto
      </RoundedButton>
    </Stack>
  );
};

export default ButtonsSection;
