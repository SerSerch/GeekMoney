import React from 'react';
import { connect } from 'react-redux';
import { userSigningIn } from 'actions/scores';
import Score from 'components/Score';


function mapStateToProps(state, ownProps) {
    return {
        //отвечает за то что будет в props компонента из store
        ...ownProps,
        score: state.score,
    }
}

function mapDispatchToProps(dispatch, props) {
    return {
        //отвечает за то что будет в props компонента из actions
        ...props,
        userSigningIn: (data) => dispatch(userSigningIn(data)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Score);