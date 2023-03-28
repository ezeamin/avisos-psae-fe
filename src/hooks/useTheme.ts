// @ts-nocheck
import { createTheme } from '@mui/material/styles';

import lightTheme from '../themes/light';

const defaultBorderRadius = '0.75rem';

const useTheme = () => {
  return createTheme({
    palette: {
      ...lightTheme,
    },
    typography: {
      root: {
        FontFamily: 'Roboto Slab',
      },
      h5: {
        // fontSize
      },
      body1: {
        fontSize: '1.1rem',
        fontWeight: '400',
      },
      body2: {
        fontSize: '1rem',
      },
    },
    components: {
      MuiFormHelperText: {
        styleOverrides: {
          root: {
            fontSize: '1rem',
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          fullyRounded: {
            borderRadius: defaultBorderRadius,
            boxShadow:
              '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
          },
          roundedBottom: {
            borderRadius: '0 0 1rem 1rem',
            boxShadow:
              '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
          },
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            [`& div`]: {
              borderRadius: defaultBorderRadius,
            },
          },
        },
      },
      MuiSelect: {
        styleOverrides: {
          root: {
            borderRadius: defaultBorderRadius,
          },
        },
      },
      MuiAlert: {
        styleOverrides: {
          root: {
            borderRadius: defaultBorderRadius,
          },
        },
      },
      MuiDialog: {
        styleOverrides: {
          paper: {
            borderRadius: defaultBorderRadius,
          },
        },
      },
    },
  });
};

export default useTheme;
