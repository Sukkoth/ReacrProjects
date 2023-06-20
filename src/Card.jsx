const Card = ({ name, title, reviewText, avatar }) => {
    return (
        <>
            <div className='avatar'>
                <img src={avatar} alt='avatar' />
            </div>
            <p className='name'>{name}</p>
            <p className='title'>{title}</p>
            <p className='review_text'>{reviewText}</p>
        </>
    );
};

export default Card;
