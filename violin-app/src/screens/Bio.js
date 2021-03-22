import '../css/bio.css';
import { Helmet } from 'react-helmet';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { useContext } from 'react';
import ThemeContext from '../ThemeContext';

import  mainPhoto from '../photos/mainPhoto.jpg';

const useStyles = makeStyles((theme) => ({
    biographyPhoto: {
        width: '100%'
    },
    bioPar: {
        fontSize: '18px',
        lineHight: '1.3',
        fontFamily: "Segoe UI Symbol",
        textIndent: '15px',
    },
    BioName: {
        display: 'flex',
        justifyContent: 'center',
        transform: 'rotate(-2deg)',
        fontSize: '50px',
        opacity: '0.9',
        fontFamily: "'Parisienne', cursive"
    }
  }));

export default function AboutMe(){

    const classes = useStyles();

    const {t} = useTranslation();

    const {currentTheme} = useContext(ThemeContext);

    return(
        <>
            <div className={`headerBottom headerBottom-${currentTheme}`}></div>
            <Container maxWidth="xl" className={`bioContainer-${currentTheme}`}>
                <Helmet>
                    <title>{t('helmetBio')}</title>
                </Helmet>
                <Grid container spacing={3}  className={`backColor backColor-${currentTheme}`} >
                    <Grid item md={5} sm={12} xs={12} className="bioImageGrid">
                        <div className="bioPhoto">
                            <img className="bioImage" className={classes.biographyPhoto} src={mainPhoto} alt="logo" />
                        </div>
                    </Grid>
                    <Grid item md={7} sm={12} xs={12} className={classes.bioPar} className={`bioText bioText-${currentTheme}`}>
                        <h1 className={classes.BioName}>
                            <div className="responsiveBiograhpyName">
                                {t('name')}
                            </div>
                            </h1>
                        
                        <p>
                            {t('biographyOne')}
                        </p>
                        <p>
                            {t('biographyTwo')}
                        </p>
                        <p>
                            {t('biographyThird')}
                        </p>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}