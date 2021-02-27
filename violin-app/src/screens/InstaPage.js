import InstagramIcon from '@material-ui/icons/Instagram';
import '../css/instaPage.css'
import Grid from '@material-ui/core/Grid';
import { useContext } from 'react';
import ThemeContext from '../ThemeContext';

import  instaPostImg1 from '../photos/instaPostImg1.jpg';
import  instaPostImg2 from '../photos/instaPostImg2.jpg';
import  instaPostImg3 from '../photos/instaPostImg3.jpg';
import  instaPostImg4 from '../photos/instaPostImg4.jpg';
import  instaPostImg5 from '../photos/instaPostImg5.jpg';
import  instaPostImg6 from '../photos/instaPostImg6.jpg';

export default function FbPage(){

    const {currentTheme} = useContext(ThemeContext);
    
    return(
        <div className="instaMainDiv" className={`instaMainDiv instaMainDiv-${currentTheme}`}>
            <div className="instaPage">
                <InstagramIcon
                    className="instaIcon"
                    style={{ fontSize: 50 }}
                />
                <h2 className="instaName">Instagram</h2>
            </div>
            <Grid container >
                <Grid item md={4} xs={12} className="instaPostBox">
                <div className="instaimgWrap">
                    <img className="instaimgImg" src={instaPostImg1}/>
                    <a target="_blank" href="https://www.instagram.com/p/B60imoPp1oL/">
                        <p className="instaimgDescription">3 წლიდან 25 წლამდე და უამრავი დაუჯერებელი მომენტი ჩემს კარიერაში. მადლიერების და სიხარულის გრძნობით სავსე🥰❤️ და წინ კიდევ დაუვიწყარი თავგადასავლებია 🥰💥🎻❤️</p>
                    </a>
                </div>
                </Grid>
                <Grid item md={4} xs={12} className="instaPostBox">
                <div className="instaimgWrap">
                    <img className="instaimgImg" src={instaPostImg2}/>
                    <a target="_blank" href="https://www.instagram.com/p/B2zPEvigg1U/">
                        <p className="instaimgDescription">#electricviolinist #violin #eventday #dj #producer </p>
                    </a>
                </div>
                </Grid>
                <Grid item md={4} xs={12} className="instaPostBox">
                <div className="instaimgWrap">
                    <img className="instaimgImg" src={instaPostImg3}/>
                    <a target="_blank" href="https://www.instagram.com/p/B23v4A-gDcc/">
                        <p className="instaimgDescription">მზადება პრემიერისთვის 🎬🎻🖤 Getting ready for the film premiere 🎬🎻🖤 #electricviolinist #filmpremiere #oscars #nominated</p>
                    </a>
                </div>
                </Grid>
                <Grid item md={4} xs={12} className="instaPostBox">
                <div className="instaimgWrap">
                    <img className="instaimgImg" src={instaPostImg4}/>
                    <a target="_blank" href="https://www.instagram.com/p/B81SkDXpRhD/">
                        <p className="instaimgDescription">Event day 🎻🤎</p>
                    </a>
                </div>
                </Grid>
                <Grid item md={4} xs={12} className="instaPostBox">
                <div className="instaimgWrap">
                    <img className="instaimgImg" src={instaPostImg5}/>
                    <a target="_blank" href="https://www.instagram.com/p/CCyywZPHpE_/">
                        <p className="instaimgDescription">Some romantic video is coming 🎻🎥🔥</p>
                    </a>
                </div>
                </Grid>
                <Grid item md={4} xs={12} className="instaPostBox">
                <div className="instaimgWrap">
                    <img className="instaimgImg" src={instaPostImg6}/>
                    <a target="_blank" href="https://www.instagram.com/p/CIveGQbnfvs/">
                        <p className="instaimgDescription">ყველაზე მნიშვნელოვანი დღე ჩემს კარიერაში ✨🎻❤️</p>
                    </a>
                </div>
                </Grid>
            </Grid> 
        </div>
    )
}