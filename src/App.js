import './App.css';
import { useState } from 'react';
import Header from './components/Header'
import Sidebar from './components/Sidebar'


const App = () => {
    const [sandwichToggled, setSandwichToggled] = useState(false)
    const [sidebarToggled, setSidebarToggled] = useState(false)
    return (
        <div className="App">
            <header>
                <Header sandwichToggled={sandwichToggled} setSandwichToggled={setSandwichToggled} setSidebarToggled={setSidebarToggled}/>
            </header>
            <aside>
                <Sidebar sidebarToggled={sidebarToggled}/>
            </aside>
        </div>
    )
}

export default App