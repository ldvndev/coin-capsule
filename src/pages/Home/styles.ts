import styled from "styled-components";

export const Container = styled.main`
  padding: 0 1rem;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;
    
    th {
      font-family: 'Inter', sans-serif;
      font-weight: 900;
      letter-spacing: -0.30px;
      color: var(--text-title);
      font-weight: 700;
      padding: 1rem 2rem;
      text-align: center;
      line-height: 1.5rem;
      text-transform: uppercase;
    }

    td {
      padding: 1rem 2rem;
      border: 0;
      border-radius: 0.25rem;
      background: var(--shape);
      color: var(--base-text);
      border-radius: 0.25rem;
      text-align: center;

      &.tdLass {
        color: var(--red);
      }

      &.tdProfit {
        color: var(--green);
      }
      

      &:first-child {
        color: var(--title);
      }
    }

    .link {
      text-decoration: none;
      color: var(--text-title);
      font-weight: 700;

      transition: filter 0.2s;

      &:hover {
        filter: brightness(0.9);
      }
    }
  }

  @media (max-width: 600px) {
    table {
      border: 0;

      thead{
        border: 0;
        clip: rect(0 0 0 0);
        height: 1px;
        overflow: hidden;
        padding: 0;
        position: absolute;
        margin: -1px;
        width: 1px;
      }
      
      tr {
        border-bottom: 1px solid var(--highlight);
        display: block;
      }

      td {
        border-bottom: 1px solid rgba(221, 221, 221, 0.160);
        display: block;
        font-size: 1rem;
        text-align: right;
      }

      td:last-child {
        border-bottom: 0;
      }

      td:first-child,
      th:first-child {
        border-radius: 0;
      }

      td:last-child,
      th:last-child {
        border-radius: 0;
      }
    }

    table td::before {
      font: 1rem;
      color: var(--text-title);
      text-transform: uppercase;
      font-family: 'Inter', sans-serif;
      letter-spacing: -0.30px;
      font-weight: 900;

      content: attr(data-label);
      float: left;
    }
  }
`;

export const Content = styled.form`
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