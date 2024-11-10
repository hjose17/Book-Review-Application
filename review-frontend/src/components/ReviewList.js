function ReviewList({ reviews }) {
    return (
        <div className="review-list">
            {reviews.map((review) => (
                <div key={review._id} className="review-item">
                    <h5>{review.name}</h5>
                    <p>{review.review}</p>              
                    <small>Reviewed on: {new Date(review.time).toLocaleDateString()}</small>
                </div>
            ))}
        </div>
    );
}

export default ReviewList;
