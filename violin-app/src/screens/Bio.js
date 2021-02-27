import  mainPhoto from '../photos/mainPhoto.jpg';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import '../css/bio.css'
import { useContext } from 'react';
import ThemeContext from '../ThemeContext';

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
        // textShadow: '1px 1px #ff0000',
        fontFamily: "'Parisienne', cursive"
    }
  }));

export default function AboutMe(){

    const classes = useStyles();

    const {t} = useTranslation();

    const {currentTheme} = useContext(ThemeContext);

    return(
        <Container maxWidth="xl" className={`bioContainer-${currentTheme}`}>
            <Grid container spacing={3}  className={`backColor backColor-${currentTheme}`} >
                <Grid item md={5} className="bioImageGrid">
                    <div className="bioPhoto">
                        <img className="bioImage" className={classes.biographyPhoto} src={mainPhoto} alt="logo" />
                    </div>
                    
                </Grid>
                <Grid item md={7} className={classes.bioPar} className={`bioText bioText-${currentTheme}`}>
                    <h1 className={classes.BioName}>{t('name')}</h1>
                    <p>{t('biographyOne')}</p>
                    <p>{t('biographyTwo')}</p>
                    <p>{t('biographyThird')}</p>
                </Grid>
            </Grid>
        </Container>
    )
}