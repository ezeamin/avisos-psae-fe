export const DTI = (val: string) => (import.meta.env.DEV ? val : undefined);

export const DTI_LIST = {
  BUTTON: (val: string) => `${val}-button`,
  FOOTER_VERSION: 'footer-version',
  FORM: {
    PROCEEDING: 'proceeding-number-input',
    TEXT: 'text-input',
    FROM_DATE: 'from-date-input',
    TO_DATE: 'to-date-input',
    RESOLUTION: 'resolution-number-input',
    RESOLUTION_TYPE: 'resolution-type-input',
    SUBMIT: 'submit-button',
    CLEAR_FORM: 'clear-form-button',
  },
  ACTIONS: {
    CLOSE: 'close',
  },
};
