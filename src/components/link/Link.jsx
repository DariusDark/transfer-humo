import React from 'react';
import './Link.css';

function Link({classValue, source, children}) {
  return <a className={`link ${classValue}`} href={source}>{children}</a>;
}

export default Link;
