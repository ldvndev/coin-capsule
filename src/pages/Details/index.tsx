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
  formatPrice: string;
  formatMarket: string;
  formatLowPrice: string;
  formatHightPrice: string;
}

export function Details() {
  const { cripto } = useParams();
  const [details, setDetails] = useState<DetailTypes>();
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    fetch(`https://sujeitoprogramador.com/api-cripto/coin/?key=b4cd8f8fb3de94c6&pref=EUR&symbol=${cripto}`)
      .then(response => response.json())
      .then((data: DetailTypes) => {
        const price = Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL"
        })
        const resultData = {
          ...data,
          formatPrice: price.format(Number(data.price)),
          formatMarket: price.format(Number(data.market_cap)), 
          formatLowPrice: price.format(Number(data.low_24h)),
          formatHightPrice: price.format(Number(data.height_25h))
        }
        
        setDetails(resultData)
      })
      .finally(() => {
        setIsFetching(false);
      })

  }, [cripto])

  return(
    <Container>
      <Content>
        <header>
          {isFetching && <h2>Loading information...</h2>}
          <p><strong>{details?.name} </strong>{details?.symbol}</p>
        </header>

        <div>
        <p>
          <strong>Preço: </strong> {details?.formatPrice}
        </p>
        <p>
          <strong>Menor preço 24h :</strong> {details?.formatLowPrice}
        </p>
        <p>
          <strong>Delta 24h: </strong> 
          <span className={Number(details?.delta_24h) >= 0 ? 'loss' : 'profit'}>
            {details?.delta_24h}
          </span>
        </p>
        <p>
          <strong>Valor mercado: </strong> {details?.formatMarket}
        </p>
        </div>
      </Content>
    </Container>
  );
} 