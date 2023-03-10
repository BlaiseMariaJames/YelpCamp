// REQUIRING EXPRESS
const express = require("express");

// CREATING ROUTER INSTANCE 
const router = express.Router({ mergeParams: true });

// REQUIRING CAMPGROUND CONTROLLER
const Review = require("../controllers/Review Controller");

// REQUIRING WRAPPER FUNCTION TO HANDLE ASYNC ERRORS
const handleAsyncErrors = require("../utilities/Error Handling/Async Error Handling Middleware Function.js");

// REQUIRING MIDDLEWARE FUNCTION TO CHECK IF USER IS LOGGED IN 
const isLoggedIn = require("../utilities/Authentication/Check If Logged In.js");

// REQUIRING MIDDLEWARE FUNCTION TO CHECK IF CURRENT USER IS AUTHORIZED
const isAuthorized = require("../utilities/Authorization/Check If Is Authorized For Review.js");

// RESPONDING TO THE SERVER AT REVIEW MODEL BASED ROUTE

// Create --> Creates new review on server.
router.post('/', isLoggedIn, handleAsyncErrors(Review.createReview));

// Delete --> Deletes a review on server.
router.delete('/:reviewId', isLoggedIn, isAuthorized, handleAsyncErrors(Review.deleteReview));

// EXPORTING ROUTER INSTANCE
module.exports = router;