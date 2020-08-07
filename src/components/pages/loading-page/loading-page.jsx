import React from 'react';

import style from './loading-page.module.scss';
import logo from '../../assets/images/logoWithWhiteLabel.svg';

const LoadingPage = () => <div className={style.loading}><img src={logo} alt="logo" /></div>;

export default LoadingPage;
