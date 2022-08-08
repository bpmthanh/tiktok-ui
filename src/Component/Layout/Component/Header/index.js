import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faSpinner,
    faCircleXmark,
    faMagnifyingGlass,
    faEllipsisVertical,
    faEarthEurope,
    faCircleQuestion,
    faKeyboard,
    faPlus,
    faCoins,
    faGear,
    faUser,
    faArrowRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import HeadlessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'

import { Wrapper as PopperWrapper } from '~/Component/Popper';
import styles from './Header.module.scss';
import image from '~/assets/image';
import AccountItem from '~/Component/AccountItem';
import Button from '~/Component/Button';
import Menu from '~/Component/Popper/Menu';
import { MessageIcon, UploadIcon } from '~/Component/Icons';
import Image from '~/Component/Image';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthEurope} />,
        title: 'Tiếng Việt',
        children: {
            title: 'Ngôn ngữ',
            data: [
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'ind',
                    title: 'Bahasa Indonesia',
                },
                {
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Phản hồi và trợ giúp',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Phím tắt trên bàn phím',
    },
];

function Header() {

    const currentUser = true;

    const [searchResult, setSearchResult] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0);
    }, []);

    const handleMenuChange = (menuItem) => {
        console.log(menuItem);
    };

    const userMenu=[
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'Xem hồ sơ',
            to:'/@anh2chetao'
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Nhận xu',
            to:'/coin'
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Cài đặt',
            to:'/setting'
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faArrowRightFromBracket} />,
            title: 'Đăng suất',
            to:'/logout',
            separate: true,
        },
    ]

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={image.logo} alt="tiktok"></img>
                </div>
                <HeadlessTippy
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
                </HeadlessTippy>

                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Button text leftIcon={<FontAwesomeIcon icon={faPlus} />}>Tải lên</Button>
                            <Tippy placement='bottom' duration={[0,0]} content='Tin nhắn'><button className={cx('actions-btn')}> <UploadIcon/></button></Tippy>
                            <Tippy placement='bottom' duration={[0,0]} content='Hộp thư'><button className={cx('actions-btn')}><MessageIcon/></button></Tippy>
                        </>
                    ) : (
                        <>
                            <Button text leftIcon={<FontAwesomeIcon icon={faPlus} />}>Tải lên</Button>
                            <Button primary>Đăng nhập</Button>
                        </>
                    )}

                    {/* menu-list/menu-popper(wrapper,Header)/menu-item(button-wrapper) */}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image className={cx('user-avatar')} alt="Nguyen Van A" fallBack='https://upload.wikimedia.org/wikipedia/commons/f/f2/2020_Ferrari_F8_Tributo_3.9.jpg' src='https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/8a97ef3da44f0b2c4962a2ca835220de~c5_100x100.jpeg?x-expires=1660017600&x-signature=LRIfVdc4G1qsb0Rb148XwrNpH5g%3D'/>
                        ):(
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>

            </div>
        </header>
    );
}

export default Header;
