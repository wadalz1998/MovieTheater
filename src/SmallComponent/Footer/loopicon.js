import React from 'react'
import "./style.scss"

export default function Loopicon(props) {
    return (
        <div className="col-md-3 conect">
            <a href="#"><img className="iconConect" src={props.iconName1} alt={props.iconName1} /></a>
            <a href="#"><img className="iconConect" src={props.iconName2} alt={props.iconName2} /></a>
            <a href="#"><img className="iconConect" src={props.iconName3} alt={props.iconName3} /></a>
            <a href="#"><img className="iconConect" src={props.iconName4} alt={props.iconName4} /></a>
        </div>
    )
}
