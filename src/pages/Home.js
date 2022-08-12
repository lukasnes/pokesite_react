import React from 'react'
import './Home.css'
import HomeData from './HomeData'
import ATagArticle from '../components/ATagArticle';
import LinkTagArticle from '../components/LinkTagArticle';

const Home = () => {
    return (
        <div className="Home">
            <section className='left-column'>
                {HomeData.map((dataObj,index) => {
                    if(index % 2 === 0){
                        let { link } = dataObj
                        if(link[0] === '/'){
                            return (
                                <LinkTagArticle obj={dataObj}/>
                            )
                        } else {
                            return (
                                <ATagArticle obj={dataObj}/>
                            )
                        }
                    }
                })}
            </section>
            <section className='right-column'>
                {HomeData.map((dataObj,index) => {
                    if(index % 2){
                        let { link } = dataObj
                        if(link[0] === '/'){
                            return (
                                <LinkTagArticle obj={dataObj}/>
                            )
                        } else {
                            return (
                                <ATagArticle obj={dataObj}/>
                            )
                        }
                    }
                })}
            </section>
        </div>
    )
}

export default Home