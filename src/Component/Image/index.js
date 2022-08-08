import {useState, forwardRef } from "react";
import image from "~/assets/image";
import styles from './Image.module.scss';
import classNames from 'classnames';

function Image({src,alt,fallBack:customFallBack=image.noImage ,className,...props},ref) {
    const [fallBack,setFallBack]=useState('')
    const handleError=()=>{
        setFallBack(customFallBack)
    }
    return ( 
        // className() giúp nối class
        <img className={classNames(styles.wrapper, className)} {...props} ref={ref} src={fallBack || src} alt={alt} onError={handleError}/>
     );
}

export default forwardRef(Image)