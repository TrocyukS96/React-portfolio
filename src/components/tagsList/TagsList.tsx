import React from 'react';
import s from './styles.module.scss';

const TagsList = (props:{tags:string[]}) => {
    return (
        <div className={s.tagsList}>
            {
                props.tags.map((tag,index)=>
                <div key={index} className={s.tag}>{tag}</div>)
            }
        </div>
    );
};

export default TagsList;