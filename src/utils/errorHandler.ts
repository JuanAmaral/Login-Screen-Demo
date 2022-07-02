export const errorHandler = (error?: string) => {
  return alert(error || 'Erro Interno');
};
// const response = error.response
//   ? error?.response?.data?.detail && typeof error.response.data.detail === 'string'
//     ? () => alert(error?.response?.data?.detail)
//     : typeof error.response.data.detail === 'object'
//     ? () => {
//         const errorObj = error.response.data.detail.data;
//         let alertStr = '';
//         Object.keys(errorObj).map((item, index) => {
//           alertStr = `${alertStr}${index !== 0 ? '\n' : ''} ${errorObj[item]}`;
//         });
//         alert(alertStr);
//         console.log(`Error Handler: ${alertStr}`);
//       }
//     : () => alert('Ocorreu um erro inesperado. Tente novamente mais tarde')
//   : () =>
//       typeof error === 'string' ? alert(error) : alert('Ocorreu um erro inesperado. Tente novamente mais tarde');
