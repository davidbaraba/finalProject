import Contact from './Contact';
import Press from './Press';
import Bio from './Bio';
import Account from './Account';
import {
    Switch,
    Route
  } from "react-router-dom";
import MainPage from './MainPage';
import Post from './Post';
import MainVideo from './MainVideo';
import FbPage from './FbPage';
import InstaPage from './InstaPage';
import Photo from './Photo';
import Video from './Video';

export default function Home(){
    return(
        <div>
            <Switch>
                <Route path='/account'>
                    <Account />
                </Route>
                <Route path='/contact'>
                    <Contact />
                </Route>
                <Route path='/photo'>
                    <Photo />
                </Route>
                <Route path='/video'>
                    <Video />
                </Route>
                <Route exact path='/press/post/:id'>
                    <Post />
                </Route>
                <Route path='/press/:page?'>
                    <Press />
                </Route>
                <Route path='/bio'>
                    <Bio />
                </Route>
                <Route path='/'>
                    <MainPage />
                    <MainVideo />
                    <FbPage />
                    <InstaPage />
                </Route>
            </Switch>
        </div>
    )
}