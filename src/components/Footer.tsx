import React from 'react';

const Footer: React.FC<{}> = () => (
  <footer className="py-5">
    <div>
      Currently at{' '}
      <a
        className="font-bold text-pink-800 hover:underline"
        href="https://sumup.com"
        rel="noopener noreferrer"
        target="_blank"
      >
        @sumup
      </a>{' '}
      as Frontend Lead.
    </div>
    <a
      className="font-bold text-pink-800 hover:underline"
      href="https://twitter.com/fernando_fleury"
      rel="noopener noreferrer"
      target="_blank"
    >
      twitter
    </a>{' '}
    <a
      className="font-bold text-pink-800 hover:underline"
      href="https://github.com/fernandofleury"
      rel="noopener noreferrer"
      target="_blank"
    >
      github
    </a>{' '}
    <a
      className="font-bold text-pink-800 hover:underline"
      href="https://www.linkedin.com/in/fernandofleurygil/"
      rel="noopener noreferrer"
      target="_blank"
    >
      linkedin
    </a>
  </footer>
);

export default Footer;
