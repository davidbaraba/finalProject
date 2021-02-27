import Contact from './Contact';
import Press from './Press';
import Bio from './Bio';
import Account from './Account';
import {
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Header from "./Header";
import MainPage from './MainPage';
import Post from './Post';
import Test from './Test';
import MainPress from './MainPress';
import MainVideo from './MainVideo';
import FbPage from './FbPage';
import InstaPage from './InstaPage';

export default function Home(){
    return(
        <div>
            {/* <Header /> */}

            <Switch>
                <Route path='/account'>
                    <Account />
                </Route>
                <Route path='/contact'>
                    <Contact />
                </Route>
                <Route path='/media'>
                    media page
                </Route>
                <Route path='/press/:id'>
                    <Post />
                </Route>
                <Route path='/press'>
                    <Press />
                </Route>
                <Route path='/bio'>
                    <Bio />
                </Route>
                <Route path='/'>
                    <MainPage />
                    {/* <Test /> */}
                    {/* <MainPress /> */}
                    <MainVideo />
                    <FbPage />
                    <InstaPage />
                </Route>
            </Switch>
        </div>
    )
}