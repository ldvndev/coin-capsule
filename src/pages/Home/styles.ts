import styled from "styled-components";

export const Container = styled.main`
  padding: 0 1rem;
`;

export const Content = styled.form`
  max-width: 1120px;
  margin:  2rem auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 3rem;
    border: 0;
    border-radius: 0.25rem;
    
    background: var(--shape);
    font-size: 1rem;
    color: var(--base-text);
    
    outline: none;
  }

  button[type='submit'] {
    background-color: transparent;
    border: none;

    .search-button {
      font-size: 2rem;
      color: var(--highlight);

      transition: filter 0.2s;

      filter: brightness(0.8);
    }
  }
`;