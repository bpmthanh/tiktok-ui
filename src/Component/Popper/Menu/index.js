import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { useState } from 'react';

import styles from './Menu.module.scss';
import { Wrapper as PopperWrapper } from '~/Component/Popper';
import MenuItem from './MenuItem'
import Header from './Header';

const cx = classNames.bind(styles);

const defaultFn=()=>{}

function Menu({ children,items,onChange=defaultFn,hideOnClick=false}) {
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
            delay={[0,700]}
            interactive
            offset={[16,8]}
            placement="bottom-end"
            // visible
            hideOnClick={hideOnClick}
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>
                        {history.length >1 && <Header title='Ngôn ngữ' onBack={()=>{
                            setHistory(prev=>prev.slice(0,prev.length-1))
                        }}/>}    
                        {renderItems()}
                    </PopperWrapper>
                </div>
            )}
            onHide={()=>setHistory(prev=> prev.slice(0,1))}
        >{children} 
        </Tippy>
    );
}

export default Menu;