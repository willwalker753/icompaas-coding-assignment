import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class notificationsTemplate extends Component {
    render() {
        return (
            <Card className={this.props.root}>
                <CardContent>
                    <Typography className={this.props.title} color="textSecondary" gutterBottom>
                    <i class="fas fa-bell"></i>
                    </Typography>
                    <Typography variant="h5" component="h2">
                    {this.props.name}
                    </Typography>
                    <Typography className={this.props.pos} color="textSecondary">
                    {this.props.date}
                    </Typography>
                    <Typography variant="body2" component="p">
                    {this.props.desc}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        );
    }
}

export default notificationsTemplate;