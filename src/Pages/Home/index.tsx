import React from 'react';
import { StyledButton } from '../../Components/Button/styles';
import * as Style from './style';

export default function Home() {
  return (
    <Style.Container>
      <Style.BoxWhite>
        <Style.ContainerText>
          <Style.Text>Bem-vindo</Style.Text>
          <Style.TextInside>Sistema de controle de tráfego</Style.TextInside>
        </Style.ContainerText>
        <Style.ContainerInput>
          <Style.TextTittle>E-mail</Style.TextTittle>
          <Style.Input></Style.Input>
        </Style.ContainerInput>
        <Style.ContainerInput>
          <Style.TextTittle>Senha</Style.TextTittle>
          <Style.Input></Style.Input>
        </Style.ContainerInput>
        <Style.ContainerButton>
          <Style.Button>Login</Style.Button>
          <Style.TextInside>Ou faça login com</Style.TextInside>
        </Style.ContainerButton>
        <Style.ContainerSocial>
          <Style.BoxSocial color={' #0e56a9'}>
            <Style.IconFacebook />
          </Style.BoxSocial>
          <Style.BoxSocial color={' #07acfe'}>
            <Style.IconTwitter />
          </Style.BoxSocial>
          <Style.BoxSocial color={' #f35c5b'}>
            <Style.IconGoogle />
          </Style.BoxSocial>
        </Style.ContainerSocial>
      </Style.BoxWhite>
    </Style.Container>
  );
}
