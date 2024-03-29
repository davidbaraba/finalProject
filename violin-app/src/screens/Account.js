import '../css/account.css';
import { Helmet } from 'react-helmet';
import { useContext } from "react"
import { useTranslation } from "react-i18next";
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { Button } from '@material-ui/core';
import ThemeContext from '../ThemeContext';

import violinBackground from '../photos/violinBackg.jpg';

const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
  }));

export default function Login(){

    const classes = useStyles();

    const { t } = useTranslation();
    const {currentTheme} = useContext(ThemeContext);

    function onsubmit(){
        //
    }

    return (
        <>
            <div className={`headerBottom headerBottom-${currentTheme}`}></div>
            <div className="accountDiv" style={{ backgroundImage: `url(${violinBackground})` }}>
                <Helmet>
                    <title>{t('helmetAccount')}</title>
                </Helmet>
                <form className={`accountForm accountForm-${currentTheme}`} action="" onSubmit={onsubmit}>
                    <h2 className={`accountName accountName-${currentTheme}`}>
                        {t('login')}
                    </h2>
                    <TextField
                        autoFocus
                        className={classes.margin}
                        id="Username"
                        label={t('username')}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment 
                                    position="start">
                                    <AccountCircle />
                                </InputAdornment>
                            ),
                        }}
                    />
                    <TextField
                        className={classes.margin}
                        type='password'
                        name="password"
                        type='text'
                        id="Password"
                        label={t('password')}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment 
                                    position="start">
                                    <AccountCircle />
                                </InputAdornment>
                            ),
                        }}
                    />
                    <Button
                        className={`loginBtn loginBtn-${currentTheme}`}
                        type='submit' 
                        variant="contained" 
                        color="primary"
                    >
                        {t('loginBtn')}
                    </Button>
                </form>
            </div>
        </> 
    )
}