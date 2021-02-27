import { useContext } from "react"
import { useTranslation } from "react-i18next";
import '../css/account.css';
import violinBackground from '../photos/violinBackg.jpg';

import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { Button } from '@material-ui/core';
import ThemeContext from '../ThemeContext';

const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
  }));

export default function Login(){

    const classes = useStyles();
    const { t } = useTranslation();
    const {currentTheme} = useContext(ThemeContext);

    // const {setCurrentUser} = useContext(UserContext);
    // const [username,setUsername] = useState('');
    // const [password,setPassword] = useState('');

    function onsubmit(){
        // if( username === 'a' && password === 'b'){
        //     setCurrentUser({
        //         username: 'a',
        //         name: 'dato'
        //     });
        // }else{
        //     alert('Wrong Username or Password')
        // }
    }

    // function changeLang(lang){
    //     i18n.changeLanguage(lang);
    // }

    return (
        <div className="accountDiv" style={{ backgroundImage: `url(${violinBackground})` }}>
            <form className={`accountForm accountForm-${currentTheme}`} action="" onSubmit={onsubmit}>
                <h2 className="accountName">{t('login')}</h2>
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
                    className="loginBtn"
                    type='submit' 
                    variant="contained" 
                    color="primary"
                >
                    {t('loginBtn')}
                </Button>
            </form>


            {/* <form className="accountForm" action="" onSubmit={onsubmit}>
                <h3 className="accountName">LOGIN</h3>
                <p>
                    <input
                        type='text'
                        placeholder='Username'
                        name="username"
                        // value={username}
                        // onChange={e => setUsername(e.target.value)}
                    />
                </p>
                <p>
                    <input
                        type='password'
                        placeholder='Password'
                        name="password"
                        // value={password}
                        // onChange={e => setPassword(e.target.value)}
                    />
                </p>
                <p>
                <button type='submit'>login</button>
                </p>
            </form> */}
        </div> 
    )
}