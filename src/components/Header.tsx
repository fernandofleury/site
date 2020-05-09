import React from 'react';
import { Link } from 'gatsby';

const Header: React.FC<{}> = () => (
  <header className="py-3 mb-2 font-mono text-pink-900">
    <Link to="/">
      <h3 className="text-4xl font-bold">fernando fleury</h3>
    </Link>
    <h4>software development</h4>
  </header>
);

export default Header;
