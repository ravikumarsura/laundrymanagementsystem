import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ServiceCard(props) {
    let {img,sertitle,serContent} =  props;

    return (
        <Card sx={{ maxWidth: 300 }}>
            <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image={img}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" className='text-center'>
                    {sertitle}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {serContent}
                </Typography>
            </CardContent>
                {<CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                </CardActions> }
        </Card>
    );
}
