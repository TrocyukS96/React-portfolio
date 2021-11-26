import React from 'react';
import s from './MyWorks.module.scss';
import {WorksCard} from "./worksCard/WorksCard";

import childhood from './../../assets/images/childhood.jpg';
import bhakti from './../../assets/images/bhakti.jpg';
import freedom from './../../assets/images/freedom.jpg';
import olof from './../../assets/images/olof.jpg';
import nature from './../../assets/images/viewOfNature.jpg';
import {Title} from "../title/Title";

let discr = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi dicta dolore eaque enim est id laborum minima, molestias nam nobis, officia optio perspiciatis placeat quam sequi sint ut vel voluptate?'

export function MyWorks() {
  return (
    <div className={s.works}>
        <div className={s.wrapper}>
           <Title title={'My works'}/>
            <div className={s.worksInner}>
                <WorksCard title={'nature'} image={nature} />
                <WorksCard title={'childhood'} image={childhood} />
                <WorksCard title={'bhakti'} image={bhakti} />
                <WorksCard title={'freedom'} image={freedom}/>
                <WorksCard title={'olof'} image={olof} />
                <WorksCard title={'childhood'} image={childhood} />
                <WorksCard title={'nature'} image={nature} />
            </div>
        </div>

    </div>
  );
}

