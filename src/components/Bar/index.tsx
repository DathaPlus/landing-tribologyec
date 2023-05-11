import React from 'react';

function Bar() {
  return (
    <nav className="navbar">
      <div className="navbar__left">
        <img className="navbar__logo" src="/img/vector.png" alt="Logo" />
        <div className="navbar__title">
          <span className="navbar__title-main">TRIBOLOGYEC</span>
          <span className="navbar__title-sub">CIENCIA TECNOLOGIA Y ECONOMIA A SU SERVICIO</span>
        </div>
      </div>
      <div className="navbar__right">
        <img className="navbar__icon" src="/img/logos/mail.svg" alt="Logo" />
        <a className="navbar__link" href="mailto:info@tribologyec.com">
          INFO@MAIL.COM
        </a>
        <img className="navbar__icon" src="/img/logos/phone.svg" alt="Logo" />
        <a className="navbar__link" href="tel:+1-234-567-8900">
          000.000.0000
        </a>
      </div>
    </nav>
  );
}

export default Bar;
