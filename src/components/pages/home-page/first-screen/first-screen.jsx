import React from 'react';
import ReactWOW from 'react-wow';
import LGM_WP from '../../../assets/LGM_WP.pdf';
import background from './images/firstScreenBg.svg';
import mobileBackground from './images/mobile-background.svg';
import style from './first-screen.module.scss';

const FirstScreen = () => (
    <div className={style.firstScreen}>
        <ReactWOW
            disabled={!(window.innerWidth > 767)}
            animation="fadeInLeft"
            delay="0.01s"
        >
            <section>
                <h1 className={style.firstScreen__title}>Lead Generation Manager</h1>
                <h3 className={style.firstScreen__subTitle}>
                    Successful business development and profit growth are impossible
                    without an effective mechanism for generating potential clients -
                    leads. Lead generation is a marketing tactic aimed at finding leads
                    with specific contact information. But it often takes a long time to
                    find such contacts. That's why the LEAD GENERATION MANAGER team has
                    developed a platform that will save your time and effort, spent on
                    finding leads and reward everyone involved in the lead generation
                    process.
                </h3>
            </section>
            <a
                href={LGM_WP}
                className={style.firstScreen__button}
                target="_blank"
                rel="noopener noreferrer"
            >
                View Whitepaper
            </a>
        </ReactWOW>
        <ReactWOW
            disabled={!(window.innerWidth > 767)}
            animation="fadeInRight"
            delay="0.01s"
        >
            <img
                className={style.firstScreen__background}
                src={background}
                alt="background"
            />
        </ReactWOW>
        <img
            className={style.firstScreen__mobileBackground}
            src={mobileBackground}
            alt="mobileBackground"
        />
    </div>
);

export default FirstScreen;
