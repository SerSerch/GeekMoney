import React from 'react';
import { connect } from 'react-redux';
import { testSigningIn } from 'actions/categories';
import Category from 'components/Category';


function mapStateToProps(state, ownProps) {
    return {
        //отвечает за то что будет в props компонента из store
        ...ownProps,
        category: state.category,
    }
}

function mapDispatchToProps(dispatch, props) {
    return {
        //отвечает за то что будет в props компонента из actions
        ...props,
        testSigningIn: (data) => dispatch(testSigningIn(data)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Category);