import '../css/press.css';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import { Link, useHistory, useLocation, useParams } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import SearchIcon from '@material-ui/icons/Search';
import { useContext, useEffect, useState } from 'react';
import ThemeContext from '../ThemeContext';
import { useTranslation } from 'react-i18next';

import pressBackground from '../photos/pressBackground.jpg';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        marginBottom: 20
      },
      media: {
        height: 300,
      },
      PressMainContainer: {
          backgroundColor: '#f5f5f5',
      },
      search: {
          display: 'flex',
          justifyContent: 'flex-End',
          marginTop: '25px',
          marginRight: '5px',
      }
});

const limit = 6;

export default function Press(){

    const classes = useStyles();

    const {t} = useTranslation();

    const {currentTheme} = useContext(ThemeContext);

    const [totalPosts, setTotalPosts] = useState();
    const totalPage = Math.ceil(totalPosts / limit);

    const params = useParams();
    let page = params.page || 1;
    page = parseInt(page);

    const[posts, setPost] = useState([]);

    const [search, setSearch] = useState('');
    const history = useHistory();
    const location = useLocation();
    const locationParams = new URLSearchParams(location.search);
    const q = locationParams.get('search');


    useEffect(()=>{
        axios.get('http://localhost:3000/posts', {
            params: {
                _page: page,
                _limit: limit,
                q
            }
        })
        .then((response) => {
            setPost(response.data);
            setTotalPosts(response.headers['x-total-count']);
        })
    }, [page, q]);

    

    function searchSub(e){
        e.preventDefault();
        history.push('/press?search=' + search)
    }

    return(
        <>
            <div className={`headerBottom headerBottom-${currentTheme}`}></div>
            <div className={`pressContainer pressContainer-${currentTheme}`}>
                <Helmet>
                    <title>{t('helmetPress')}</title>
                </Helmet>
                    <form onSubmit={searchSub} className={classes.search}>
                        <input 
                            className="searchInt" 
                            type="text" 
                            placeholder="Search.."
                            onChange={(e) => setSearch(e.target.value)}
                            value={search}
                        />
                        <button type="submit" className="responsiveSearchBtn">
                            <SearchIcon
                                className="searchBtn"
                                className="fbIcon"
                                style={{ fontSize: 20 }}
                            />
                        </button>
                    </form>

                <h1 className="pressName">
                    {t('pressPageTitle')}
                </h1>
                
                <Container maxWidth="lg" className={classes.PressMainContainer} style={{ backgroundImage: `url(${pressBackground})`}}>
                    <Grid container spacing={3}>
                            {
                                posts.map((item) =>(
                                    <Grid key={item.id} item md={4} sm={6} xs={12} className={classes.postBox}>
                                        <Card className={classes.root} className="responsiveBox">
                                            <CardActionArea className={`postRootBox-${currentTheme}`}>
                                                <CardMedia
                                                    component="img"
                                                    alt="concert photo"
                                                    height="250"
                                                    image={item.media}
                                                    title="Contemplative Reptile"
                                                />
                                                <CardContent>
                                                    <Typography gutterBottom variant="h5" component="h2">
                                                        {item.title}
                                                    </Typography>
                                                    <Typography variant="body2" color="textSecondary" component="p" className={`postRootBox-${currentTheme}`}>
                                                        {item.content.split(' ').splice(0, 30).join(' ') + '...'}
                                                    </Typography>
                                                </CardContent>
                                            </CardActionArea>
                                            <CardActions className={`postRootBox-${currentTheme}`}>
                                                <Button
                                                    className={`postRootBoxBtn postRootBoxBtn-${currentTheme}`}
                                                    size="small" 
                                                    color="primary"
                                                    component={Link}
                                                    to={'/press/post/' + item.id}
                                                >
                                                    {t('readMoreBtn')}
                                                </Button>
                                            </CardActions>
                                        </Card>   
                                    </Grid>  
                                ))
                            }
                    </Grid>
                    <div className="changePageBtn">
                        <Button
                            className={`postRootBoxBtn postRootBoxBtn-${currentTheme}`}
                            variant="contained"
                            disabled={page <=1}
                        >
                            <Link to={'/press/' + (page - 1)} className={`postRootBoxBtn-${currentTheme}`}>
                                {t('prevPage')}
                            </Link>
                        </Button>
                        <Button
                            className={`postRootBoxBtn-${currentTheme}`}
                            variant="contained"
                            disabled={page >= totalPage}
                        >
                            <Link to={'/press/' + (page + 1)} className={`postRootBoxBtn-${currentTheme}`}>
                                {t('nextPage')}
                            </Link>
                        </Button>
                    </div>
                </Container>
            </div>
        </>
    )
}