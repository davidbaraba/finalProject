import  violinLogo from '../photos/violin-logo.svg';
import accountLogo from '../photos/account-logo.svg';

import '../css/header.css';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ChangeTheme from '../ChangeTheme';
import { useContext, useState } from 'react';
import ThemeContext from '../ThemeContext';
import { Helmet } from 'react-helmet';

const useStyles = makeStyles({
    headerDiv: {
        display: 'flex',
        height: '100%',
        alignItems: 'center',
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
        fontSize: '11px',
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

    const [langBtn, setLangBtn] = useState('langBtn-active');
    const [geoLangBtn, setGeoLangBtn] = useState('langBtn');

    function changeLang(lang){
        i18n.changeLanguage(lang);
    }

    function enBtn(){
        setLangBtn(langBtn === 'langBtn' ? 'langBtn-active' : 'langBtn-active');
        setGeoLangBtn(geoLangBtn === 'langBtn-active' ? 'langBtn' : 'langBtn');
    }
    function geoBtn(){
        setLangBtn(langBtn === 'langBtn-active' ? 'langBtn' : 'langBtn');
        setGeoLangBtn(geoLangBtn === 'langBtn' ? 'langBtn-active' : 'langBtn-active')
    }

    const {currentTheme} = useContext(ThemeContext);

    const classes = useStyles();

    const [burger, setBurger] = useState('burger');
    const [navList, setNavlist] = useState('navList');
    
    function classActive(){
        setBurger(burger === 'burger' ? 'burger active' : 'burger')
        setNavlist(navList === 'navList' ? 'navList active' : 'navList')
    }

    function classActiveHalf(){
        setBurger(burger === 'burger active' ? 'burger' : 'burger')
        setNavlist(navList === 'navList active' ? 'navList' : 'navList')
    }

    return(
        <div className={`AppHeader AppHeader-${currentTheme}`}>
            <Container maxWidth="lg">
                <Helmet>
                    <title>TinaViolin-B</title>
                </Helmet>
                <Grid container className={classes.headerDiv}>
                    <Grid item md={1} sm={1} xs={2} onClick={classActiveHalf}>
                        <Link to='/home'>
                            <img src={violinLogo} className={`App-logo App-logo-${currentTheme}`} alt="logo" />
                        </Link>
                    </Grid>
                    
                    <Grid item md={8} className={`navLists navLists-${currentTheme}`} className={navList}>
                        <nav className={classes.navHeader} className={`nav nav-${currentTheme}`}>
                            <ul className={classes.navHeader}>
                                <Link className={classes.listItem} to='/bio'>
                                    <li onClick={classActive}>
                                        {t('bio')}
                                    </li>
                                </Link>
                            </ul>
                            <ul className={classes.navHeader}>
                                <Link className={classes.listItem} to='/press'>
                                    <li onClick={classActive}>
                                        {t('press')}
                                    </li>
                                </Link>
                            </ul>
                            <ul className={classes.navHeader}>
                                <div className="dropdown">
                                    <div className={`dropbtn dropbtn-${currentTheme}`}>
                                        {t('media')}
                                    </div>
                                        <div className={`dropdown-content dropdown-content-${currentTheme}`}>
                                            <Link className="dropdownLink" to='/photo'>
                                                <li onClick={classActive} className="dropDownLinkLi">
                                                    {t('photo')}
                                                </li>
                                            </Link>
                                            <Link className="dropdownLink" to='/video'>
                                                <li onClick={classActive} className="dropDownLinkLi">
                                                    {t('videoNav')}
                                                </li>
                                            </Link>
                                        </div>
                                </div>
                            </ul>
                            <ul className={classes.navHeader}>
                                <Link className={classes.listItem} to='/contact'>
                                    <li onClick={classActive}>
                                        {t('contact')}
                                    </li>
                                </Link>
                            </ul>
                        </nav>
                    </Grid>
                    
                    <Grid item md={1} sm={9} xs={7} className={classes.accountDiv} className="navAcoount">
                        <div onClick={classActive}  className={burger}>
                            <div className="divider"></div>
                            <div className="divider"></div>
                            <div className="divider"></div>
                        </div>
                        <div className={`AccountDiv AccountDiv-${currentTheme}`} onClick={classActiveHalf}>
                            <div className="accountLinkBox">
                                <Link to='/account' className={classes.accountBox}>
                                    <img src={accountLogo} className="Account-logo" alt="account logo" />
                                    <p className={classes.accountLogoName}>{t('account')}</p>
                                </Link>
                            </div>
                        </div>
                    </Grid>
                    <Grid item md={2} sm={2} xs={3} className={classes.accountDiv}>
                        
                        <div className="buttonDiv">
                            <div className="languageBtn">
                                
                                <div className={`languagBtn languagBtn-${currentTheme}`}>
                                    <div onClick={enBtn} className={langBtn}>
                                        <div onClick={()=> changeLang('en')}>
                                            ENG
                                        </div>
                                    </div>
                                </div>

                                <p className={`langBtnSpace langBtnSpace-${currentTheme}`}>/</p>
                                
                                <div className={`languagBtn languagBtn-${currentTheme}`}>
                                    <div onClick={geoBtn} className={geoLangBtn}>
                                        <div onClick={()=> changeLang('ka')}>
                                            ქარ
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <ChangeTheme />
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}