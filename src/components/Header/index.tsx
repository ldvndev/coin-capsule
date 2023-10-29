import { Link } from 'react-router-dom'
import bitcoinImg from '../../assets/bitcoin.png';

import { Container } from "./styles";
import { Underline } from './Underline';

export function Header() {
  return(
    <Container>
        <img src={bitcoinImg} alt="logo Coin-capsule" />
      <Link to='/' className='link'>
        <h1><span>Coin <Underline /></span> Capsule</h1>
      </Link>
    </Container>
  );
}