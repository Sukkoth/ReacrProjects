const Menu = ({ foods }) => {
    return (
        <section className='menu'>
            {foods.map((food) => (
                <div className='food' key={food.id}>
                    <img src={food.img} className='img' alt={food.title} />
                    <div className='title'>
                        <h4 className='foodName'>{food.title}</h4>
                        <p className='price'>${food.price}</p>
                    </div>
                    <p className='foodDescription'>{food.desc}</p>
                </div>
            ))}
        </section>
    );
};

export default Menu;
