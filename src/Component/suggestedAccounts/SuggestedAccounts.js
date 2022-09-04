import classNames from 'classnames/bind';
import styles from './suggestedAccounts.module.scss';
import AccountItems from './AccountItems';


const cx = classNames.bind(styles);
function SuggestedAccounts({label}) {
    return ( 
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
            <AccountItems/>
            <AccountItems/>
            <AccountItems/>
            <AccountItems/>
            <AccountItems/>
            <AccountItems/>
            <AccountItems/>
            <p className={cx('see-all')}>Xem tất cả</p>
        </div>
     );
}

export default SuggestedAccounts;