import {FC, useState} from "react";
import s from "./styles.module.scss";
import WebsiteIcon from "../../assets/images/icons/WebsiteIcon";
import GitIcon from "../../assets/images/icons/GitIcon";
import TagsList from "../tagsList/TagsList";
import FlowList from "../flowList/FlowList";

interface IPortfolioCard {
    className?: any
    title: string
    text: string
    goal?: string
    solution?: string
    site?: string | null,
    source:string | null,
    technologies:string[]
    flowList?:string[]
    cardImage?: string
    time: string
}

export const PortfolioCard: FC<IPortfolioCard> = (props) => {
    const {title, text, className,goal, solution, cardImage, time,site,source,technologies,flowList} = props
    const finalClassName = className ? `${s.card} ${className}` : `${s.card}`
    const [flip, setFlip] = useState(false)
    return (
        <div className={finalClassName}>

            <div className={s.flipContainer} >
                <div className={s.flipper} style={flip ? {transform: 'rotateY(180deg)'} : {transform: 'rotateY(0deg)'}}>
                    <div className={s.front}>
                        <div className={s.bg_top}></div>
                        <div className={s.bg_bottom}></div>
                        <div className={s.content}>
                            <h4 className={s.cardTitle}>{title.toUpperCase()}</h4>
                            <p className={s.cardText}>{text}</p>
                            <div className={s.source}>
                                {
                                    site &&
                                    <a href={site} title={'visit website'}>
                                        <WebsiteIcon/>
                                    </a>
                                }
                                {
                                    source &&
                                    <a href={source} title={'visit open source'}>
                                        <GitIcon/>
                                    </a>
                                }
                            </div>
                        </div>
                        <a className={s.portfolioLink} onClick={() => setFlip(!flip)}>Подробнее</a>
                    </div>
                    <div className={s.back}>
                        <div className={s.content}>
                            <div className={s.description}>
                                <h4 className={s.cardTitle}>Информация о проекте:</h4>
                                <h5 className={s.technologies__title}>Используемые технологии:</h5>
                                <TagsList tags={technologies}/>
                                {
                                    flowList &&
                                    <>
                                        <h5 className={s.flow__title}>Основные flow на проекте:</h5>
                                        <FlowList items={flowList}/>
                                    </>
                                }
                            </div>
                            <div className={s.cardImgBlock}>
                                <img src={cardImage} alt="cardImage"/>
                            </div>
                            <div className={s.blurBg}></div>
                        </div>
                        <a className={s.portfolioLink} onClick={() => setFlip(!flip)}>
                            <span className={s.backBtn}>Назад</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
