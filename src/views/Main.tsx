import { useState } from 'react';

import { Alert, Divider } from '@mui/material';

import MDEditor from '@uiw/react-md-editor';

import ButtonsSection from '../components/ButtonsSection/ButtonsSection';
import Statistics from '../components/Statistics/Statistics';

import { customSwal } from '../helpers/customSwal';

const isThereCurrentAlert = true;

const Main = () => {
  const [text, setText] = useState<string | undefined>('');

  const saveAndAlert = () => {
    customSwal({
      title: 'Atención',
      text: 'Esta acción alertará a TODOS los usuarios de la plataforma, eliminando el mensaje anterior (de haberlo). ¿Desea continuar?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, guardar y alertar',
    }).then((result) => {
      if (!result.isConfirmed) return;

      //   Save and alert
      console.log('saved', text);
    });
  };

  const clear = () => {
    setText('');
  };

  return (
    <>
      <Alert severity='info' sx={{ mb: 2 }} className='animate-in-bottom-short'>
        <strong>Bienvenido.</strong> Para emitir un aviso a la plataforma, por
        favor utilice el campo de texto situado a la izquierda debajo de este
        mensaje. El campo derecho será para visualizacion de lo que usted esté
        escribiendo.
        <br />
        <br /> Recuerde que puede utilizar los iconos superiores del campo para
        aplicarle formato a su aviso.
      </Alert>
      <Alert
        severity='warning'
        sx={{ mb: 2 }}
        className='animate-in-bottom-short'
      >
        Realizar un nuevo aviso implicará eliminar el existente (de haberlo),
        por lo que quienes no hayan visto el aviso anterior, no podrán verlo.
      </Alert>

      <MDEditor
        value={text}
        onChange={(text) => setText(text)}
        className='animate-in-bottom-short'
        style={{ animationDelay: '400ms' }}
      />

      <ButtonsSection saveAndAlert={saveAndAlert} clear={clear} />

      {isThereCurrentAlert && (
        <>
          <Divider
            sx={{ mt: 3, mb: 2, animationDelay: '1500ms' }}
            className='animate-in-bottom-short'
          />

          <Statistics />
        </>
      )}
    </>
  );
};

export default Main;
