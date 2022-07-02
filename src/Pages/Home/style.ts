import styled from 'styled-components';
import {Facebook}  from '@styled-icons/boxicons-logos/Facebook'
import {Twitter}  from '@styled-icons/boxicons-logos/Twitter'
import {GooglePlus}  from '@styled-icons/boxicons-logos/GooglePlus'
export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background: #3e2791;
  justify-content: flex-end;
`;

export const BoxWhite = styled.div`
  background: white;
  height: 30rem;
  width: 84%;
  border-radius: 50px 50px 0px 0px;
  padding: 2rem;
`;
export const ContainerText = styled.div`
  display:flex;
  flex-direction: column;
  width: 100%;
`;

export const Text = styled.p`
  color: #614cb3;
  font-size: 2rem;
`;
export const TextInside = styled.p`
  font-size: 1rem;
  color: gray;
`;
export const ContainerInput = styled.div`
  display:flex;
  width: 100%;
  flex-direction: column;
`;
export const TextTittle = styled.h1`
  color: #bfbfbf;
  font-size: 1rem;
  opacity: 0.8;
  margin-top: 1rem;
`;
export const Input = styled.input `
  width: 100%;
  border: none;
  border-bottom: 2px #bbb3d2 solid;
`;
export const Button = styled.button`
  background: #5e44c2;
  color: white;
  width: 13rem;
  height: 3rem;
  border-radius: 20px;
  outline: none;
  border: none;
  font-weight: 900;
  box-shadow: 0px 15px 30px rgba(13, 153, 255, 0.4);
  margin-bottom: 1rem;
  cursor: pointer;
`;
export const ContainerButton = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem;
  flex-direction: column;
  align-items: center;
`;
export const ContainerSocial = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 2rem;
`;
export const BoxSocial = styled.div<{color: string}>`
  height: 2.1rem;
  width: 3.5rem;
  background: ${props => props.color };
  border-radius: 20px;
  display:flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 15px 30px rgba(13, 153, 255, 0.4);
  cursor: pointer;
`;

export const IconFacebook = styled(Facebook)`
  width: 1.5rem;
  height: 1.5rem;
  color: White;
  
`;
  
export const IconTwitter = styled(Twitter)`
  width: 1.5rem;
  height: 1.5rem;
  color: White;
`;
export const IconGoogle = styled(GooglePlus)`
  width: 1.5rem;
  height: 1.5rem;
  color: White;
`;
