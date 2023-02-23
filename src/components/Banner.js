import '../styles/Banner.css'
import logo from '../assets/logo.png'

function Header() {
    const title = "La maison jungle"
    return (
        <div className='lmj-banner'>
            <img src={logo} alt='La maison jungle' className='lmj-logo' />
            <h1 className='lmj-title'>{title.toUpperCase()}</h1>
            <Description />
        </div>)
}

function Description() {
    const text = "Ici achetez toutes les plantes dont vous avez toujours rêvées"
    const emojis = "🌵🌱🎍"
    return (<p>{ text.slice(0, 100) + emojis }</p>)
}

function Banner() {
    return (<div>
        <Header />
    </div>)
}

export default Banner