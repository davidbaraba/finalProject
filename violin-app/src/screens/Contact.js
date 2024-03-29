import '../css/contact.css';
import { Helmet } from 'react-helmet';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from '@material-ui/core/Button';
import Iframe from 'react-iframe';
import { useContext } from 'react';
import ThemeContext from '../ThemeContext';
import { useTranslation } from 'react-i18next';

import facebookLogo from '../photos/facebookLogo.svg';
import instagramLogo from '../photos/InstagramLogo.svg';
import twitterLogo from '../photos/twitterLogo.svg';
import YouTubeIcon from '../photos/YouTubeIcon.png';
import soundCloud from '../photos/soundCloud.svg';
import  contactBackgroundPhoto from '../photos/contactBackgroundPhoto.jpg';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(2),
        width: '50ch',
      },
    },
    textArea: {
        width: '58ch',
    },
    button: {
        margin: theme.spacing(1),
        width: '15ch',
      },
  }));

export default function Contact(){

    const classes = useStyles();

    const {currentTheme} = useContext(ThemeContext);
    const {t} = useTranslation();

    return(
        <>
            <div className={`headerBottom headerBottom-${currentTheme}`}></div>
            <div className={`contactDiv contactDiv-${currentTheme}`}>
            <Helmet>
                <title>{t('helmetContact')}</title>
            </Helmet>
                <Container maxWidth="lg">
                    <h1 className="contactText" style={{ backgroundImage: `url(${contactBackgroundPhoto})` }}>
                        {t('contact_me')}
                    </h1>
                    <Grid container spacing={3} className={`textBox`}>
                        <Grid item md={8} sm={12} xs={12}>
                            <div className={`contactField contactField-${currentTheme}`}>
                                <form className={classes.root} noValidate autoComplete="off">
                                    <div className="formDiv">
                                        <TextField 
                                            className={`fieldBlock fieldBlock-${currentTheme}`}
                                            id="outlined-basic" 
                                            label={t('labelName')}
                                            variant="outlined" 
                                        />
                                    </div>
                                    <div className="formDiv">
                                        <TextField 
                                            className={`fieldBlock fieldBlock-${currentTheme}`}
                                            id="outlined-basic"
                                            label={t('labelNumber')}
                                            variant="outlined" 
                                        />
                                    </div>
                                    <div className="formDiv">
                                        <TextField 
                                            className={`fieldBlock fieldBlock-${currentTheme}`}
                                            id="outlined-basic" 
                                            label={t('labelMail')}
                                            variant="outlined" 
                                        />
                                    </div>
                                    <div className={`fieldBlockArea fieldBlockArea-${currentTheme}`}>
                                        <TextareaAutosize
                                            className={classes.textArea} 
                                            className="fieldBlockArea"
                                            aria-label="minimum height" 
                                            rowsMin={5} 
                                            placeholder={t('textArea')}
                                        />
                                    </div>
                                    <p className="formDiv">
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        className="submitBtn"
                                        className={classes.button}
                                    >
                                        {t('sendBtn')}
                                    </Button>
                                    </p>
                                </form>
                            </div>
                        </Grid>
                        <Grid item md={4} sm={12} xs={12} className="socialBox">
                            <div className={`contactField contactField-${currentTheme}`}>
                                <a target="_blank" className="socialLink" href="https://www.facebook.com/TikoBarabadzeViolinist">
                                    <img className="fbShare" src={facebookLogo} />
                                    <h5 className={`fbShareName fbShareName-${currentTheme}`}>
                                        {t('facebook')}
                                    </h5>
                                </a>
                            </div>
                            <div className={`contactField contactField-${currentTheme}`}>
                                <a target="_blank" className="socialLink" href="https://www.instagram.com/itstinaviolin_b/">
                                    <img className="instaShare" src={instagramLogo} />
                                    <h5 className={`instaShareName instaShareName-${currentTheme}`}>
                                        {t('instagram')}
                                    </h5>
                                </a>
                            </div>
                            <div className={`contactField lastThreeIcon contactField-${currentTheme}`}>
                                <a target="_blank" className="socialLink" href="https://twitter.com/twitter">
                                    <img className="tweeterShare" src={twitterLogo} />
                                    <h5 className={`tweeterShareName tweeterShareName-${currentTheme}`}>
                                        {t('twitter')}
                                    </h5>
                                </a>
                            </div>
                            <div className={`contactField lastThreeIcon contactField-${currentTheme}`}>
                                <a target="_blank" className="socialLink" href="https://www.youtube.com/user/violinviolin777/videos">
                                    <img className="youTubeShare" src={YouTubeIcon} />
                                    <h5 className={`youTubeShareName youTubeShareName-${currentTheme}`}>
                                        {t('youtube')}
                                    </h5>
                                </a>
                            </div>
                            <div className={`contactField lastThreeIcon contactField-${currentTheme}`}>
                                <a target="_blank" className="socialLink" href="https://soundcloud.com/tinaviolin-b">
                                    <img className="youTubeShare" src={soundCloud} />
                                    <h5 className={`youTubeShareName youTubeShareName-${currentTheme}`}>
                                        {t('soundCloud')}
                                    </h5>
                                </a>
                            </div>
                            <div className={`contactSocialText contactSocialText-${currentTheme}`}>
                                {t('follow_tina')}
                            </div>
                        </Grid>
                    </Grid>
                </Container>
                <div className={`mapBox mapBox-${currentTheme}`} id="id">
                    <Container maxWidth="lg">
                        <Iframe 
                            url='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1489.2568207036172!2d44.776201368127474!3d41.7094339887041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4044730f2b34da33%3A0xf5ad54b64f089259!2sPatronus%20Legal!5e0!3m2!1ska!2sge!4v1613842202364!5m2!1ska!2sge'
                            width="100%"
                            height="450px"
                            frameBorder="0"
                            loading="lazy"
                            id="myId"
                            className="myClassname"
                            display="initial"
                            position="relative"
                        />
                    </Container>
                </div>
            </div>
        </>
    )
}