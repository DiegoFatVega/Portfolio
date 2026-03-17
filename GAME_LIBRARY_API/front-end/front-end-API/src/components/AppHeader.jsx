import ControllerIcon from '../assets/game-controller-svgrepo-com.svg'
export default function AppHeader() {
    const nav_options = [
        {
            id: 1,
            text: "Lista Giochi",
            link: "#"
        },
        {
            id: 2,
            text: "Aggiungi",
            link: "#"
        },
        {
            id: 3,
            text: "Altra Pagina",
            link: "#"
        },
    ]
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

                    <div className='d-flex gap-4'>
                        {nav_options.map(option => <a key={option.id} href={option.link} className='nav-link fs-5 fw-bold text-light'>{option.text}</a>)}
                    </div>
                </nav>
            </header>
        </>
    )
}