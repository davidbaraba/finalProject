import '../css/mainVideo.css';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import Iframe from 'react-iframe';
import { useTranslation } from 'react-i18next';

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

export default function Press(){

    const classes = useStyles();
    const {t} = useTranslation();

    return(
        <div className="mainVideoBox" style={{ backgroundImage: `url(${violinBackground})` }}>
            <Container className={classes.box}>
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
            <Grid container>
                <Grid item md={12} xs={12}>
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
                <Grid item md={4} className="videoContentBlock">
                    <div>
                        <Iframe 
                            url="https://www.youtube.com/embed/BUZs6Y2nU5A"
                            width="390px"
                            height="220px"
                            frameBorder="1px"
                            allow="fullscreen"
                            className="iframeBox"
                        />
                    </div>
                </Grid>
                <Grid item md={4} className="videoContentBlock">
                    <div className="mainVideoContent">
                        <Iframe 
                            url="https://www.youtube.com/embed/pDLtWEW0InU"
                            width="390px"
                            height="220px"
                            frameBorder="1px"
                            allow="fullscreen"
                            className="iframeBox"
                        />
                    </div>
                </Grid>
                <Grid item md={4} className="videoContentBlock">
                    <div className="mainVideoContent">
                        <Iframe 
                            url="https://www.youtube.com/embed/3NLYmv8mpYo"
                            width="390px"
                            height="220px"
                            frameBorder="1px"
                            allow="fullscreen"
                            className="iframeBox"
                        />
                    </div>
                </Grid>
                <Grid item md={4} className="videoContentBlock">
                    <div className="mainVideoContent">
                        <Iframe 
                            url="https://www.youtube.com/embed/8v1eNYk9uAI"
                            width="390px"
                            height="220px"
                            frameBorder="1px"
                            allow="fullscreen"
                            className="iframeBox"
                        />
                    </div>
                </Grid>
                <Grid item md={4} className="videoContentBlock">
                    <div className="mainVideoContent">
                        <Iframe 
                            url="https://www.youtube.com/embed/OJ0sZjKqh_8"
                            width="390px"
                            height="220px"
                            frameBorder="1px"
                            allow="fullscreen"
                            className="iframeBox"
                        />
                    </div>
                </Grid>
                <Grid item md={4} className="videoContentBlock">
                    <div className="mainVideoContent">
                        <Iframe 
                            url="https://www.youtube.com/embed/9AKNo9qoudY"
                            width="390px"
                            height="220px"
                            frameBorder="1px"
                            allow="fullscreen"
                            className="iframeBox"
                        />
                    </div>
                </Grid>
            </Grid>
            
        </div>
    )
}