import styled from 'styled-components';
import { darken, grayscale } from 'polished'

export const StyledButton = styled.button`
  padding: 0.7rem 1rem;
  min-width: 3rem;
  border-radius: 5px;
  font-weight: bold;
  z-index: 0;
  outline: none;
  border: none;
  transition: 0.42s;
  color: ${({ theme }) => theme.colors.shape};
  background: ${({ theme }) => theme.colors.primary};
  :hover {
    background: ${({ theme }) => darken(0.2, theme.colors.primary)};
  }
  &:disabled {
    pointer-events: none;
    background-color: ${props => grayscale(props.theme.colors.primary)} !important;
  }
`;
