import './PageNotFinished.css'
import Images from '../images/Images'

const PageNotFinished = props => {
    return (
        <div className="not-finished">
            <img src={Images.icons.warning}/>
            <p>{"Uh oh! It seems as though this page isn't finished yet!"}</p>
        </div>
    )
}

export default PageNotFinished