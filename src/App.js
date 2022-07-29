import './App.css';
import { useState } from 'react';
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Main from './components/Main'


const App = () => {
    const [sidebarToggled, setSidebarToggled] = useState(false)
    return (
        <div className="App">
            <header>
                <Header sidebarToggled={sidebarToggled} setSidebarToggled={setSidebarToggled}/>
            </header>
            <aside>
                <Sidebar sidebarToggled={sidebarToggled}/>
            </aside>
            <main>
                <Main sidebarToggled={sidebarToggled}/>
            </main>
        </div>
    )
}

export default App