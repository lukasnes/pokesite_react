import './Main.css'

const Main = (props) => {
    return (
        <main className={props.sidebarToggled ? "content" : "content shrunk"}>
            <header className='content-header'>

            </header>
            <section className='sub-section'>
                <section className='left-column'>

                </section>
                <section className='right-column'>

                </section>
            </section>
        </main>
    )
}

export default Main