import { SweetAlertOptions } from 'sweetalert2';

import { CustomSwalArgs } from './interface';

const customSwal = async (args: CustomSwalArgs) => {
  const SwalLib = await import('sweetalert2');
  const { default: Swal } = SwalLib;

  return Swal.fire({
    confirmButtonColor: '#5c7aea',
    cancelButtonColor: '#d33',
    cancelButtonText: 'Cancelar',
    customClass: {
      confirmButton: 'swal2-button',
      cancelButton: 'swal2-button',
    },

    ...args,
  });
};

const customToast: any = async (args: SweetAlertOptions<any, any>) => {
  let color;

  switch (args.icon) {
    case 'error':
      color = '#f3d7d7';
      break;
    case 'warning':
      color = '#ece2d1';
      break;
    case 'success':
      color = '#daeeda';
      break;
    default:
      color = '#fff';
      break;
  }

  const SwalLib = await import('sweetalert2');
  const { default: Swal } = SwalLib;

  const swal = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: args.timer || 3000,
    timerProgressBar: true,
    background: color,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer);
      toast.addEventListener('mouseleave', Swal.resumeTimer);
    },
  });

  return swal.fire({ ...args });
};

const ErrorToast = (text: string, time: number = 3000) => {
  return customToast({
    icon: 'error',
    title: text,
    timer: time,
  });
};

const SuccessToast = (text: string, time: number = 3000) => {
  return customToast({
    icon: 'success',
    title: text,
    timer: time,
  });
};

export { customSwal, customToast, ErrorToast, SuccessToast };
