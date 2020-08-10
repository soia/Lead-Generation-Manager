import React from 'react';
import { Link } from 'react-router-dom';
import ReactWOW from 'react-wow';
import logo from '../../assets/images/logoWithBlackLabel.svg';
import twitter from '../../assets/images/twitter.svg';
import instagram from '../../assets/images/instagram.svg';
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
                    href="https://twitter.com/manager_lead"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={style.header__socialIconsWrapper_item}
                >
                    <img src={twitter} alt="twitter" />
                </a>
                <a
                    href="https://instagram.com/leadgenerationmanager1?igshid=yxlrnl0a0zuy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={style.header__socialIconsWrapper_item}
                >
                    <img src={instagram} alt="instagram" />
                </a>
                <a
                    href="https://vk.com/public197706339"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={style.header__socialIconsWrapper_item}
                >
                    <img src={vk} alt="vk" />
                </a>
                <a
                    href="https://t.me/LeadGenerationM"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={style.header__socialIconsWrapper_item}
                >
                    <img src={telegram} alt="telegram" />
                </a>
            </div>
        </ReactWOW>
    </header>
);

export default Header;
