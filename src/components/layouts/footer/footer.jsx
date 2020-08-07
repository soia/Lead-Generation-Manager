import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { compose } from '../../../utils';
import logo from '../../assets/images/logoWithWhiteLabel.svg';
import twitter from '../../assets/images/twitter.svg';
import facebook from '../../assets/images/facebook.svg';
import vk from '../../assets/images/vk.svg';
import telegram from '../../assets/images/telegram.svg';
import style from './footer.module.scss';

const Footer = () => (
    <footer className={style.footer}>
        <Link to="/" className={style.footer__logo}>
            <img src={logo} alt="logo" />
        </Link>
        <div className={style.footer__socialIconsWrapper}>
            <a
                href="/"
                target="_blank"
                className={style.footer__socialIconsWrapper_item}
            >
                <img src={twitter} alt="twitter" />
            </a>
            <a
                href="/"
                target="_blank"
                className={style.footer__socialIconsWrapper_item}
            >
                <img src={facebook} alt="facebook" />
            </a>
            <a
                href="/"
                target="_blank"
                className={style.footer__socialIconsWrapper_item}
            >
                <img src={vk} alt="vk" />
            </a>
            <a
                href="/"
                target="_blank"
                className={style.footer__socialIconsWrapper_item}
            >
                <img src={telegram} alt="telegram" />
            </a>
        </div>
    </footer>
);

export default compose(
    withRouter,
)(Footer);
