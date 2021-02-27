import  violinLogo from '../photos/violin-logo.svg';
import accountLogo from '../photos/account-logo.svg';

import '../css/header.css';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ChangeTheme from '../ChangeTheme';
import { useContext } from 'react';
import ThemeContext from '../ThemeContext';

const useStyles = makeStyles({
    headerDiv: {
        display: 'flex',
        height: '100%',
        alignItems: 'center'
    },
    AppHeader: {
        zIndex: '100',
        width: '100%',
        top: '0',
        left: '0',
        maxWidth: '1366px',
        backgroundColor: '#fff',
        position: 'fixed',
    },
    navHeader: {
        display: 'flex',
        listStyle: 'none'
    },
    accountDiv: {
        display: 'flex',
        justifyContent: 'flex-end'
    },
    accountBox: {
        display: 'flex',
        flexDirection: 'column',
    },
    accountLogoName: {
        margin: '0px',
        fontSize: '12px',
        paddingBottom: '5px'
    },
    listItem: {
        fontWeight: 'bold',
        fontSize: '20px'
    }
});

export default function Header(){

    const {t, i18n} = useTranslation();

    function changeLang(lang){
        i18n.changeLanguage(lang)
    }

    const {currentTheme} = useContext(ThemeContext);

    const classes = useStyles();

    return(
        <Container maxWidth="lg" className={classes.AppHeader} className={`headerBackground headerBackground-${currentTheme}`}>
            <Grid container spacing={3} className={classes.headerDiv}>
                <Grid item md={1} xs={12}>
                    <Link to='/'>
                        <img src={violinLogo} className={`App-logo App-logo-${currentTheme}`} alt="logo" />
                    </Link>
                </Grid>
                <Grid item md={8} xs={12}>
                    <nav className={classes.navHeader}>
                        <ul className={classes.navHeader}>
                            <Link className={classes.listItem} to='/bio'><li>{t('bio')}</li></Link>
                        </ul>
                        <ul className={classes.navHeader}>
                            <Link className={classes.listItem} to='/press'><li>{t('press')}</li></Link>
                        </ul>
                        <ul className={classes.navHeader}>
                            <Link className={classes.listItem} to='/media'><li>{t('media')}</li></Link>
                        </ul>
                        <ul className={classes.navHeader}>
                            <Link className={classes.listItem} to='/contact'><li>{t('contact')}</li></Link>
                        </ul>
                    </nav>
                </Grid>
                <Grid item md={1} xs={12} className={classes.accountDiv}>
                    <div className={`AccountDiv AccountDiv-${currentTheme}`}>
                    <Link to='/account' className={classes.accountBox}>
                        <img src={accountLogo} className="Account-logo" alt="account logo" />
                        <p className={classes.accountLogoName}>{t('account')}</p>
                    </Link>
                    </div>
                </Grid>
                <Grid item md={2} xs={2} className={classes.accountDiv}>
                    <div>
                        {/* <Button
                            variant="outlined"
                            size="small"
                            color="primary"
                            className='langBtn'
                            onClick={()=> changeLang('en')}
                        >
                            ENG
                        </Button> */}
                        {/* <Button
                            variant="outlined"
                            size="small"
                            color="primary"
                            className='langBtn'
                            onClick={()=> changeLang('ka')}
                        >
                            ქარ
                        </Button> */}
                        <button
                            className="langBtn"
                            onClick={()=> changeLang('en')}
                        >
                            ENG
                        </button>
                        <button
                            className="langBtn"
                            onClick={()=> changeLang('ka')}
                        >
                            ქარ
                        </button>
                            <ChangeTheme />
                    </div>
                </Grid>
            </Grid>
        </Container>
    )
}