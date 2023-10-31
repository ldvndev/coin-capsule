import { Link, useNavigate } from 'react-router-dom';
import { FormEvent, useState } from 'react'
import { useFetch } from '../../hooks/useFetch';
import { BiSearch } from 'react-icons/bi';

import { Container, Content } from './styles';

interface CoinsType {
  name: string;
  price: string;
  symbol: string;
  delta_24h: string;
  volume_24h: string;
  market_cap: string;
}

export function Home() {
  const [searchInputValue, setSearchInputValue] = useState('');
  const { data: coins, isFetching } = useFetch<CoinsType[]>('/?key=c8415076f55a0324')
  const navigate = useNavigate();

  function handleSearchCoin(event: FormEvent) {
    event.preventDefault();

    navigate(`details/${searchInputValue}`)
  }

  return(
    <Container>
      <Content onSubmit={handleSearchCoin}>
        <input 
          type='text'  
          placeholder='Search (Ex: AXS...)'
          value={searchInputValue}
          onChange={event => setSearchInputValue(event.target.value)}
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
              <th>24h Change</th>
            </tr>
          </thead>
          
          <tbody>
            { isFetching && <p>Loading ...</p>}
            {coins?.map(coin => (
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