import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  background: var(--background);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 2.3rem;
    color: var(--secondary);
  }
  i {
    margin-top: 20px;
    font-size: 1.2rem;
  }
`
