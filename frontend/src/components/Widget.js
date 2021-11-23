import React, {useState} from 'react';
import { widgetsData } from '../data/widgetsData';

const Widget = (props) => {

    const[currentWidget]=useState(widgetsData)
    const widget = currentWidget[props.widgetNumber];

    let left = Math.floor(Math.random() * 200 + 700) + "px";
    let top = Math.floor(Math.random() * 200 + 150) + "px";
    let transform = "scale(" + (Math.random() + 0.7) + ")";

    return (
        <div className="widget-main">
            <div className="widget-content">
                <h1>{widget.title}</h1>
                <p>{widget.date}</p>
                <ul className="languages">
                    {widget.languages.map((item) => {
                        return <li key={item}>{item} </li>
                    })}
                </ul>
            </div>
            <div className="img-content">
                <div className="img-container hover">
                    <span>
                        <h3>{widget.title}</h3>
                        <p>{widget.infos}</p>
                    </span>
                    <img src={widget.img} alt={widget.title}/>
                </div>
                <div className="button-container">
                    <a href={widget.link} target="_blank" rel="noopener noreferrer" className="hover">
                    <span className="button">Voir le site</span>
                    </a>
                </div>
            </div>
            <span className="random-circle" style={{left, top, transform}}></span>
        </div>
    );
};

export default Widget;