import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { compose } from '../../../utils';
import logo from '../../assets/images/logoWithWhiteLabel.svg';
import twitter from '../../assets/images/twitter.svg';
import instagram from '../../assets/images/instagram.svg';
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
                href="https://twitter.com/manager_lead"
                target="_blank"
                rel="noopener noreferrer"
                className={style.footer__socialIconsWrapper_item}
            >
                <img src={twitter} alt="twitter" />
            </a>
            <a
                href="https://instagram.com/leadgenerationmanager1?igshid=yxlrnl0a0zuy"
                target="_blank"
                rel="noopener noreferrer"
                className={style.footer__socialIconsWrapper_item}
            >
                <img src={instagram} alt="instagram" />
            </a>
            <a
                href="https://vk.com/public197706339"
                target="_blank"
                rel="noopener noreferrer"
                className={style.footer__socialIconsWrapper_item}
            >
                <img src={vk} alt="vk" />
            </a>
            <a
                href="https://t.me/LeadGenerationM"
                target="_blank"
                rel="noopener noreferrer"
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
