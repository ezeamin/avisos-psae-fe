import { lazy, Suspense, useEffect, useState } from 'react';

import { Dialog, DialogActions, DialogContent } from '@mui/material';

import remarkGfm from 'remark-gfm';

import { RoundedButton } from '../../styled';

import CircularSpinner from '../Spinner/CircularSpinner';

import { DTI, DTI_LIST } from '../../dti/dti';

const ReactMarkdown = lazy(() => import('react-markdown'));

// !temp
const markdownFile = '/temp/markdown.md';

interface Props {
  opened: boolean;
  handleClose: () => void;
}

const AlertDialog = (props: Props) => {
  const { opened, handleClose } = props;

  //   TODO: Fetch markdown from API
  const [markdown, setMarkdown] = useState<string>('');

  useEffect(() => {
    (async () => {
      const res = await fetch(markdownFile);
      const data = await res.text();

      if (data) {
        setMarkdown(data);
      }
    })();
  }, []);

  return (
    <Dialog open={opened} onClose={handleClose} fullWidth maxWidth='md'>
      <DialogContent
        sx={{
          pb: 0,
          '& ul': {
            ml: 3,
          },
          '& h1, h2, h3, h4, h5, h6': {
            mt: 2,
          },
          '& :first-of-type': {
            mt: 0,
          },
        }}
      >
        <Suspense fallback={<CircularSpinner />}>
          <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />
        </Suspense>
      </DialogContent>

      <DialogActions>
        <RoundedButton
          onClick={handleClose}
          color='error'
          data-testid={DTI(DTI_LIST.BUTTON(DTI_LIST.ACTIONS.CLOSE))}
        >
          Cerrar
        </RoundedButton>
      </DialogActions>
    </Dialog>
  );
};

export default AlertDialog;
