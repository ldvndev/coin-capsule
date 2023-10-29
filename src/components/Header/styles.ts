import styled from 'styled-components';

export const Container = styled.header`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 2rem 1rem 5rem;

  .link {
    text-decoration: none;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }

  img {
    width: 3rem;
  }

  h1 {
    font-size: 3rem;
    font-family: 'Inter', sans-serif;
    font-weight: 900;
    letter-spacing: -0.75px;
    color: var(--text-title);
  }

  span {
    position: relative;

    svg{
      position: absolute;
      left: -5%;
      bottom: -10%;
    }
  }
`;