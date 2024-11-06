import React from 'react';
import HogCard from './HogCard';

function HogList ({hogs}){
    return(
        <div className="ui grid container">
            {hogs.map((hog) => (
                  <div className="ui eight wide column" key={hog.name}>
                <HogCard key ={hog.name} hog={hog}/>
                </div>
            ))}
        </div>
    )
}
export default HogList;