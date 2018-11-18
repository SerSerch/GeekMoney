import './Category.scss';

import React, { PureComponent, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Radio from '@material-ui/core/Radio';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import InputBase from '@material-ui/core/InputBase';

import AttachMoney from '@material-ui/icons/AttachMoney';
import AddIcon from '@material-ui/icons/Add';
import CompareArrows from '@material-ui/icons/CompareArrows';
import Remove from '@material-ui/icons/Remove';
import SearchIcon from '@material-ui/icons/Search';

import { handleCheckboxChange } from 'containers/handleChange';

class Category extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            value: 'category1',
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
                <div className="search">
                    <div className="searchIcon">
                        <SearchIcon />
                    </div>
                    <InputBase
                        placeholder="Search…"
                        classes={{
                            root: 'inputRoot _custom',
                            input: 'inputInput _custom',
                        }}
                    />
                </div>
                <List className="trans-list _panel" component="div">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(value => (
                        <ListItem key={value} button component="label" htmlFor={`category${value}`}>
                            <AttachMoney fontSize="large" />
                            <ListItemText primary={`Category ${value}`} />
                            <Radio
                                checked={this.state.value.indexOf(value) !== -1}
                                onChange={this.handleChange}
                                value={`category${value}`}
                                id={`category${value}`}
                                name="category"
                                aria-label={`category${value}`}
                            />
                        </ListItem>
                    ))}
                </List>
                <div className="transactions0">
                    <Link to="/income" className="link transactions">
                    <Button variant="fab" color="primary" aria-label="Add">
                        <AddIcon />
                    </Button>

                    <Button variant="fab" aria-label="Edit" >
                        <CompareArrows />
                    </Button>
                    <Button variant="fab" color="secondary" aria-label="Edit">
                        <Remove />
                    </Button>
                    </Link>
                </div>
            </Fragment>
        );
    }
}

export default Category;