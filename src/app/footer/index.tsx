import * as React from 'react';
import { Logo } from './logo';
import './footer.scss';

export const Footer = () => (
  <footer className="Footer">
    <div className="Footer-inner">
      <div className="Footer-main-content">
        <a className="Footer-logo" href="https://monerovision.com/">
          <Logo />
        </a>
      </div>
      <div className="Footer-social-media-wrapper">
        <div className="Footer-social-titles-wrapper">
          <a
            className="Footer-social-media-link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/redotcom"
          >
            <i className="nc-icon nc-logo-twitter size_24px" />
          </a>
          <a
            className="Footer-social-media-link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/company/redotcom"
          >
            <i className="nc-icon nc-logo-linkedin size_24px" />
          </a>
          <a
            className="Footer-social-media-link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/nobd/monerovision"
          >
            <i className="nc-icon nc-logo-github size_24px" />
          </a>
          <a
            className="Footer-social-media-link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/redotexchange"
          >
            <i className="nc-icon nc-logo-facebook size_24px" />
          </a>
        </div>
      </div>
    </div>
  </footer>
);
