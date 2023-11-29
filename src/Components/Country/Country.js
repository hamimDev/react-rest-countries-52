import React from 'react';
import './Country.css'

const Country = (props) => {
    const{name,population,region,area,flags} = props.country
    return (
        <div className='Country'>
            <h2>
                Country Name: {name.common}
            </h2>
            <img src={flags.png} alt="" />
            <h3>
                Population: {population}
            </h3>
            <p>
                Region: <small> {region}</small>
            </p>
            <h4>
                Area: {area} km²
            </h4>
            
            <img src="" alt="" />
        </div>
    );
};

export default Country;