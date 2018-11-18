
import './Navtop.scss';
import React, { PureComponent, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Menu from '@material-ui/core/Menu';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

import MenuIcon from '@material-ui/icons/Menu';
import MoreIcon from '@material-ui/icons/MoreVert';
import MenuItem from '@material-ui/core/MenuItem';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

const caption = {
    "/": "GeekMoney",
    "/login": "Авторизация",
    "/logup": "Регистрация",
    "/api/user": "Пользователь",
    "/score": "Счета",
    "/category": "Категории",
    "/income": "Доход",
    "/expenses": "Расход",
    "/transfer": "Перевод",
};
const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

class Navtop extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            anchorMenu: false,
            anchorEdit: null,
        };
    }

    toggleDrawer = (side, open) => () => {
        this.setState({
            [side]: open,
        });
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
            <Fragment>
                <AppBar position="fixed">
                    <Toolbar>
                        <IconButton className="menu__button _left"
                                    color="inherit" aria-label="Menu"
                                    aria-owns={openMenu ? 'menu-appbar' : undefined}
                                    aria-haspopup="true"
                                    onClick={this.toggleDrawer("anchorMenu", true)}
                                    color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h1" color="inherit" className="menu__caption _small">
                            {caption[location.pathname]}
                        </Typography>
                        <div>
                            <IconButton className="menu__button _right"
                                        aria-label="Edit"
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
                <SwipeableDrawer disableBackdropTransition={!iOS} disableDiscovery={iOS}
                                 open={openMenu}
                                 onClose={this.toggleDrawer('anchorMenu', false)}
                                 onOpen={this.toggleDrawer('anchorMenu', true)}
                >
                    <div
                        tabIndex={0}
                        role="button"
                        onClick={this.toggleDrawer('anchorMenu', false)}
                        onKeyDown={this.toggleDrawer('anchorMenu', false)}
                    >
                        <List component="nav">
                            <ListItem button onClick={this.toggleDrawer}>
                                <ListItemIcon>
                                    <ChevronLeftIcon />
                                </ListItemIcon>
                            </ListItem>
                            <Divider />
                            {Object.keys(caption).map(link => (
                                <Link to={link} className="link" key={link}>
                                    <ListItem button>
                                        <ListItemIcon>
                                            <SendIcon/>
                                        </ListItemIcon>
                                        <ListItemText inset primary={caption[link]}/>
                                    </ListItem>
                                </Link>
                            ))}
                        </List>
                    </div>
                </SwipeableDrawer>
            </Fragment>
        );
    }
}

export default withRouter(Navtop);