import { getRestaurant, getRestaurants, postRestaurantReview } from './api';

const container = document.getElementById('root');

async function onSeeDetailClick(event) {
    const id = event.target.id;
    const restaurant = await getRestaurant(id);
    displayDetailRestaurant(restaurant);
}

async function onBackToListClick() {
    const restaurant = await getRestaurants();
    displayRestaurants(restaurant);
}

async function onPostReviewClick(event) {
    const id = event.target.id;
    const name = document.querySelector('#inputName').value;
    const review = document.querySelector('#inputReview').value;

    await postRestaurantReview(id, name, review);

    const restaurant = await getRestaurant(id);
    displayDetailRestaurant(restaurant);
}



export { displayRestaurants };
