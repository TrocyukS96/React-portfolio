import React from 'react';
import s from './styles.module.scss';

const FlowList = (props:{items:string[]}) => {
    return (
        <div className={s.flowList}>
            <ul>
                {
                    props.items.map((item,index)=>
                    <li className={s.flowItem} key={index}>
                        {item}
                    </li>)
                }
                <li></li>
            </ul>
        </div>
    );
};

export default FlowList;