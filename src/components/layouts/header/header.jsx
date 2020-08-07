import React from 'react';
import { Link } from 'react-router-dom';
import ReactWOW from 'react-wow';
import logo from '../../assets/images/logoWithBlackLabel.svg';
import twitter from '../../assets/images/twitter.svg';
import facebook from '../../assets/images/facebook.svg';
import vk from '../../assets/images/vk.svg';
import telegram from '../../assets/images/telegram.svg';
import style from './header.module.scss';

const Header = () => (
    <header className={style.header}>
        <ReactWOW
            disabled={!(window.innerWidth > 767)}
            animation="fadeInDown"
            delay="0.01s"
        >
            <Link to="/" className={style.header__logo}>
                <img src={logo} alt="logo" />
            </Link>
        </ReactWOW>
        <ReactWOW
            disabled={!(window.innerWidth > 767)}
            animation="fadeInDown"
            delay="0.01s"
        >
            <div className={style.header__socialIconsWrapper}>
                <a
                    href="/"
                    target="_blank"
                    className={style.header__socialIconsWrapper_item}
                >
                    <img src={twitter} alt="twitter" />
                </a>
                <a
                    href="/"
                    target="_blank"
                    className={style.header__socialIconsWrapper_item}
                >
                    <img src={facebook} alt="facebook" />
                </a>
                <a
                    href="/"
                    target="_blank"
                    className={style.header__socialIconsWrapper_item}
                >
                    <img src={vk} alt="vk" />
                </a>
                <a
                    href="/"
                    target="_blank"
                    className={style.header__socialIconsWrapper_item}
                >
                    <img src={telegram} alt="telegram" />
                </a>
            </div>
        </ReactWOW>
    </header>
);

export default Header;
