import  mainPhotoCover from '../photos/mainPhotoCover.jpg';
import '../css/mainPage.css';
import Iframe from 'react-iframe';
import { useContext } from 'react';
import ThemeContext from '../ThemeContext';


export default function MainPage(){
    const {currentTheme} = useContext(ThemeContext);

    return(
        <div>
            <div className="coverPhoto">
                <img className="mainPhoto" src={mainPhotoCover} alt="cover-photo" />
            </div>
            <div className={`coverText coverText-${currentTheme}`}>
                <p>TinaViolin_ B.</p>
            </div>
            <div className={`coverIframe coverIframe-${currentTheme}`}>
                <Iframe 
                    url='https://www.youtube.com/embed/0WOcmbezyjg?autoplay=1&mute=1'
                    width="480px"
                    height="320px"
                    frameBorder="0"
                    allow="fullscreen"
                    className="iframeBox"
                />
            </div>
        </div>
    )
}

