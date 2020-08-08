import React, { useState, useEffect } from 'react';
import TinderCard from 'react-tinder-card';
import database from './firebase';
import './TinderCards.css';
function TinderCards() {
    const [crush, setCrush] = useState([]);
    //piece of code that runs based on a condition
    useEffect(() => {
        const unsubscribe=database
        .collection('crush')
        .onSnapshot((snapshot) => 
            /*get all documents in the collection and then for each document, get the 
            it's data
            Here, 'crush' is the collection.
            Entities inside the crush i.e. Alan Rickman is the 'document'
            'name' and 'url' of Alan Rickman is the data of the document i.e 'doc data'.
            and then, we use 'setCrush' to set all of that in the 'crush' array.*/
            setCrush(snapshot.docs.map(doc => doc.data()))
        );
        return ()=>{
            unsubscribe();
        }
        //this will run once when component loads, if the dependency is empty.
    }, []);
    return (
        <div>
            <div className="tinderCards-container">
                {crush.map(crush => (
                    <TinderCard
                        className="swipe"
                        key={crush.name}
                        preventSwipe={['up', 'down']}>
                        <div
                            style={{ backgroundImage: `url(${crush.url})` }}
                            className="card">
                            <h3>{crush.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>
        </div>
    );
}

export default TinderCards;