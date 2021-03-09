import FacebookIcon from '@material-ui/icons/Facebook';
import '../css/fbPage.css'
import Grid from '@material-ui/core/Grid';
import  fbPostImg1 from '../photos/fbPostImg1.jpg';
import  fbPostImg2 from '../photos/fbPostImg2.jpg';
import  fbPostImg3 from '../photos/fbPostImg3.jpg';
import  fbPostImg4 from '../photos/fbPostImg4.jpg';
import  fbPostImg5 from '../photos/fbPostImg5.jpg';
import  fbPostImg6 from '../photos/fbPostImg6.jpg';

export default function FbPage(){
    return(
        <div className="fbMainDiv">
            <div className="fbPage">
                <FacebookIcon
                    className="fbIcon"
                    style={{ fontSize: 50 }}
                />
                <h2 className="fbName">Facebook</h2>
            </div>
            <Grid container >
                <Grid item md={4} sm={12} className="fbPostBox">
                <div className="imgWrap">
                    <img className="imgImg" src={fbPostImg1}/>
                    <a target="_blank" href="https://www.facebook.com/TikoBarabadzeViolinist/posts/2198555870203993">
                        <p className="imgDescription">ახლა კი დროა შემდეგი მიზნების განხორციელებისა და ასრულების 🥰❤️✨🥰❤️✨</p>
                    </a>
                </div>
                </Grid>
                <Grid item md={4} sm={12} className="fbPostBox">
                <div className="imgWrap">
                    <img className="imgImg" src={fbPostImg2}/>
                    <a target="_blank" href="https://www.facebook.com/TikoBarabadzeViolinist/posts/3512617568797810">
                        <p className="imgDescription">ყველაზე ტკბილი შეგრძნებაა , როდესაც მადლიერი ხარ იმით რაც გაქვს, ვინც გყავს და აკეთებ იმ საქმეს , რომელიც ყველაზე ძალიან გიყვარს 🥰💕🎻ძალიან ბედნიერი და გახარებული ვარ, რადგან ჩემთვის განსაკუთრებული პროექტი განხორციელდა🥰🥰დაელოდეთ ახალ ვიდეოს, რომელსაც იხილავთ ძალიან მალე 🥰🎻🎥 </p>
                    </a>
                </div>
                </Grid>
                <Grid item md={4} sm={12} className="fbPostBox">
                <div className="imgWrap">
                    <img className="imgImg" src={fbPostImg6}/>
                    <a target="_blank" href="https://www.facebook.com/TikoBarabadzeViolinist/posts/3548357038557196">
                        <p className="imgDescription">სტუმრად რადიო იმედში  🥰❤️🥰❤️. ვარ ემოციებით სავსე, რადგან ძალიან საინტერესო გადაცემა გამოვიდა. ვისაუბრე განხორციელებულ კონცერტებზე,საავტორო მუსიკაზე,საერთო პროექტებსა და მომავალ გეგმებზე 💥🙈❤️🎻</p>
                    </a>
                </div>
                </Grid>
                <Grid item md={4} sm={12} className="fbPostBox">
                <div className="imgWrap">
                    <img className="imgImg" src={fbPostImg4}/>
                    <a target="_blank" href="https://www.facebook.com/TikoBarabadzeViolinist/posts/3746501088742789">
                        <p className="imgDescription">შობას გილოცავთ🥰❤️✨ ხვალ, საღამოს 11 საათზე გვიყურეთ რუსთავი 2-ის პირდაპირ ეთერში 🥰🌟🎶🎶🎶</p>
                    </a>
                </div>
                </Grid>
                <Grid item md={4} sm={12} className="fbPostBox">
                <div className="imgWrap">
                    <img className="imgImg" src={fbPostImg5}/>
                    <a target="_blank" href="https://www.facebook.com/photo?fbid=3734451703281061&set=a.502766483116282">
                        <p className="imgDescription">ბედნიერების, ჯანმრთელობისა და წარმატების წელიწადი ყოფილიყოს 2021 თითოეული თქვენგანისთვის 🥰🥂❤️ მჯერა,რომ ყველაზე ბრჭყვიალა და სასწაული წელიწადი იქნება 🌟 🥰✨✨✨გილოცავთ 🥰✨✨✨ Happy New Year 🥰🎻</p>
                    </a>
                </div>
                </Grid>
                <Grid item md={4} sm={12} className="fbPostBox">
                <div className="imgWrap">
                    <img className="imgImg" src={fbPostImg3}/>
                    <a target="_blank" href="https://www.facebook.com/TikoBarabadzeViolinist/posts/3768725966520301">
                        <p className="imgDescription">ძალიან მაგარი ამბავი 🥰🥰👊🏻❤️❤️ შინდისი HBO- ზე 😱🥰🥰❤️❤️ საამაყო გუნდი Postred და მიხარია,რომ  დიდი პატივი მხვდა წილად მუსიკალურად გამეხმოვანებინა 🎻❤️🙏🏼 Zviad Mgebry მადლობა შენ  🙏🏼❤️</p>
                    </a>
                </div>
                </Grid>
            </Grid>
                
        </div>
    )
}