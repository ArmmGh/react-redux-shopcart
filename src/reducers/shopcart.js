import { ADD_TO_CART, DELETE_CART, ADD_ITEM } from '../constants';

const initialState = [{
        id: 1,
        name: 'Pamidor',
        price: 10,
        count: 0,
        img: 'https://sklep-nasiona.pl/images/thumbnails/280/280/detailed/31/pomidor-saint-pierre-nasiona-1.jpg',
        isAdded: false
    },
    {
        id: 2,
        name: 'Steak',
        price: 32,
        count: 0,
        img: 'http://www.seriouseats.com/recipes/assets_c/2015/05/Anova-Steak-Guide-Sous-Vide-Photos15-beauty-thumb-1500xauto-423558.jpg',
        isAdded: true
    },
    {
        id: 3,
        name: 'Cheese',
        price: 8,
        count: 0,
        img: 'https://sc01.alicdn.com/kf/UTB8DYfMX3QydeJk43PUq6AyQpXaL/Mozzarella-cheese-for-Pizza-mozzarella-cheese-Block.jpg',
        isAdded: false
    }
]

const shopcart = (state = initialState, action) => {
    switch (action.type) {

        case ADD_TO_CART:
            return state.map(item => item.id === action.id ? { ...item, isAdded: true } : item);
        case DELETE_CART:
            return state.map(item => item.id === action.id ? { ...item, isAdded: false } : item);
        case ADD_ITEM:
            return console.log(action);

        default:
            return state
    }
}

export default shopcart;