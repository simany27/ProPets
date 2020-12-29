import React from 'react';
import {pictures} from "../source/variables";

const News = (props) => {

    return (
        <div>
            {props.news.newsUnits.map((item, index) => (
                <NewUnit
                    key={index}
                    new={item}
                    avatar={props.accounting.avatar}
                    name={props.accounting.name}
                />
            ))}
        </div>
    );
}

export default News;


const NewUnit = (props) => {

    return (
        <div>
            <img src = {props.avatar === '5555555.jpg' ? pictures.auto : props.avatar} alt="avatar"
                 className="avatar"/>
            {props.name}
            {props.new.text}
        </div>
    );
}
