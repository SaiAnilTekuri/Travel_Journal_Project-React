import React from "react";
import pathimage from '../images/path.png'


function Card(props) {
    return (
        <div className="card--div">
            <img src={props.imageUrl} alt="location" className="card--img" />
            <div>
                <p><img src={pathimage} alt="path symbol" className="card--pathimg"/>{props.location}<a href={props.googleMapsUrl} target="_blank" className="card--link">View on Google Maps</a></p>
                <h1>{props.title}</h1>
                <p><b>{props.startDate} - {props.endDate}</b></p>
                <p>{props.description}</p>
            </div>
        </div>
    )
}

export default Card