import { Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import React from 'react';
import '../section1/style.css';

function Posts({props}) {
    return (
        <div className="d-inline-flex flex-wrap gap-4 w-100  mx-auto p-5">
            {props.map((option) => 
                <Card className="w-300 shadow p-3 mb-5 bg-body rounded d-flex justify-content-between flex-column align-items-center">
                    <CardActionArea>
                        <CardMedia
                        image="/static/images/cards/contemplative-reptile.jpg"
                        title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {option.title}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardContent className="w-100">
                        <Typography variant="body2" color="textSecondary" component="p">
                            {option.year}
                        </Typography>
                    </CardContent>
                    <CardActions className="w-100 justify-content-between">
                        <Button size="small" color="primary">
                            Share
                        </Button>
                        <Button size="small" color="primary">
                            Learn More
                        </Button>
                    </CardActions>
                </Card>
            )}
        </div>
    )
}

export default Posts;
