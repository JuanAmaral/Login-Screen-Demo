import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  min-width: 100vw;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const MainContent = styled.main`
  display: flex;
  align-self: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  background: linear-gradient(purple, transparent);
`;

export const DonateForm = styled.form`
  display: flex;
  flex-direction: column;

  section:first-of-type {
    justify-content: center;
  }

  section {
    display: flex;
    align-items: flex-end;
    flex: 1;
    width: 100%;
    margin-top: 1rem;
    flex-wrap: wrap;
    justify-content: center;
    margin: -0.5rem;
    margin-top: 0.5rem;
    & > * {
      margin: 0.5rem;
      @media screen and (max-width: 360px) {
        margin-top: 1rem;
      }
    }

    & > button {
      min-width: 4rem;
      align-items: center;
      align-self: stretch;
      @media screen and (max-width: 360px) {
        flex: 1;
      }
      &[type='submit'] {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.5rem;
        & > svg {
          fill: #fff;
        }
      }
    }
  }
`;
