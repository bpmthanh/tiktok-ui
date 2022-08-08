import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import Image from '~/Component/Image';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function AccountItem({ data }) {
    return (
        <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
            <Image fallBack='https://cdn-icons-png.flaticon.com/512/1053/1053244.png?w=360' className={cx('avatar')} src={data.avatar} alt={data.nickname}></Image>
            <div className={cx('information')}>
                <p className={cx('name')}>
                    <span>{data.nickname}</span>
                    {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCircleCheck} />}
                </p>
                <span className={cx('user-name')}>{data.full_name}</span>
            </div>
        </Link>
    );
}

export default AccountItem;
