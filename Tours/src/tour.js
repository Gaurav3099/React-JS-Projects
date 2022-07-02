import {useState} from 'react';
const Tour = ({ id, image, info, name, price, removeTour }) => {
    const [readMore, setReadMore]=useState(false);
    return(
        <article className='single-tour'>
            <img src={image} alt={name}/>
            <div className='tour-info'>
                <h2 className='tour-name'>{name}</h2>
                <h4 className='price'>${price}</h4>
            </div>
            <p>
                {readMore ? info: `${info.substring(0,200)}...`}
                <button className='more' onClick={() => setReadMore(!readMore)}>
                    {readMore ? 'show less' : 'read more'}
                </button>
            </p>
            <button className='delete-button' onClick={() => removeTour(id)}>Not Interested</button>
        </article>
    );
};

export default Tour;