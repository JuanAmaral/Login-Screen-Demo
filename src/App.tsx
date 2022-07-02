import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { AppRouter } from './Routes';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

export default function App() {
  //const { signed, loading } = useAuth();

  //console.log({ logado: signed, loading });
  return (
    <BrowserRouter>
      <AppRouter />
      <ToastContainer autoClose={3000} />
    </BrowserRouter>
  );
}
