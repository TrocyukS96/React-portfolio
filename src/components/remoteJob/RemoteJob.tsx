import React from 'react';
import s from './RemoteJob.module.scss';
import {Btn} from "../btn/Btn";

let discr = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi dicta dolore eaque enim est id laborum minima, molestias nam nobis, officia optio perspiciatis placeat quam sequi sint ut vel voluptate?'


export function RemoteJob() {
  return (
    <div className={s.remoteJob}>
        <div className={s.wrapper}>
            <h2 className={s.title}>I'm looking for a remote job</h2>
            <Btn title={'Hire me'}/>
        </div>
    </div>
  );
}

