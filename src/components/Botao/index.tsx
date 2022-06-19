import React from 'react'
import style from './Botao.module.scss';

interface BotaoProps {
    children: React.ReactNode;
    type?: 'submit' | 'button';
    onClick?: () => void;
}

export default class Botao extends React.Component<BotaoProps> {
    render() {
        const { type = "button", onClick } = this.props;
        return (
            <button onClick={onClick} type={type} className={style.botao}>
                {this.props.children}
            </button>
        )
    }
};