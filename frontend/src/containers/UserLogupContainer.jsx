import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { userSigningUp, /*userSigningOut,*/ userSigningAuth } from 'actions/users';
import Logup from 'components/Logup';


function mapStateToProps(state, ownProps) {
    return {
        //отвечает за то что будет в props компонента из store
        ...ownProps,
        user: state.user,
    }
}

function mapDispatchToProps(dispatch, props) {
    return {
        //отвечает за то что будет в props компонента из actions
        ...props,
        userSigningUp: (data) => dispatch(userSigningUp(data)),
        //userSigningOut: (data) => dispatch(userSigningOut(data)),
        userSigningAuth: (data) => dispatch(userSigningAuth(data)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Logup);