import './Main.css'

const Main = (props) => {
    return (
        <main className={props.sidebarToggled ? "content" : "content shrunk"}>
            <header className='content-header'>

            </header>
        </main>
    )
}

export default Main