import { useContext, useState } from "react";
import { useTranslation } from 'react-i18next';
import ThemeContext from "./ThemeContext";
import { makeStyles } from '@material-ui/core/styles';

import Brightness4Icon from '@material-ui/icons/Brightness4';

const useStyles = makeStyles({
    ThemeBtn: {
        justifyContent: 'center',
        display: 'flex',
        marginTop: '5px',
    }
});


export default function ChangeTheme(){

    const [themeBtn, setThemeBtn] = useState('lightMode');

    const classes = useStyles();

    const {t, i18n} = useTranslation();

    const {currentTheme, setCurrentTheme} = useContext(ThemeContext);



    function changeTheme(){
        const theme = currentTheme === 'dark' ? 'light' : 'dark';
        setCurrentTheme(theme);
        localStorage.setItem('theme', theme)
    }

    return(
        <div className={classes.ThemeBtn}>
            <div
                className={`themeBtn themeBtn-${currentTheme}`}
                onClick={changeTheme}
            >
                <div className="darkIcon">
                    <abbr title={t('theme-mode')}>
                        <Brightness4Icon/>
                    </abbr>
                </div>
            </div>
        </div>
    )
}