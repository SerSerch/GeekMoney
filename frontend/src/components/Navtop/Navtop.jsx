
import './Navtop.scss';
import React, { PureComponent, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MoreIcon from '@material-ui/icons/MoreVert';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuList from '@material-ui/core/MenuList';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';

function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
}

class Navtop extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            anchorMenu: null,
            anchorEdit: null,
        };
    }

    handleMenu = event => {
        this.setState({ anchorMenu: event.currentTarget });
    };

    handleEdit = event => {
        this.setState({ anchorEdit: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorMenu: null, anchorEdit: null });
    };

    render() {
        const { anchorMenu, anchorEdit } = this.state;
        const openMenu = Boolean(anchorMenu);
        const openEdit = Boolean(anchorEdit);
        const { match, location, history } = this.props;

        return (
            <AppBar position="static">
                <Toolbar>
                    <IconButton color="inherit" aria-label="Menu" className="menu__button"
                                aria-owns={openMenu ? 'menu-appbar' : undefined}
                                aria-haspopup="true"
                                onClick={this.handleMenu}
                                color="inherit"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        id="menu-bar"
                        anchorEl={anchorMenu}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        open={openMenu}
                        onClose={this.handleClose}
                    >
                        <Link to="/" onClick={this.handleClose} className="link">
                            <MenuItem>
                                <ListItemIcon>
                                    <SendIcon />
                                </ListItemIcon>
                                <ListItemText inset primary="Home" />
                            </MenuItem>
                        </Link>
                        <Link to="/login" onClick={this.handleClose} className="link">
                            <MenuItem>
                                <ListItemIcon>
                                    <SendIcon />
                                </ListItemIcon>
                                <ListItemText inset primary="Login" />
                            </MenuItem>
                        </Link>
                        <Link to="/score" onClick={this.handleClose} className="link">
                            <MenuItem>
                                <ListItemIcon>
                                    <SendIcon />
                                </ListItemIcon>
                                <ListItemText inset primary="Score" />
                            </MenuItem>
                        </Link>
                        <Link to="/income" onClick={this.handleClose} className="link">
                            <MenuItem>
                                <ListItemIcon>
                                    <SendIcon />
                                </ListItemIcon>
                                <ListItemText inset primary="Income" />
                            </MenuItem>
                        </Link>
                        <Link to="/expenses" onClick={this.handleClose} className="link">
                            <MenuItem>
                                <ListItemIcon>
                                    <SendIcon />
                                </ListItemIcon>
                                <ListItemText inset primary="Expenses" />
                            </MenuItem>
                        </Link>
                        <Link to="/transfer" onClick={this.handleClose} className="link">
                            <MenuItem>
                                <ListItemIcon>
                                    <SendIcon />
                                </ListItemIcon>
                                <ListItemText inset primary="Transfer" />
                            </MenuItem>
                        </Link>
                    </Menu>
                    <Typography variant="h1" color="inherit" className="nav-caption _small">
                        GeekMoney {location.pathname}
                    </Typography>
                    <div>
                        <IconButton aria-label="Edit"
                                    aria-owns={openEdit ? 'menu-appbar' : undefined}
                                    aria-haspopup="true"
                                    onClick={this.handleEdit}
                                    color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                        <Menu
                            id="edit-bar"
                            anchorEl={anchorEdit}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={openEdit}
                            onClose={this.handleClose}
                        >
                            <MenuItem>
                                <ListItemIcon>
                                    <SendIcon />
                                </ListItemIcon>
                                <ListItemText inset primary="Sent mail" />
                            </MenuItem>
                            <MenuItem>
                                <ListItemIcon>
                                    <DraftsIcon />
                                </ListItemIcon>
                                <ListItemText inset primary="Drafts" />
                            </MenuItem>
                            <MenuItem>
                                <ListItemIcon>
                                    <InboxIcon />
                                </ListItemIcon>
                                <ListItemText inset primary="Inbox" />
                            </MenuItem>
                        </Menu>
                    </div>
                </Toolbar>
            </AppBar>
        );
    }
}

export default withRouter(Navtop);