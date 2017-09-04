import React from 'react';
// import {Link} from 'react-router-dom';
import {Collection, CollectionItem} from 'react-materialize';
import './HomePage.css';

const HomePage = (props) => {
    let home = props.user ? 
        <div>
            <div className="container">
            <div className="row">
                <div className="col s12">
                    <Collection header='Groceries'>
                        <CollectionItem>Alvin</CollectionItem>
                        <CollectionItem>Alvin</CollectionItem>
                        <CollectionItem>Alvin</CollectionItem>
                        <CollectionItem>Alvin</CollectionItem>
                    </Collection>
                </div>
            </div>
            </div>

        
        </div>
    :
        <div>
            <span>Sign up!</span>
        </div>
    
    return (
        <div className='HomePage'>
            {home}
        </div>
    );
};

export default HomePage;