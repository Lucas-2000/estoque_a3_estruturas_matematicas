import React from "react";
import "./MainButton.css";
import imgNovoProduto from '../../images/NovoProduto.svg'

export const MainButton = (props) => {
    return (
        <a className='link-button' href={props.linkTo}>
            <div className="icon-mainButton">
                <img src={props.icon} alt="Icone" />
            </div>
            <div className="txt-mainButton">
                {props.value}
            </div>
        </a>
    )
}