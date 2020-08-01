import React from 'react';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <p>
        Orgulhosamente criado por
        {' '}
        <a
          style={{
            color: 'var(--primary)'
          }}
          href="https://www.ciromoura.com.br/">
          @CiroMoura
        </a>
        <br /><br />
        durante a #ImersãoReact da
      {' '}
        <a href="https://www.alura.com.br/">
          <img
            src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg"
            alt="Logo Alura"
            style={{
              width: '60px'
            }}
          />
        </a>
      </p>
    </FooterBase >
  );
}

export default Footer;
