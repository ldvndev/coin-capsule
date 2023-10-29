import { router } from './router/index';
import { RouterProvider } from 'react-router-dom';

import { GlobalStyle } from "./styles/global";

export function App() {
  return(
    <>
      <RouterProvider router={router}/>

      <GlobalStyle />
    </>
  );
}