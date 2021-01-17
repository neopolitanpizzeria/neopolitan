import React, { useEffect, useState } from 'react';
import Tabletop from 'tabletop'

const Menu = () => {

    const [menuItems, setMenuItems] = useState({
        pizzas: [],
        specials: [],
        addons: []
    })

    const mapDataToState = (data) => {
        let pizzas = [];
        let addons = [];
        let specials = [];
        data.forEach(item => {
            switch (item.type) {
                case 'pizzas':
                    pizzas.push(item)
                    break;
                case 'specials':
                    specials.push(item)
                    break;
                case 'addons':
                    addons.push(item)
                    break;
                default:
                    break;
            }
        });
        setMenuItems({
            pizzas,
            specials,
            addons
        });
        console.log(menuItems);
    }

    useEffect(() => {
        Tabletop.init({
            key: '1leZxr3ImamZCmDGpJQG3HZ-FHGze4FrZu_Br_1UV2F8',
            simpleSheet: true
        })
            .then(data => mapDataToState(data))
            .catch(err => console.log(err))

    }, [])

    return (
        <div className='section menu' id='menu'>
            <div className="menu-content">
                <div className="bgr-overlay"></div>
                <div className="menu-logo"></div>
                <div className="line"></div>
                <p>
                    פיצה דקה רכה ואוורירית, בעלת שוליים תפוחים ומנומרים, נאפית בטאבון עצים
                    נפוליטני מסורתי
				</p>

                <div className="menu-list animate-bottom">
                    <ul id="pizza-menu">
                        <div className="category">
                            <div className="deco">
                                <div className="sc"></div>
                                <div className="bc"></div>
                            </div>
                            <h4>פיצות</h4>
                            <div className="deco">
                                <div className="bc"></div>
                                <div className="sc"></div>
                            </div>
                        </div>
                        {
                            menuItems.pizzas.map(pizza => (
                                <li>
                                    <div className='menu-item-name'>{pizza.name}</div>
                                    <span className="menu-item-price">{pizza.price}</span>
                                    <p className="menu-item-description">{pizza.description}</p>
                                </li>
                            ))
                        }
                    </ul>
                    <ul id="specials-menu">
                        <div className="category">
                            <div className="deco">
                                <div className="sc"></div>
                                <div className="bc"></div>
                            </div>
                            <h4>ספיישלים</h4>
                            <div className="deco">
                                <div className="bc"></div>
                                <div className="sc"></div>
                            </div>
                        </div>
                        {
                            menuItems.specials.map(pizza => (
                                <li>
                                    <div className='menu-item-name men-name'>{pizza.name}</div>
                                    <span className="menu-item-price">{pizza.price}</span>
                                    <p className="menu-item-description">{pizza.description}</p>
                                </li>
                            ))
                        }
                    </ul>
                    <ul id="addons-menu">
                        <div className="category">
                            <div className="deco">
                                <div className="sc"></div>
                                <div className="bc"></div>
                            </div>
                            <h4>תוספות</h4>
                            <div className="deco">
                                <div className="bc"></div>
                                <div className="sc"></div>
                            </div>
                        </div>
                        {
                            menuItems.addons.map(pizza => (
                                <li>
                                    <span className="menu-item-price">{pizza.price}</span>
                                    <p className="menu-item-description">{pizza.description}</p>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Menu
