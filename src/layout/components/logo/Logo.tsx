import React, { CSSProperties } from 'react';

import './Logo.scss';
import logo from "../logo/With_Orange_No_Text.svg"

type Props = {
  src: string;
  width?: number | string;
  height?: number | string;
  alt?: string;
  style?: CSSProperties;
};

const Logo = ({ alt = '', height = 'auto', width = 'auto', src, style = {} }: Props) => {
  return (
    <div className='logo' style={style}>
      <img src={logo} alt={alt} width={width} height={height} className='logo-img' />
    </div>
  );
};

export default Logo;
