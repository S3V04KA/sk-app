import './Header.css'

const Header = () => {
    return (
        <header>
            <div className='name'>Sk</div>
            <div className="search"><input type="text" placeholder="Найти проекты, создателей и категории"></input></div>
            <section>
                <div className='addNewProject'>Создать проект</div>
                <div className="login">Войти</div>
            </section>
        </header>
    )
}

export default Header;