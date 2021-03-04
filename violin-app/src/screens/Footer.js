import '../css/footer.css';

import  violinLogo from '../photos/violin-logo.svg';
import facebookLogo from '../photos/facebookLogo.png';
import Instagram_logo from '../photos/Instagram_logo.png';
import twitterLogo from '../photos/twitterLogo.svg';
import YouTubeIcon from '../photos/YouTubeIcon.png';

import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ChangeTheme from '../ChangeTheme';
import { useContext } from 'react';
import ThemeContext from '../ThemeContext';
import PhoneForwardedIcon from '@material-ui/icons/PhoneForwarded';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { purple } from '@material-ui/core/colors';

export default function Footer(){

    const {t} = useTranslation();

    const {currentTheme} = useContext(ThemeContext);

    return(
        <div>
            <Grid container className={`footerBox footerBox-${currentTheme}`}>
                <Grid item md={4} xs={12} className={`footerLeftBoxes footerLeftBoxes-${currentTheme}`}>
                    <div className="responsiveFooterLeftBoxes">
                        <p>
                            {t('rights')}
                        </p>
                    </div>
                </Grid>
                <Grid item md={4} xs={12} className="footerCenterBoxes center">
                    <div className="responsiveFooterLeftBoxes">
                        <Link className="footerCenterFirstBox" to="#">
                            {t('privacy')}
                        </Link>
                        <Link to="#">
                            {t('terms')}
                        </Link>
                    </div>
                </Grid>
                <Grid item md={4} xs={12} className="footerSocialBox">
                    <div>
                        <div className={`footerLogoBox footerLogoBox-${currentTheme}`}>
                            <img className="footerLogo" src={violinLogo} />
                        </div>
                            <p className={`socialName socialName-${currentTheme}`}>{t('contact')}</p>
                        
                        <div className="footerSocialDiv">
                            <div>
                                <a target="_blank" href="tel: +000 000 000 000">
                                    <PhoneForwardedIcon style={{ color: purple[500] }} className="footerIcons"/>
                                </a>
                            </div>
                            <div>
                                <a target="_blank" href="mailto:myemailaddress@gmail.com">
                                    <MailOutlineIcon style={{ color: purple[500] }} className="footerIcons"/>
                                </a>
                            </div>
                            <div>
                                <a target="_blank" href="#">
                                    <LocationOnIcon style={{ color: purple[500] }} className="footerIcons"/>
                                </a>
                            </div>
                        </div>
                        
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}