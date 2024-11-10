import React, { useState } from 'react';
import ReviewForm from './ReviewForm'; // Import the ReviewForm

function Book(props) {
  const { book } = props;
  const [isReviewFormVisible, setReviewFormVisible] = useState(false);

  // Toggle the visibility of the ReviewForm
  const handleToggleReviewForm = () => {
    setReviewFormVisible((prevState) => !prevState);
  };

  return (
    <div className="card mb-3 book">
      <div className="row g-0">
        <div className="col-md-3">
          <img src={book.image} alt={book.title} />
        </div>
        <div className="col-md-9">
          <div className="card-body">
            <h2 className="card-title">{book.title}</h2>
            <h4 className="card-subtitle">{book.subtitle}</h4>
            <h5 className="card-text">by {book.authors}</h5>
            <p className="card-data text-muted">Released: {book.year}</p>
            <p className="card-data text-muted">Publisher(s): {book.publisher}</p>
            <p className="card-data text-muted">Pages: {book.pages}</p>
            <p className="card-data text-muted">ISBN: {book.isbn13}</p>
            <p className="card-desc">{book.desc}</p>

            {/* Conditionally render ReviewForm */}
            {isReviewFormVisible && <ReviewForm isbn={book.isbn13} />}

            <button onClick={handleToggleReviewForm}>
              {isReviewFormVisible ? 'Hide Review Form' : 'Leave a Review'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Book;
