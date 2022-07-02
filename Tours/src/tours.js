import React from 'react';
import Tour from './tour';

const Tours = ({tours, removeTour}) => {
    return(
        <section>
            <h1 className='heading'><u>Our Tours</u></h1>
            <div>
                {/* {tours.map((tour) => {
                    return <Tour key={tour.id}{...tour} removeTour={removeTour} />; */}
                    {tours.map((tour) => {
                        return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
                })}
            </div>
        </section>
    );
};

export default Tours;