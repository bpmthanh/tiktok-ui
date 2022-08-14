import Button from '~/component/button/button';
import styles from './menu.module.scss';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types'

const cx = classNames.bind(styles); 

function MenuItem({ data,onClick }) {
    const classes=cx('menu-item',{
        separate: data.separate
    });
    return (
        <Button className={classes} onClick={onClick}leftIcon={data.icon} to={data.to}>
            {data.title}
        </Button>
    );
}

MenuItem.propTypes={
    data:PropTypes.object.isRequired,
    onClick:PropTypes.func,
}

export default MenuItem;
