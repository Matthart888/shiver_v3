import React, { Component } from 'react';
import { Grid, Cell, Card, CardTitle, CardText, CardActions, CardMenu, Button, IconButton } from 'react-mdl';

class Home extends Component {
    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="home-grid">
                    <Cell col={12}>
                        <Card shadow={0} style={{width: '512px', margin: 'auto'}}>
                            <CardTitle style={{color: 'black', height: '176px', background: 'url() center / cover'}}>Welcome</CardTitle>
                            <CardText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Mauris sagittis pellentesque lacus eleifend lacinia...
                            </CardText>
                            <CardActions border>
                                <Button colored>Get Started</Button>
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                        <Card shadow={0} style={{width: '512px', margin: 'auto'}}>
                            <CardTitle style={{color: 'black', height: '176px', background: 'url() center / cover'}}>Welcome</CardTitle>
                            <CardText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Mauris sagittis pellentesque lacus eleifend lacinia...
                            </CardText>
                            <CardActions border>
                                <Button colored>Get Started</Button>
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                        <Card shadow={0} style={{width: '512px', margin: 'auto'}}>
                            <CardTitle style={{color: 'black', height: '176px', background: 'url() center / cover'}}>Welcome</CardTitle>
                            <CardText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Mauris sagittis pellentesque lacus eleifend lacinia...
                            </CardText>
                            <CardActions border>
                                <Button colored>Get Started</Button>
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                        <Card shadow={0} style={{width: '512px', margin: 'auto'}}>
                            <CardTitle style={{color: 'black', height: '176px', background: 'url() center / cover'}}>Welcome</CardTitle>
                            <CardText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Mauris sagittis pellentesque lacus eleifend lacinia...
                            </CardText>
                            <CardActions border>
                                <Button colored>Get Started</Button>
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Home;