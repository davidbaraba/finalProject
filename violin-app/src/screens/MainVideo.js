import '../css/mainVideo.css';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import Iframe from 'react-iframe';
import { useTranslation } from 'react-i18next';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

import violinBackground from '../photos/violinBackground.jpg';
import youtubeLogo from '../photos/youtubeLogo.png';
import { useContext } from 'react';
import ThemeContext from '../ThemeContext';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
      },
      box: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
      }
});

export default function MainVideo(){

    const {currentTheme} = useContext(ThemeContext);

    const classes = useStyles();
    const {t} = useTranslation();

    return(
        <div className="mainVideoBox" style={{ backgroundImage: `url(${violinBackground})` }}>
            <Container className={classes.box} className="responsiveVideoTitle">
                <h1 className="mainVideoName">
                    {t('video')}
                </h1>
                <h2 className="mainVideoNameLink">
                <a className="youtubeLink" target="_blank" href="https://www.youtube.com/user/violinviolin777/videos">
                    {t('visitYoutube')}
                    <img className="youtubeIcon" src={youtubeLogo} />
                </a>
                </h2>
            </Container>
            <Grid container className="IframeBox">
                <Grid item md={12} sm={12} xs={12}>
                <div className="mainVideoFirst">
                    <Iframe 
                        url="https://www.youtube.com/embed/HR-0idJO1Sg"
                        width="550px"
                        height="350px"
                        frameBorder="1px"
                        allow="fullscreen"
                    />
                </div>
                </Grid>
                <Grid item md={4} sm={12} className="videoContentBlock">
                    <div className="mainVideoContent">
                        <Iframe 
                            url="https://www.youtube.com/embed/BUZs6Y2nU5A"
                            width="350px"
                            height="220px"
                            frameBorder="1px"
                            allow="fullscreen"
                            className={`iframeBox iframeBox-${currentTheme}`}
                        />
                    </div>
                </Grid>
                <Grid item md={4} sm={12} className="videoContentBlock">
                    <div className="mainVideoContent">
                        <Iframe 
                            url="https://www.youtube.com/embed/8v1eNYk9uAI"
                            width="350px"
                            height="220px"
                            frameBorder="1px"
                            allow="fullscreen"
                            className={`iframeBox iframeBox-${currentTheme}`}
                        />
                    </div>
                </Grid>
                <Grid item md={4} sm={12} className="videoContentBlock">
                    <div className="mainVideoContent">
                        <Iframe 
                            url="https://www.youtube.com/embed/3NLYmv8mpYo"
                            width="350px"
                            height="220px"
                            frameBorder="1px"
                            allow="fullscreen"
                            className={`iframeBox iframeBox-${currentTheme}`}
                        />
                    </div>
                </Grid>
                <div className="videoChangeBtn">
                    <Button variant="contained" color="secondary" className={`videoChangeBtnDark-${currentTheme}`}>
                        <Link to='/video'>Sea More</Link>
                    </Button>
                </div>
                
            </Grid>
            
        </div>
    )
}