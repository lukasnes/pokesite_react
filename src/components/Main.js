import './Main.css'
import SidebarData from './SidebarData'

const Main = (props) => {
    const createHeaderTitle = () => {
        let currentPage = SidebarData.filter(obj => obj.path === props.path)
        return currentPage[0].header
    }
    const generateHeaderColor = () => {
        let currentPage = SidebarData.filter(obj => obj.path === props.path)
        return currentPage[0].color
    }
    return (
        <main className={props.sidebarToggled ? "content" : "content shrunk"}>
            <header className='content-header' style={{backgroundColor: `${generateHeaderColor()}`}}>
                {createHeaderTitle()}
            </header>
        </main>
    )
}

export default Main