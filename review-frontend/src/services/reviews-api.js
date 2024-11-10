import axios from 'axios';

const baseURL = 'https://it-book-review.herokuapp.com/api/';

function getAxios(endPoint) {
    return axios.get(baseURL + endPoint)
        .then(response => response.data)
}

function postAxios(endPoint, body) {
    return axios.post(baseURL + endPoint, body)
        .then(response => response.data)
}

function putAxios(endPoint, body) {
    return axios.put(baseURL + endPoint, body)
        .then(response => response.data)
}

function deleteAxios(endPoint, body) {
    return axios.delete(baseURL + endPoint, body)
        .then(response => response.data)
}
// get all reviews list
function getAllReviews() {
    return getAxios('reviews');
}
// get reviews by ISBN
function getReviewsByISBN(isbn) {
    const url = 'reviews/' + isbn;
    return getAxios(url);
}
// create new review
function createNewReview(review) {
    return postAxios('review', review);
}
// update review
function updateReview(review) {
    return putAxios('review/' + review.id, review);
}
// delete review
function deleteReview(review) {
    return deleteAxios('review/' + review.id, review);
}

export { getAllReviews, getReviewsByISBN, createNewReview, updateReview, deleteReview };