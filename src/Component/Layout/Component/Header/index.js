import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import image from '~/assets/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner, faCircleXmark, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={image.logo} alt='tiktok'></img>
                </div>
                <div className={cx('search')}>
                    <input placeholder='Tìm kiếm tài khoản và video' spellCheck='true'></input>
                    <button className={cx('clear')}>
                        <FontAwesomeIcon icon={faCircleXmark}/>
                    </button>
                    <FontAwesomeIcon className={cx('loading')} icon={faSpinner}/>
                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass}/>
                    </button>
                </div>
                <div className={cx('actions')}></div>
            </div>
        </header>
    );
}

export default Header;