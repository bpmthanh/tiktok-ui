import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner, faCircleXmark, faMagnifyingGlass, faEllipsisVertical,faEarthEurope, faCircleQuestion, faKeyboard,faPlus } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '~/Component/Popper';
import styles from './Header.module.scss';
import image from '~/assets/image';
import AccountItem from '~/Component/AccountItem';
import Button from '~/Component/Button';
import Menu from '~/Component/Popper/Menu';

const cx = classNames.bind(styles);

const MENU_ITEMS=[
    {
        icon:<FontAwesomeIcon icon={faEarthEurope}/>,
        title: 'Tiếng Việt',
        
    },
    {
        icon:<FontAwesomeIcon icon={faCircleQuestion}/>,
        title: 'Phản hồi và trợ giúp',
        to: '/feedback'
    },
    {
        icon:<FontAwesomeIcon icon={faKeyboard}/>,
        title: 'Phím tắt trên bàn phím',
    }
]

function Header() {
    const [searchResult, setSearchResult] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0);
    }, []);
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={image.logo} alt="tiktok"></img>
                </div>
                <Tippy
                    interactive
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>Tài khoản</h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input placeholder="Tìm kiếm tài khoản và video" spellCheck="true"></input>
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </Tippy>
                <div className={cx('actions')}>
                    <Button text leftIcon={<FontAwesomeIcon icon={faPlus}/>}>Tải lên</Button>
                    <Button primary>Đăng nhập</Button>

                    {/* menu-list/menu-popper(wrapper)/menu-item(button-wrapper) */}
                    <Menu items={MENU_ITEMS}> 
                        <button className={cx('more-btn')}>
                            <FontAwesomeIcon icon={faEllipsisVertical}/>
                        </button>
                    </Menu>

                </div>
            </div>
        </header>
    );
}

export default Header;