function Card({ id, title, image, onAdd }) {
    return (
        <div className="product-card">
            <div className="product-card__image">
                <img src={image} alt={title} />
            </div>

            <h3>{title}</h3>

            <button onClick={() => onAdd(id, title)}>
                Добавить
            </button>
        </div>
    );
}

export default Card;
