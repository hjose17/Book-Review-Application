import { useContext } from "react";
import { ReviewContext } from "../contexts/ReviewContext";

function ReviewForm({ isbn }) {
  const { formData, handleChange, handleSubmit } = useContext(ReviewContext);

  // Function to handle the form submission
  const submitReview = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/review", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          isbn: isbn, // Use the dynamic ISBN passed as a prop
          name: formData.name,
          review: formData.review,
        }),
      });

      const result = await response.json();
      if (response.ok) {
        // Handle success (e.g., reset form or show success message)
        alert("Review submitted successfully!");
      } else {
        // Handle error
        alert(result.message || "Error submitting review");
      }
    } catch (error) {
      console.error("Error submitting review:", error);
      alert("Error submitting review");
    }
  };

  return (
    <div className="custombox clearfix">
      <h4 className="small-title">Leave a Review</h4>
      <div className="row">
        <div className="col-lg-12">
          <form className="form-wrapper" onSubmit={submitReview} novalidate>
            <input
              name="name"
              type="text"
              className="form-control"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              required
            />
            <textarea
              name="review"
              className="form-control"
              value={formData.review}
              onChange={handleChange}
              maxLength="2000"
              placeholder="Enter your review..."
              required
            />
            <button type="submit" className="btn btn-outline-primary">
              Submit Review
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ReviewForm;
