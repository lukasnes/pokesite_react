import React from "react";
import './Article.css';


const ATagArticle = props => {
    return (
        <a style={{textDecoration: 'none'}} href={props.obj.link}>
            <article>
                <div style={{background: `linear-gradient(to bottom, #FFFFFF, ${props.color})`}} className="article-sidebar"></div>
                <div>
                    
                </div>
                <div style={{background: `linear-gradient(to bottom, #FFFFFF, ${props.color})`}} className="article-sidebar"></div>
            </article>
        </a>
    )
}


export default ATagArticle