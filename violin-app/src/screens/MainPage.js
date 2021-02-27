import  mainPhotoCover from '../photos/mainPhotoCover.jpg';
import '../css/mainPage.css';
import Iframe from 'react-iframe';


export default function MainPage(){
    return(
        <div className="mainPageDiv">
            <div className="coverPhoto">
                <img className="mainPhoto" src={mainPhotoCover} alt="cover-photo" />
            </div>
            <div className="coverText">
                <p>TinaViolin__ B.</p>
            </div>
            <div className="coverIframe">
                <Iframe 
                    url='https://www.youtube.com/embed/0WOcmbezyjg?autoplay=1&mute=1'
                    width="550px"
                    height="350px"
                    frameBorder="0"
                    allow="fullscreen"
                />
            </div>
        </div>
    )
}

