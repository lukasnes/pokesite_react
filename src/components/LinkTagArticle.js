import React from "react";
import './Article.css';
import { Link } from 'react-router-dom';

const LinkTagArticle = props => {
    return (
        <Link style={{textDecoration: 'none'}} to={props.link}>
            <article>
                <div></div>
                <div>
                    
                </div>
                <div></div>
            </article>
        </Link>
    )
}


export default LinkTagArticle