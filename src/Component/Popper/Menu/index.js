import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { useState } from 'react';
import PropTypes from 'prop-types'

import styles from './menu.module.scss';
import { Wrapper as PopperWrapper } from '~/component/popper';
import MenuItem from './menuItem'
import Header from './header';

const cx = classNames.bind(styles);

const defaultFn=()=>{}

function Menu({ children,items,onChange=defaultFn,hideOnClick=false,...passProps}) {
    const [history,setHistory]=useState([{data:items}])
    const current = history[history.length - 1];
    const renderItems=()=>{
        return current.data.map((item,index)=>{
            { /* Co children se tra ve true */ }
            const isParent = !!item.children
            return <MenuItem key={index} data={item} onClick={()=>{
                if(isParent) {
                    setHistory(prev=>[...prev,item.children])
                }
                else{
                    onChange(item)
                }
            }}/>
    })
    }
    return (
        <Tippy
            {...passProps}
            delay={[0,700]}
            interactive
            offset={[16,8]}
            placement="bottom-end"
            // visible
            hideOnClick={hideOnClick}
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>
                        {history.length >1 && <Header title={current.title} onBack={()=>{
                            setHistory(prev=>prev.slice(0,prev.length-1))
                        }}/>}    
                        <div className={cx('menu-scrollable')}>{renderItems()}</div>
                    </PopperWrapper>
                </div>
            )}
            onHide={()=>setHistory(prev=> prev.slice(0,1))}
        >{children} 
        </Tippy>
    );
}

export default Menu;

Menu.propTypes={
    children:PropTypes.node.isRequired,
    items:PropTypes.array,
    onChange:PropTypes.func,
    hideOnClick:PropTypes.bool
}