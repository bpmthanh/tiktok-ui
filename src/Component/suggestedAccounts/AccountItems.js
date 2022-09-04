import classNames from 'classnames/bind';
import styles from './suggestedAccounts.module.scss';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/component/popper';
import AccountPreview from './accountPreview';

const cx = classNames.bind(styles);

function AccountItems() {
    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview/>
                </PopperWrapper>
            </div>
        );
    };

    return (
        <div>
            <Tippy
                interactive
                delay={[700, 0]}
                offset={[-10,0]}
                placement="bottom-start"
                render={renderPreview} 
                // visible
            >
                <div className={cx('account-items')}>
                    <img
                        aria-hidden
                        className={cx('avatar')}
                        src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1662393600&x-signature=GxhGZB%2FXPd6oqrZ7occtPnw%2B%2Fmo%3D"
                        alt="logo image"
                    />
                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}>
                            <strong>theanh28entertainment</strong>
                            <svg
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="circle-check"
                                class="svg-inline--fa fa-circle-check accountItem_check__c1bw6"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                            >
                                <path
                                    fill="currentColor"
                                    d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM371.8 211.8C382.7 200.9 382.7 183.1 371.8 172.2C360.9 161.3 343.1 161.3 332.2 172.2L224 280.4L179.8 236.2C168.9 225.3 151.1 225.3 140.2 236.2C129.3 247.1 129.3 264.9 140.2 275.8L204.2 339.8C215.1 350.7 232.9 350.7 243.8 339.8L371.8 211.8z"
                                ></path>
                            </svg>
                        </p>
                        <p className={cx('name')}>Theanh28 Entertainment</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

export default AccountItems;
