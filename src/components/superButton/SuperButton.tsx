import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react'
import s from './SuperButton.module.scss';

// тип пропсов обычной кнопки, children в котором храниться название кнопки там уже описан
type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type SuperButtonPropsType = DefaultButtonPropsType & {
    title: string
    className?: any
    variant?:any
}

export const SuperButton: React.FC<SuperButtonPropsType> = ({
                                                         className,
                                                         ...restProps
                                                     }) => {
    const finalClassName = `${s.btn} ${className}`;
    return (
        <button className={finalClassName} >
            {restProps.title}
        </button>
    )
    // )
}




