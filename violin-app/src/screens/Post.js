import '../css/post.css';
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import FacebookIcon from '@material-ui/icons/Facebook';
import Comments from './Comments';
import { useTranslation } from 'react-i18next';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import ThemeContext from '../ThemeContext';

export default function Post(){

    const {currentTheme} = useContext(ThemeContext);

    const {t} = useTranslation();

    const params = useParams();

    const[posts, setPost] = useState({});

    useEffect(()=>{
        axios.get('http://localhost:3000/posts/' + params.id)
        .then((response) => {
            setPost(response.data)
        })
    }, [])
    
    return(
        <div className={`postMainDiv postMainDiv-${currentTheme}`}>
            <h1 className={`postTitle postTitle-${currentTheme}`}>{posts.title}</h1>
            <img className="postImg" src={posts.media} alt="logo" />
            <h3>
                <a target="_blank" className="postLink" href={posts.fbPost}>
                <FacebookIcon
                    className="pressFbIcon"
                    style={{ fontSize: 50 }}
                />
                <p className="pressFbLink">
                    {t('redirectfbArticle')}
                </p>
                
                </a>
            </h3>
            <div className={`postTextCom postTextCom-${currentTheme}`}>
                <p className={`postText postText-${currentTheme}`}>{posts.content}</p>
                <div className="addCommentDiv">
                    <input 
                        placeholder={t('writeComment')}
                        type="text"
                        className="addCommentInp"
                    />
                    <button className={`addCommentBtn addCommentBtn-${currentTheme}`}>
                        <AddCircleIcon
                            className="fbIcon"
                            style={{ fontSize: 40 }}
                        />
                    </button>
                </div>
                <Comments postId={params.id} />
            </div>
        </div>
    )
}