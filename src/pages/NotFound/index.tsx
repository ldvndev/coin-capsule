import { Link } from "react-router-dom";
import { Container } from "./styles";
import { Underline } from "./Underline";

export function NotFound() {
  return(
    <Container>
      <h1>Error: 404</h1>
      <h2>This page does not exist</h2>
      <span><Link className="link" to='/'>Go to Home <Underline/></Link></span>
    </Container>
  )
}