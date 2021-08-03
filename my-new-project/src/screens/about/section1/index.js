import { Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import './style.css';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import Posts from '../Posts';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));



function Section1({props}) {

    const classes = useStyles();
    const [page, setPage] = React.useState(1);
    const [postPerPage, setpostPerPage] = useState(12);
    const handleChange = (event, value) => {
        setPage(value);
    };


    const indexOfLastPost = page * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    const currentPosts = props.slice(indexOfFirstPost, indexOfLastPost);

    return (
        <div className="d-inline-flex flex-wrap gap-4 justify-content-center w-75 mx-auto p-5">
            <Posts props={currentPosts}/>
            <div className={classes.root}>
                <Typography>Page: {page}</Typography>
                <Pagination count={currentPosts} page={page} onChange={handleChange} />
            </div>
        </div>
    )
}

export default Section1;
