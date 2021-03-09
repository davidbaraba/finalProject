import  violinLogo from '../photos/violin-logo.svg';
import accountLogo from '../photos/account-logo.svg';

import '../css/header.css';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Container } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ChangeTheme from '../ChangeTheme';
import { useContext, useState } from 'react';
import ThemeContext from '../ThemeContext';
import { Helmet } from 'react-helmet';

const useStyles = makeStyles({
    // AppHeader: {
    //     zIndex: '100',
    //     width: '100%',
    //     top: '0',
    //     left: '0',
    //     maxWidth: '1366px',
    //     backgroundColor: '#fff',
    //     position: 'fixed'
    // },
    headerDiv: {
        display: 'flex',
        height: '100%',
        alignItems: 'center',
        // position: 'fixed'
    },
    navHeader: {
        display: 'flex',
        listStyle: 'none',
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
        fontSize: '20px',
        '&:hover': {
            color: "#d3d3d3",
          }
    }
});

export default function Header(){

    const {t, i18n} = useTranslation();

    function changeLang(lang){
        i18n.changeLanguage(lang);
    }

    const {currentTheme} = useContext(ThemeContext);

    const classes = useStyles();

    function classAdd(){
        let element = document.getElementById('burger');
        if(element.classList.contains('active')){
           element.classList.remove('active') 
        }else{
            element.classList.add('active')
        }

        let navElement = document.getElementById('navList');
        if(navElement.classList.contains('active')){
            navElement.classList.remove('active') 
        }else{
            navElement.classList.add('active')
        }
    }

    return(
        <div className={`AppHeader AppHeader-${currentTheme}`}>
        <Container maxWidth="lg">
        <Helmet>
            <title>TinaViolin-B</title>
        </Helmet>
            <Grid container spacing={3} className={classes.headerDiv}>
                <Grid item md={1} sm={1} xs={2}>
                    <Link to='/Home'>
                        <img src={violinLogo} className={`App-logo App-logo-${currentTheme}`} alt="logo" />
                    </Link>
                </Grid>
                <Grid item md={8} className={`navList navList-${currentTheme}`} id="navList">
                    <nav className={classes.navHeader} className="nav">
                        <ul className={classes.navHeader}>
                            <Link className={classes.listItem} to='/bio'><li>{t('bio')}</li></Link>
                        </ul>
                        <ul className={classes.navHeader}>
                            <Link className={classes.listItem} to='/press'><li>{t('press')}</li></Link>
                        </ul>
                        {/* <ul className={classes.navHeader}>
                            <Link className={classes.listItem} to='/media'><li>{t('media')}</li></Link>
                        </ul> */}
                        <ul className={classes.navHeader}>
                        <div className="dropdown">
                            <button className={`dropbtn dropbtn-${currentTheme}`}>{t('media')}</button>
                                <div className={`dropdown-content dropdown-content-${currentTheme}`}>
                                <Link className="dropdownLink" to='/photo'><li>{t('photo')}</li></Link>
                                <Link className="dropdownLink" to='/video'><li>{t('videoNav')}</li></Link>
                            </div>
                        </div>
                        </ul>
                        <ul className={classes.navHeader}>
                            <Link className={classes.listItem} to='/contact'><li>{t('contact')}</li></Link>
                        </ul>
                    </nav>
                </Grid>
                <Grid item md={1} sm={9} xs={7} className={classes.accountDiv} className="navAcoount">
                <div className="burger" id="burger" onClick={classAdd}>
                        <div className="divider"></div>
                        <div className="divider"></div>
                        <div className="divider"></div>
                    </div>
                    <div className={`AccountDiv AccountDiv-${currentTheme}`}>
                        <Link to='/account' className={classes.accountBox}>
                            <img src={accountLogo} className="Account-logo" alt="account logo" />
                            <p className={classes.accountLogoName}>{t('account')}</p>
                        </Link>
                    </div>
                </Grid>
                <Grid item md={2} sm={2} xs={3} className={classes.accountDiv}>
                    
                    <div className="buttonDiv">
                        {/* <Button
                            variant="outlined"
                            size="small"
                            color="primary"
                            className='langBtn'
                            onClick={()=> changeLang('en')}
                        >
                            ENG
                        </Button>
                        <Button
                            variant="outlined"
                            size="small"
                            color="primary"
                            // style={ language=="ka" ? {color: "#C8CACC"} : {}}
                            // className='langBtn'
                            onClick={()=> changeLang('ka')}
                        >
                            ქარ
                        </Button> */}
                        <div className="languageBtn">
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
                        </div>
                            <ChangeTheme />
                    </div>
                </Grid>
            </Grid>
        </Container>
        </div>
    )
}