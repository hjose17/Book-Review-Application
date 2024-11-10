import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ReviewContext } from "../contexts/ReviewContext";
import Book from "./Book";
import ReviewForm from "./ReviewForm";
import ReviewList from "./ReviewList";

function BookInfo() {
    const { setBookISBN, bookInfo } = useContext(ReviewContext);
    const { isbn } = useParams();  // Get the ISBN from the URL

    // State to store the fetched reviews
    const [reviewsList, setReviewsList] = useState([]);
    const [isLoading, setIsLoading] = useState(true); // Loading state for bookInfo and reviews

    // Update the book ISBN in context when the ISBN changes in the URL
    useEffect(() => {
        if (isbn) {
            setBookISBN(isbn); // Set the current book ISBN to the context
            // Fetch reviews for the current book ISBN
            fetchReviews(isbn);
        }
    }, [isbn, setBookISBN]);

    // Fetch reviews for the given ISBN from the backend
    const fetchReviews = async (isbn) => {
        try {
            const response = await fetch(`http://localhost:5000/reviews/${isbn}`);
            const data = await response.json();

            if (response.ok) {
                setReviewsList(data); // Update the reviews state
            } else {
                console.error("No reviews found for this book");
                setReviewsList([]); // No reviews found
            }
        } catch (error) {
            console.error("Error fetching reviews:", error);
        } finally {
            setIsLoading(false); // Set loading to false after fetching is complete
        }
    };

    // Handle loading state
    if (isLoading) {
        return (
            <section className="section text-muted">
                <div className="container">
                    <p>Loading book info and reviews...</p> {/* You can replace this with a spinner */}
                </div>
            </section>
        );
    }

    return (
        <section className="section text-muted">
            <div className="container">
                {/* Conditionally render the Book component if bookInfo is available */}
                {bookInfo ? (
                    <Book book={bookInfo} />
                ) : (
                    <p>Book not found</p> // Fallback if bookInfo is still not available
                )}

                {/* ReviewForm will handle submitting the review */}
                {/* <ReviewForm /> */}

                {/* Render the list of reviews */}
                {reviewsList && reviewsList.length > 0 ? (
                    <ReviewList reviews={reviewsList} />
                ) : (
                    <p>No reviews available for this book</p> // Fallback if no reviews are found
                )}
            </div>
        </section>
    );
}

export default BookInfo;
