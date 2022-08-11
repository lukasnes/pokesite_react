import React from "react";
import './Article.css';


const ATagArticle = props => {
    return (
        <a style={{textDecoration: 'none'}} href={props.link}>
            <article>
                <div></div>
                <div>
                    
                </div>
                <div></div>
            </article>
        </a>
    )
}


export default ATagArticle