import { Outlet } from 'react-router-dom';
import { Header } from '../Header';
import { Container } from './styles';

export function Layout() {
  return(
    <>
      <Container>
        <Header />
        <Outlet />
      </Container>
    </>
  )
}