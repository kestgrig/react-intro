import './Header.css';
import logo from '/vite.svg'


export function Header() {
    return (
        <header className='mainHeader'>
            <div className='mainlogo'>
                <img className='logo' src={logo} alt="Logo" />
                <p className='vite'>Vite</p>
            </div>
            <nav className='nav'>
                <a className='link' href="#">Guide</a>
                <a className='link' href="#">Config</a>
                <a className='link' href="#">Plugins</a>
                <a className='link' href="#">Resources</a>
                <a className='link' href="#">Version</a>
            </nav>
        </header>
        
    )
    
}