import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import Image from '~/Component/Image';

const cx = classNames.bind(styles);

function AccountItem() {
    return ( 
        <div className={cx('wrapper')}>
            <Image className={cx('avatar')} src='https://p16-sign-sg.tiktokcdn.com/tiktok-obj/1659227589383169~c5_300x300.webp?x-expires=1659711600&x-signature=tymeDpT8tV%2Fyg7tGbPHVjROTm58%3D' alt='' ></Image>
            <div className={cx('information')}>
                <p className={cx('name')}>
                    <span>Nguyen van A</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCircleCheck}/>
                </p>
                <span className={cx('user-name')}>nguyenvana</span>
            </div>    
        </div>
     )
}

export default AccountItem;