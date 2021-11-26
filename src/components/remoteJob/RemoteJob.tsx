import React from 'react';
import s from './RemoteJob.module.scss';
import {Title} from "../title/Title";
import {SuperButton} from '../superButton/SuperButton';
let discr = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi dicta dolore eaque enim est id laborum minima, molestias nam nobis, officia optio perspiciatis placeat quam sequi sint ut vel voluptate?'

export function RemoteJob() {
  return (
    <div className={s.remoteJob}>
        <div className={s.wrapper}>
            <Title title={'I am looking for a remote job'}/>
            <SuperButton title={'Hire me'} variant={'outlined'} />
        </div>
    </div>
  );
}

