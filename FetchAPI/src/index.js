import { getRestaurants } from './api';
import { displayRestaurants } from './dom-manipulation';
import './style.css';

(async () => {
    const restaurant = await getRestaurants();
    displayRestaurants(restaurant);
})();
