import { Typography } from '@mui/material';
import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Grid from '@mui/material/Unstable_Grid2';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

export default function MyDrinks() {
    return (
        <div>
            <div className="drinkhHeader">
                <Typography variant="h2" align="left" style={{marginTop: '25px', marginBottom: '25px'}}>My Drinks</Typography>
            </div>
            <Grid container spacing={5} >
                <Grid xs={4}>
                    <Card sx={{width: 110, height: 200}} style={{backgroundColor: "#EF6767"}}>
                    <CardContent>
                    <Typography sx={{ fontSize: 16 }} gutterBottom align="center" style={{color:"white"}}>
                        Hipster
                    </Typography>
                    <CardMedia style={{
                    width: "auto",
                    maxHeight: "200px"}}
                    component="img"
                    height="120"
                    image="https://i.postimg.cc/FFwWZRXf/drink.png"
                    alt="Drink"
                      />
                    </CardContent>
                    </Card>
                </Grid>
                <Grid xs={4}>
                    <div>
                    <Card sx={{width: 110, height: 200}} style={{backgroundColor: "#EF6767"}}>
                    <CardContent>
                    <Typography sx={{ fontSize: 16 }} gutterBottom align="center" style={{color:"white"}}>
                        OPEN Shot
                    </Typography>
                    <CardMedia style={{
                    width: "auto",
                    maxHeight: "200px"
                  }}
                        component="img"
                        height="120"
                        image="https://i.postimg.cc/FFwWZRXf/drink.png"

                        alt="Drink"
                      />
                    </CardContent>
                    </Card>
                    </div>
                </Grid>
                <Grid xs={4}>
                    <div>
                    <Card sx={{width: 110, height: 200}} style={{backgroundColor: "#EF6767"}}>
                    <CardContent>
                    <Typography sx={{ fontSize: 16 }} gutterBottom align="center" style={{color:"white"}}>
                        Dratini
                    </Typography>
                    <CardMedia style={{
                    width: "auto",
                    maxHeight: "200px"
                  }}
                        component="img"
                        height="120"
                        image="https://i.postimg.cc/FFwWZRXf/drink.png"

                        alt="Drink"
                      />
                    </CardContent>
                    </Card>
                    </div>
                </Grid>
                <Grid xs={4}>
                    <div>
                    <Card sx={{width: 110, height: 200}} style={{backgroundColor: "#EF6767"}}>
                    <CardContent>
                    <Typography sx={{ fontSize: 16 }} gutterBottom align="center" style={{color:"white"}}>
                        Goldstrike
                    </Typography>
                    <CardMedia style={{
                    width: "auto",
                    maxHeight: "200px"
                  }}
                        component="img"
                        height="120"
                        image="https://i.postimg.cc/FFwWZRXf/drink.png"

                        alt="Drink"
                      />
                    </CardContent>
                    </Card>
                    </div>
                </Grid>
                <Grid xs={4}>
                    <div>
                    <Card sx={{width: 110, height: 200}} style={{backgroundColor: "#EF6767"}}>
                    <CardContent>
                    <Typography sx={{ fontSize: 16 }} gutterBottom align="center" style={{color:"white"}}>
                        ??l & bulle
                    </Typography>
                    <CardMedia style={{
                    width: "auto",
                    maxHeight: "200px"
                  }}
                        component="img"
                        height="120"
                        image="https://i.postimg.cc/FFwWZRXf/drink.png"
                        alt="Drink"
                      />
                    </CardContent>
                    </Card>
                    </div>
                </Grid>
            </Grid>

        </div>
    )
};
