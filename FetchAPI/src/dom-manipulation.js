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

function displayRestaurants(restaurants) {
    let restaurantsNode = '<div class="restaurant-list">';

    restaurants.forEach((restaurant) => {
        restaurantsNode += `
      <div class="restaurant-item">
        <img src="https://restaurant-api.dicoding.dev/images/medium/${restaurant.pictureId}" />
        <h2>${restaurant.name}</h2>
        <p>${restaurant.description}</p>
        <button id=${restaurant.id} class="detail-button">See detail</button>
      </div>
    `;
    });

    restaurantsNode += '</div>';

    container.innerHTML = '';
    container.innerHTML = restaurantsNode;

    const detailButtons = document.querySelectorAll('.detail-button');

    detailButtons.forEach((button) => {
        button.addEventListener('click', onSeeDetailClick);
    });
}

function displayDetailRestaurant(restaurant) {
    let restaurantNode = `
    <div class="restaurant">
      <div class="restaurant-info">
        <img src="https://restaurant-api.dicoding.dev/images/medium/${restaurant.pictureId}" />
        <h2>${restaurant.name}</h2>
        <p>${restaurant.description}</p>
      </div>
      <div class="reviews-list">
        <h3>Customer Reviews</h3>
  `;

    restaurant.customerReviews.forEach((review) => {
        restaurantNode += `
      <div class="review-item">
        <h4>${review.name}</h4>
        <p>${review.review}</p>
      </div>
    `;
    });

    restaurantNode += `
    </div>
    <div class="review-input">
      <h3>Give Review</h3>
      <input id="inputName" type="text" placeholder="name" />
      <input id="inputReview" type="text" placehodler="review" />
      <button id="${restaurant.id}" class="post-review-button">Post Review</button>
    </div>
  `;

    restaurantNode += `
      <button class="button-back">Back to list</button>
    </div>
  `;

    container.innerHTML = '';
    container.innerHTML = restaurantNode;

    const backToListButton = document.querySelector('.button-back');
    const postReviewButton = document.querySelector('.post-review-button');

    backToListButton.addEventListener('click', onBackToListClick);
    postReviewButton.addEventListener('click', onPostReviewClick);
}

export { displayRestaurants };
