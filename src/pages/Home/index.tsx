import { api } from '../../services/api';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react'

import { BiSearch } from 'react-icons/bi';

import { Container, Content  } from './styles';

interface CoinsType {
  name: string;
  price: string;
  symbol: string;
  delta_24h: string;
  volume_24h: string;
  market_cap: string;
}

export function Home() {
  const [coins, setCoins] = useState<CoinsType[]>([]);

  useEffect(() => {
    api.get('/?key=b4cd8f8fb3de94c6&pref=BRL')
    .then(response => {

      setCoins(response.data.coins.slice(0, 20));
    })
  }, []);

  return(
    <Container>
      <Content>
        <input 
          type='text'  
          placeholder='Search'
        />
        <button type="submit">
          <BiSearch  className='search-button' />
        </button>
      </Content>

        <table>
          <thead>
            <tr>
              <th>Coin</th>
              <th>Value Market</th>
              <th>Price</th>
              <th>Volume</th>
            </tr>
          </thead>

          <tbody>
            {coins.map(coin => (
              <tr key={coin.name}>
                <td data-label="Coin">
                  <Link className='link' to={`/details/${coin.symbol}`}>
                    <span className='span-link'>{coin.name}</span> | {coin.symbol}
                  </Link>
                </td>
                <td data-label="Value Market">
                {Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                  }).format(+coin.market_cap)}
                </td>
                <td data-label="Price">
                {Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                  }).format(+coin.price)}
                </td>
                <td 
                  data-label="Volume"
                >
                  <span>
                    {coin.delta_24h}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
    </Container>
  );
}