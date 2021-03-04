import { useContext } from "react";
import { useTranslation } from 'react-i18next';
import ThemeContext from "./ThemeContext";
import { makeStyles } from '@material-ui/core/styles';
import { Button } from "@material-ui/core";

const useStyles = makeStyles({
    ThemeBtn: {
        justifyContent: 'center',
        display: 'flex',
        marginTop: '5px',
    }
});


export default function ChangeTheme(){

    const classes = useStyles();

    const {t, i18n} = useTranslation();

    const {currentTheme, setCurrentTheme} = useContext(ThemeContext);

    function changeTheme(){
        setCurrentTheme(currentTheme === 'dark' ? 'light' : 'dark');
    }

    return(
        <div className={classes.ThemeBtn}>
            <Button
                variant="outlined"
                size="small"
                color="primary"
                className='themeBtn'
                onClick={changeTheme}
            >
                {t('theme-mode')}
            </Button>
            {/* <button
                className="themeBtn"
                onClick={changeTheme}
            >
                {t('theme-mode')}
            </button> */}
        </div>
    )
}