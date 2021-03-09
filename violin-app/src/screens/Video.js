import '../css/mainVideo.css';
import { Helmet } from 'react-helmet';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import Iframe from 'react-iframe';
import { useTranslation } from 'react-i18next';
import { useContext } from 'react';
import ThemeContext from '../ThemeContext';

import violinBackground from '../photos/violinBackground.jpg';
import youtubeLogo from '../photos/youtubeLogo.png';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
      },
      box: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center'
      }
});

export default function Video(){

    const classes = useStyles();

    const {currentTheme} = useContext(ThemeContext);

    const {t} = useTranslation();

    return(
        <div className="mainVideoBox" style={{ backgroundImage: `url(${violinBackground})` }}>
            <Helmet>
                <title>TinaViolin-B/video</title>
            </Helmet>
            <Container className={classes.box} className="responsiveVideoTitle">
                <h1 className={`mainVideoName mainVideoName-${currentTheme}`}>
                    {t('video')}
                </h1>
                <h2 className="mainVideoNameLink">
                    <a className={`youtubeLink youtubeLink-${currentTheme}`} target="_blank" href="https://www.youtube.com/user/violinviolin777/videos">
                        {t('visitYoutube')}
                        <img className={`youtubeIcon youtubeIcon-${currentTheme}`} src={youtubeLogo} />
                    </a>
                </h2>
            </Container>
            <Grid container>
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
                <Grid item md={4} sm={6} xs={12} className="videoContentBlock">
                    <div className="mainVideoContent">
                        <Iframe 
                            url="https://www.youtube.com/embed/BUZs6Y2nU5A"
                            width="390px"
                            height="220px"
                            frameBorder="1px"
                            allow="fullscreen"
                            className={`iframeBox iframeBox-${currentTheme}`}
                        />
                    </div>
                </Grid>
                <Grid item md={4} sm={6} xs={12} className="videoContentBlock">
                    <div className="mainVideoContent">
                        <Iframe 
                            url="https://www.youtube.com/embed/pDLtWEW0InU"
                            width="390px"
                            height="220px"
                            frameBorder="1px"
                            allow="fullscreen"
                            className={`iframeBox iframeBox-${currentTheme}`}
                        />
                    </div>
                </Grid>
                <Grid item md={4} sm={6} xs={12} className="videoContentBlock">
                    <div className="mainVideoContent">
                        <Iframe 
                            url="https://www.youtube.com/embed/3NLYmv8mpYo"
                            width="390px"
                            height="220px"
                            frameBorder="1px"
                            allow="fullscreen"
                            className={`iframeBox iframeBox-${currentTheme}`}
                        />
                    </div>
                </Grid>
                <Grid item md={4} sm={6} xs={12} className="videoContentBlock">
                    <div className="mainVideoContent">
                        <Iframe 
                            url="https://www.youtube.com/embed/8v1eNYk9uAI"
                            width="390px"
                            height="220px"
                            frameBorder="1px"
                            allow="fullscreen"
                            className={`iframeBox iframeBox-${currentTheme}`}
                        />
                    </div>
                </Grid>
                <Grid item md={4} sm={6} xs={12} className="videoContentBlock">
                    <div className="mainVideoContent">
                        <Iframe 
                            url="https://www.youtube.com/embed/OJ0sZjKqh_8"
                            width="390px"
                            height="220px"
                            frameBorder="1px"
                            allow="fullscreen"
                            className={`iframeBox iframeBox-${currentTheme}`}
                        />
                    </div>
                </Grid>
                <Grid item md={4} sm={6} xs={12} className="videoContentBlock">
                    <div className="mainVideoContent">
                        <Iframe 
                            url="https://www.youtube.com/embed/9AKNo9qoudY"
                            width="390px"
                            height="220px"
                            frameBorder="1px"
                            allow="fullscreen"
                            className={`iframeBox iframeBox-${currentTheme}`}
                        />
                    </div>
                </Grid>
                <Grid item md={4} sm={6} xs={12} className="videoContentBlock">
                    <div className="mainVideoContent">
                        <Iframe 
                            url="https://www.youtube.com/embed/hGrOEC5FgBM"
                            width="390px"
                            height="220px"
                            frameBorder="1px"
                            allow="fullscreen"
                            className={`iframeBox iframeBox-${currentTheme}`}
                        />
                    </div>
                </Grid>
                <Grid item md={4} sm={6} xs={12} className="videoContentBlock">
                    <div className="mainVideoContent">
                        <Iframe 
                            url="https://www.youtube.com/embed/BJaWP4adr7s"
                            width="390px"
                            height="220px"
                            frameBorder="1px"
                            allow="fullscreen"
                            className={`iframeBox iframeBox-${currentTheme}`}
                        />
                    </div>
                </Grid>
                <Grid item md={4} sm={6} xs={12} className="videoContentBlock">
                    <div className="mainVideoContent">
                        <Iframe 
                            url="https://www.youtube.com/embed/OTxC_hPQD6A"
                            width="390px"
                            height="220px"
                            frameBorder="1px"
                            allow="fullscreen"
                            className={`iframeBox iframeBox-${currentTheme}`}
                        />
                    </div>
                </Grid>
                <Grid item md={4} sm={6} xs={12} className="videoContentBlock">
                    <div className="mainVideoContent">
                        <Iframe 
                            url="https://www.youtube.com/embed/wmzM-XTuERI"
                            width="390px"
                            height="220px"
                            frameBorder="1px"
                            allow="fullscreen"
                            className={`iframeBox iframeBox-${currentTheme}`}
                        />
                    </div>
                </Grid>
                <Grid item md={4} sm={6} xs={12} className="videoContentBlock">
                    <div className="mainVideoContent">
                        <Iframe 
                            url="https://www.youtube.com/embed/8hqM9q0vWow"
                            width="390px"
                            height="220px"
                            frameBorder="1px"
                            allow="fullscreen"
                            className={`iframeBox iframeBox-${currentTheme}`}
                        />
                    </div>
                </Grid>
                <Grid item md={4} sm={6} xs={12} className="videoContentBlock">
                    <div className="mainVideoContent">
                        <Iframe 
                            url="https://www.youtube.com/embed/4Cqnfa8E7fI"
                            width="390px"
                            height="220px"
                            frameBorder="1px"
                            allow="fullscreen"
                            className={`iframeBox iframeBox-${currentTheme}`}
                        />
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}