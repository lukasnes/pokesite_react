import React from "react";
import './Article.css';
import { Link } from 'react-router-dom';

const LinkTagArticle = props => {
    return (
        <Link style={{textDecoration: 'none'}} to={props.obj.link}>
            <article style={{ color: props.obj.color }}>
                <div style={{background: `linear-gradient(to bottom, #FFFFFF, ${props.obj.color})`}} className="article-sidebar"></div>
                <div className="article-content">
                    <div className="article-image-box">
                        <img src={ props.obj.img } alt={ props.obj.alt } className="article-image"/>
                    </div>
                    <h1 className="article-title"> { props.obj.title } </h1>
                    <p className="article-text"> { props.obj.description } </p>
                </div>
                <div style={{background: `linear-gradient(to bottom, #FFFFFF, ${props.obj.color})`}} className="article-sidebar"></div>
            </article>
        </Link>
    )
}


export default LinkTagArticle