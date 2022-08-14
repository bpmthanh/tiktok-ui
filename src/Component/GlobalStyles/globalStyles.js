import './globalStyles.scss';
import PropTypes from 'prop-types'
import React from 'react';

function GlobalStyles({ children }) {
    return children;
    // return React.Children.only(children); Chap nhan duy nhat 1 element
}

GlobalStyles.propTypes={
    children: PropTypes.node.isRequired,
}

export default GlobalStyles;
