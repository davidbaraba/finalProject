import '../css/press.css';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import  PressPhoto_Concert from '../photos/PressPhoto_Concert.jpg';
import  PressPhoto_2021 from '../photos/PressPhoto_2021.jpg';
import  PressPhoto_justinVideo from '../photos/PressPhoto_justinVideo.jpg';
import { useEffect, useState } from 'react';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
      },
      media: {
        height: 300,
      },
      PressMainContainer: {
          backgroundColor: '#f5f5f5',
      }
});

export default function Press(){

    const classes = useStyles();

    const[posts, setPost] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:3000/posts')
        .then((response) => {
            setPost(response.data)
        })
    })

    return(
        <div>
            <Container>
                <h1 className="pressName">PRESS</h1>
            </Container>
            {
                posts.filter( item => (item.id < '3') (
                        <Container key={item.id} maxWidth="lg" className={classes.PressMainContainer}>
                        <Grid container spacing={3} className={classes.PressBox}>
                            
                            <Grid item md={4} xs={12}>
                                <Card className={classes.root}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            alt="concert photo"
                                            height="200"
                                            image={PressPhoto_Concert}
                                            title="Contemplative Reptile"
                                        />
                                        <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {item.title}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            {item.content.split(' ').splice(0, 30).join(' ') + '...'}
                                        </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button 
                                            size="small"    
                                            color="primary"
                                        >
                                            გაზიარება
                                        </Button>
                                        <Button 
                                            size="small" 
                                            color="primary"
                                            component={Link}
                                            to={'/press/post' + item.id}
                                        >
                                            მეტის წაკითხვა
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>

                            <Grid item md={4} xs={12}>
                                <Card className={classes.root}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            alt="concert photo"
                                            height="200"
                                            image={PressPhoto_Concert}
                                            title="Contemplative Reptile"
                                        />
                                        <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {item.title}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            {item.content.split(' ').splice(0, 30).join(' ') + '...'}
                                        </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button size="small" color="primary">
                                            გაზიარება
                                        </Button>
                                        <Button size="small" color="primary">
                                            მეტის წაკითხვა
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>

                            <Grid item md={4} xs={12}>
                                <Card className={classes.root}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            alt="concert photo"
                                            height="200"
                                            image={PressPhoto_Concert}
                                            title="Contemplative Reptile"
                                        />
                                        <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {item.title}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            {item.content.split(' ').splice(0, 30).join(' ') + '...'}
                                        </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button size="small" color="primary">
                                            გაზიარება
                                        </Button>
                                        <Button size="small" color="primary">
                                            მეტის წაკითხვა
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>

                        </Grid>
                    </Container>
                    )
                    
                )
            }
        </div>
    )
}