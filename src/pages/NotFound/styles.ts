import styled from "styled-components";

export const Container = styled.div`
  margin-top: 10rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1{
    color: var(--text-title);
    font-size: 3rem;
  }

  h2 {
    font-size: 2rem;
    color: var(--base-text);
  }

  span {
    color: var(--highlight);
    font-size: 1.8rem;
    font-weight: 700;
    position: relative;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }

    svg{
      position: absolute;
      left: 40%;
      bottom: -20%;
    }

    .link {
      text-decoration: none;
    }
  }
`