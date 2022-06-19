import React from 'react'
import style from './Botao.module.scss';

interface BotaoProps {
    type?: 'submit' | 'button';
    onClick?: () => void;
    children?: React.ReactNode;
}

export default function Botao({onClick, type, children}: BotaoProps) {
    return (
        <button onClick={onClick} type={type} className={style.botao}>
            {children}
        </button>
    )
}
