import { Card, CardContent, makeStyles, Typography } from "@material-ui/core";
import axios from 'axios';
import  { useQuery } from 'react-query';

const useStyles = makeStyles({
    com:{
        marginLeft: 10,
        marginBottom: 15,
        marginTop: 15,
        padding: 5,
        width: '50%',
        border: '.1px solid gray',
        borderRadius: '15px'
    },
    author: {
        borderBottom: '.5px solid black',
        display: 'inline-block',
        backgroundColor: '#FFDFDD',
        margin: 0
    },
    comBody: {
        paddingTop: 0,
        paddingBottom: '0px!important'
    }
  });

export default function Comments({ postId }){

    const classes = useStyles();

    const { data, isLoading } = useQuery(['comments', postId], () => {
        return axios.get(`http://localhost:3000/posts/${postId}/comments`)
        .then((response) => response.data);
        })
    
    if(isLoading){
        return <span>Loading...</span>
    }

    return(
        <>
            {
                data.map(item => (
                    <Card key={item.id} className={classes.com}>
                        <h4 className={classes.author}>{item.author}</h4>
                        <CardContent className={classes.comBody}>
                            <Typography variant="body2" component="p">
                                {item.body}
                            </Typography>
                        </CardContent>
                    </Card>
                ))
            }
        </>
    )
}