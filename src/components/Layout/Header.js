import React from 'react';

import HeaderCardButton from './HeaderCartButton';
import mealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css';

const Header = (props) => {
    return ( 
        <>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <HeaderCardButton/>
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt="A table full of food" />
            </div>
        </>
     );
}
 
export default Header;