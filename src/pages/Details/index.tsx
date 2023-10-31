import { useEffect, useState } from "react";
import { Container, Content } from "./styles";
import { useParams } from 'react-router-dom';

interface DetailTypes {
  name: string;
  symbol: string;
  price: string;
  market_cap: string;
  low_24h: string;
  height_25h: string;
  total_volume_24h: string;
  delta_24h: string;
  rank: number;
}

export function Details() {
  const { cripto } = useParams();
  const [details, setDetails] = useState<DetailTypes>();
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    fetch(`https://sujeitoprogramador.com/api-cripto/coin/?key=b4cd8f8fb3de94c6&pref=EUR&symbol=${cripto}`)
      .then(response => response.json())
      .then((data: DetailTypes) => setDetails(data))
      .finally(() => {
        setIsFetching(false);
      })
  }, [])

  console.log(details)

  return(
    <Container>
      <Content>
        <header>
          {isFetching && <h2>Loading information...</h2>}
          <p>{details?.name}</p>
          <p>{details?.symbol}</p>
        </header>

        <div>
         
        </div>
      </Content>
    </Container>
  );
} 