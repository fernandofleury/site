import React from 'react';

const Footer: React.FC<{}> = () => (
  <footer className="py-5">
    <div>
      Trabalhando na{' '}
      <a
        className="font-bold text-pink-800 hover:underline"
        href="https://twitter.com/henngeone"
        rel="noopener noreferrer"
        target="_blank"
      >
        @hennge
      </a>{' '}
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
      href="https://t.me/fernandusso"
      rel="noopener noreferrer"
      target="_blank"
    >
      telegram
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
