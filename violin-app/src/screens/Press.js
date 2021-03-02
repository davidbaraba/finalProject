import '../css/press.css';
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
import { Helmet } from 'react-helmet';

import pressBackground from '../photos/pressBackground.jpg';
import ThemeContext from '../ThemeContext';
import { useTranslation } from 'react-i18next';

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
          marginTop: '5px',
          marginRight: '5px',
      }
});

const limit = 3;

export default function Press(){

    const {t} = useTranslation();

    const {currentTheme} = useContext(ThemeContext);

    const [totalPosts, setTotalPosts] = useState();
    const totalPage = Math.ceil(totalPosts / limit);

    const params = useParams();
    let page = params.page || 1;
    page = parseInt(page);

    const classes = useStyles();

    const[posts, setPost] = useState([]);

    const [search, setSearch] = useState('');
    const history = useHistory();
    const location = useLocation();
    const locationParams = new URLSearchParams(location.search);
    const q = locationParams.get('search');
    const [loading, setLoading] = useState(true);


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
            // setLoading(false);
        })
    }, [page, q]);

    

    function searchSub(e){
        e.preventDefault();
        history.push('/press?search=' + search)
    }

    // if(posts.length === 0 && q && !loading){
    //     return <div>პოსტები ვერ მოიძებნა</div>
    // }

    return(
        <div className={`pressContainer pressContainer-${currentTheme}`}>

            <Helmet>
                <title>TinaViolin-B/press</title>
            </Helmet>
                <form onSubmit={searchSub} className={classes.search}>
                    <input 
                        className="searchInt" 
                        type="text" 
                        placeholder="Search.."
                        onChange={(e) => setSearch(e.target.value)}
                        value={search}
                    />
                    <button type="submit">
                        <SearchIcon
                            className="searchBtn"
                            className="fbIcon"
                            style={{ fontSize: 20 }}
                        />
                    </button>
                </form>

            <h1 className="pressName">{t('pressPageTitle')}</h1>
            
            <Container maxWidth="lg" className={classes.PressMainContainer} style={{ backgroundImage: `url(${pressBackground})` }}>
                <Grid container spacing={3} className={classes.PressBox}>
                    <Grid item md={4} xs={12} className={classes.postBox}>
                        {
                            posts.map((item) =>(
                                <Card key={item.id} className={classes.root}>
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
                            ))
                        }
                        <Button
                            className={`postRootBoxBtn-${currentTheme}`}
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
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}