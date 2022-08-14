import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './button.module.scss';
import PropTypes from 'prop-types'

const cx = classNames.bind(styles);

function Button({text,to,href,children,primary,outline,sizeS,sizeL,disable,rounded,className,leftIcon,rightIcon,...passprops}) {
    let Component='button'
    const classes=cx('wrapper',{primary,outline,sizeS,sizeL,text,disable,rounded,[className]:className})
    const props={
        ...passprops
    }

    if(to){
        props.to=to
        Component=Link
    } 

    // Remove eventlisteners
    else if(disable){
        Object.keys(props).forEach(propKey =>{
            if(propKey.startsWith('on')&& typeof props[propKey]==='function'){
                delete props[propKey];
            }
        })
    }

    else if(href){
        props.href=href
        Component='a'
    }
    return ( 
        <Component className={classes} {...props}>  {/* <button></button> */}
        {leftIcon && <span className={cx('icon')}>{leftIcon}</span>} {/* Nếu có leftIcon thì đưa vào thẻ span */}
        <span className={cx('title')}>{children}</span>
        {rightIcon && <span className={cx('icon')}>{rightIcon}</span>} {/* Nếu có leftIcon thì đưa vào thẻ span */}
        </Component>
     );
}

Button.protoType={
    to:PropTypes.string,
    href:PropTypes.string,
    children:PropTypes.node.isRequired,
    primary:PropTypes.bool,
    text:PropTypes.bool,
    outline:PropTypes.bool,
    sizeS:PropTypes.bool,
    sizeL:PropTypes.bool,
    disable:PropTypes.bool,
    rounded :PropTypes.bool,
    leftIcon:PropTypes.string,
    rightIcon:PropTypes.string,
    className:PropTypes.string,
}

export default Button;