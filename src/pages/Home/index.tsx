import { BiSearch } from 'react-icons/bi';

import { Container, Content } from './styles';

export function Home() {
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
    </Container>
  );
}