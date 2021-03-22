import '../css/photo.css';
import { Helmet } from 'react-helmet';
import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import ThemeContext from '../ThemeContext';

import photo1 from '../photos/photo1.jpg';
import photo2 from '../photos/photo2.jpg';
import photo3 from '../photos/photo3.jpg';
import photo4 from '../photos/photo4.jpg';
import photo5 from '../photos/photo5.jpg';
import photo6 from '../photos/photo6.jpg';
import photo7 from '../photos/photo7.jpg';
import photo8 from '../photos/photo8.jpg';
import photo9 from '../photos/photo9.jpg';
import photo10 from '../photos/photo10.jpg';
import photo11 from '../photos/photo11.jpg';
import photo12 from '../photos/photo12.jpg';
import photo13 from '../photos/photo13.jpg';
import photo14 from '../photos/photo14.jpg';
import photo15 from '../photos/photo15.jpg';
import photo16 from '../photos/photo16.jpg';
import photo17 from '../photos/photo17.jpg';
import photo18 from '../photos/photo18.jpg';
import photo19 from '../photos/photo19.jpg';
import photo20 from '../photos/photo20.jpg';
import photo21 from '../photos/photo21.jpg';
import photo22 from '../photos/photo22.jpg';
import photo23 from '../photos/photo23.jpg';
import photo24 from '../photos/photo24.jpg';
import photo25 from '../photos/photo25.jpg';
import photo26 from '../photos/photo26.jpg';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden'
    },
    gridList: {
      width: '100%',
      height: '100%',
    },
  }));

const mediaData = [
    {
        img: photo13,
        title: 'Image',
        author: 'author',
        cols: 3,
    },
    {
        img: photo2,
        title: 'Image',
        author: 'author',
        cols: 2,
    },
    {
        img: photo3,
        title: 'Image',
        author: 'author',
        cols: 1,
    },
    {
        img: photo5,
        title: 'Image',
        author: 'author',
        cols: 3,
    },
    {
        img: photo4,
        title: 'Image',
        author: 'author',
        cols: 1,
    },
    {
        img: photo6,
        title: 'Image',
        author: 'author',
        cols: 2,
    },
    {
        img: photo7,
        title: 'Image',
        author: 'author',
        cols: 1,
    },
    {
        img: photo9,
        title: 'Image',
        author: 'author',
        cols: 2,
    },
    {
        img: photo8,
        title: 'Image',
        author: 'author',
        cols: 4,
    },
    {
        img: photo12,
        title: 'Image',
        author: 'author',
        cols: 1,
    },
    {
        img: photo1,
        title: 'Image',
        author: 'author',
        cols: 1,
    },
    {
        img: photo10,
        title: 'Image',
        author: 'author',
        cols: 2,
    },
    {
        img: photo11,
        title: 'Image',
        author: 'author',
        cols: 2,
    },
    {
        img: photo15,
        title: 'Image',
        author: 'author',
        cols: 3,
    },
    {
        img: photo16,
        title: 'Image',
        author: 'author',
        cols: 2,
    },
    {
        img: photo14,
        title: 'Image',
        author: 'author',
        cols: 1,
    },
    {
        img: photo17,
        title: 'Image',
        author: 'author',
        cols: 1,
    },
    {
        img: photo22,
        title: 'Image',
        author: 'author',
        cols: 1,
    },
    {
        img: photo19,
        title: 'Image',
        author: 'author',
        cols: 2,
    },
    {
        img: photo18,
        title: 'Image',
        author: 'author',
        cols: 3,
    },
    {
        img: photo23,
        title: 'Image',
        author: 'author',
        cols: 2,
    },
    {
        img: photo20,
        title: 'Image',
        author: 'author',
        cols: 2,
    },
    {
        img: photo21,
        title: 'Image',
        author: 'author',
        cols: 3,
    },
    {
        img: photo24,
        title: 'Image',
        author: 'author',
        cols: 1,
    },
    {
        img: photo25,
        title: 'Image',
        author: 'author',
        cols: 3,
    },
    {
        img: photo26,
        title: 'Image',
        author: 'author',
        cols: 1,
    },
]

export default function Photo(){

    const {currentTheme} = useContext(ThemeContext);
    
    const classes = useStyles();

    const {t} = useTranslation();

    return(
        <>
            <div className={`headerBottom headerBottom-${currentTheme}`}></div>
            <div>
                <Helmet>
                    <title>{t('helmetPhoto')}</title>
                </Helmet>
                
                <div className={classes.root} className={`photoDiv photoDiv-${currentTheme}`}>
                    <GridList cellHeight={400} className={classes.gridList} cols={5}>
                        {mediaData.map((tile) => (
                            <GridListTile key={tile.img} cols={tile.cols || 1}>
                                <img src={tile.img} alt={tile.title} />
                            </GridListTile>
                        ))}
                    </GridList>
                </div>
            </div>
        </>
    )
}