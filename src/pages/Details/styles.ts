import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 50%;
  padding: 0 2rem;
  border-right: 3px solid var(--shape);
  border-left: 3px solid var(--shape);

  header {
    display: flex;
    align-items: center;
    justify-content: center;
      
    h2 {
      font-size: 1.5rem;
      color: var(--text-title);
    }

    p {
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--text-title);
    }
  }

  div {
    margin-top: 2rem;
  }

  p {
    font-size: 1rem;
    color: var(--base-text);

    strong {
      color: var(--text-title);
    }
  }

  .profit {
    color: #12f98a;
  }

  .loss {
    color: #F91257;
  }
`