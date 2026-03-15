import ControllerIcon from '../assets/game-controller-svgrepo-com.svg'
export default function AppHeader() {

    return (
        <>
            <header className='bg-danger shadow-sm'>
                <nav className="navbar navbar-expand-lg navbar-dark container-fluid py-2 px-2">
                    {/* Aggiungiamo uno stile per bloccare l'altezza dell'icona */}
                    <img
                        src={ControllerIcon}
                        alt="Controller-logo"
                        style={{ height: '70px', width: 'auto' }}
                        className="me-3"
                    />

                    <div className='d-flex gap-3'>
                        <a href='#' className="nav-link text-white">Option 1</a>
                        <a href='#' className="nav-link text-white">Option 2</a>
                        <a href='#' className="nav-link text-white">Option 3</a>
                    </div>
                </nav>
            </header>
        </>
    )
}