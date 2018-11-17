import './Score.scss';

import React, { PureComponent, Fragment } from 'react';
import Radio from '@material-ui/core/Radio';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';

import MonetizationOn from '@material-ui/icons/MonetizationOn';
import AddIcon from '@material-ui/icons/Add';
import Remove from '@material-ui/icons/Remove';
import CompareArrows from '@material-ui/icons/CompareArrows';

import { handleCheckboxChange } from 'containers/handleChange';

class Score extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            value: 'score2',
        };
    }

    onHandleCheckChange = (event) => {
        handleCheckboxChange(event, this);
        console.log(event.target.name);
    };

    handleChange = event => {
        this.setState({ value: event.target.value });
    };

    render() {
        return (
            <Fragment>
                <List className="trans-list _panel" component="div">
                    {[1, 2].map(value => (
                        <ListItem key={value} button component="label" htmlFor={`score${value}`}>
                            <MonetizationOn fontSize="large" />
                            <ListItemText primary={`Score ${value}`} />
                            <Radio
                                checked={this.state.value.indexOf(value) !== -1}
                                onChange={this.handleChange}
                                value={`score${value}`}
                                id={`score${value}`}
                                name="score"
                                aria-label={`score${value}`}
                            />
                        </ListItem>
                    ))}
                </List>
                <div className="transactions">
                    <Button variant="fab" color="primary" aria-label="Add">
                        <AddIcon />
                    </Button>
                    <Button variant="fab" aria-label="Edit" >
                        <CompareArrows />
                    </Button>
                    <Button variant="fab" color="secondary" aria-label="Edit">
                        <Remove />
                    </Button>
                </div>
            </Fragment>
        );
    }
}

export default Score;