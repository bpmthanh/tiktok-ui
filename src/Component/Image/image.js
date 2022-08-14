import {useState, forwardRef } from "react";
import image from "~/assets/image";
import styles from './image.module.scss';
import classNames from 'classnames';
import PropTypes from 'prop-types'

const Image = forwardRef(({src,alt,fallBack:customFallBack=image.noImage ,className,...props},ref) =>{
    const [fallBack,setFallBack]=useState('')
    const handleError=()=>{
        setFallBack(customFallBack)
    }
    return ( 
        // className() giúp nối class
        <img className={classNames(styles.wrapper, className)} {...props} ref={ref} src={fallBack || src} alt={alt} onError={handleError}/>
     );
})

Image.propTypes = {
    src:PropTypes.string,
    alt:PropTypes.string,
    fallBack:PropTypes.string,
    className:PropTypes.string,
}

export default Image