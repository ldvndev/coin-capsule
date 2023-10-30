import { Container } from "./styles";
import { useParams } from 'react-router-dom';

export function Details() {
  const { cripto } = useParams();

  return(
    <Container>
      <h1>Pagina detalhes: { cripto }</h1>
    </Container>
  );
}