import { api } from '../../services/api';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react'

import { BiSearch } from 'react-icons/bi';

import { Container, Content  } from './styles';

export function Home() {
  const [coinList, setCoinList] = useState([]);

  useEffect(() => {
    api.get('/?key=c8415076f55a0324&pref=BRL')
    .then(response => setCoinList(response.data))
  }, [])

  console.log(coinList);

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
            <tr>
              <td data-label="Coin">
                <Link className='link' to="/details/btc">
                  <span>Bitcoin</span> | BTC
                </Link>
              </td>
              <td data-label="Price">R$ 2000,00</td>
              <td data-label="Value Market">R$ 50,00</td>
              <td data-label="Volume" className='tdLass'><span>-4.3</span></td>
            </tr>
          </tbody>
        </table>
    </Container>
  );
}