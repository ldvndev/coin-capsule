import { RouterProvider } from 'react-router-dom';
import { router } from './router/index';

import { GlobalStyle } from "./styles/global";

export function App() {
  return(
    <>
      <RouterProvider router={router}/>

      <GlobalStyle />
    </>
  );
}