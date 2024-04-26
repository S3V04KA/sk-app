import './Card.css'

const Card = ({imageUrl, name, author}) => {
    return (
        <div className='Card'>
            <img src={imageUrl} alt='Картинка проекта'/>
            <h1>{name}</h1>
            <p>{author}</p>
        </div>
    )
}

export default Card;