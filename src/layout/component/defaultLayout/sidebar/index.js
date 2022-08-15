import styles from './sidebar.module.scss';
import classNames from 'classnames/bind';
import Menu, {MenuItem} from './Menu'
import config from '~/config';
import * as icons from '~/component/icons';

const cx = classNames.bind(styles);

console.log(icons.HomeIcon)
function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title='Dành cho bạn' to={config.routes.home} icon={<icons.HomeIcon/>} activeIcon={<icons.HomeActiveIcon/>}></MenuItem>
                <MenuItem title='Đang follow' to={config.routes.following} icon={<icons.UserGroupIcon/>} activeIcon={<icons.UserGroupActiveIcon/>}></MenuItem>
                <MenuItem title='LIVE' to={config.routes.live} icon={<icons.LiveIcon/>} activeIcon={<icons.LiveActiveIcon/>}></MenuItem>
            </Menu>
        </aside>
    );
}

export default Sidebar;
