import React, { useState } from 'react';
import './ReviewForm.css';

const ReviewForm = ({ doctorName, onSubmit }) => {
    const [name, setName] = useState(''); // State for the Name field
    const [rating, setRating] = useState(0);
    const [reviewText, setReviewText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ name, rating, reviewText }); // Pass the name in the submission
        alert('Thank you for your review!');
    };

    return (
        <div className="review-form-container">
            <h3>Give Your Review for Dr. {doctorName}</h3>
            <form onSubmit={handleSubmit}>
                {/* Name Input Field */}
                <div className="form-group">
                    <label htmlFor="reviewer-name">Name</label>
                    <input
                        type="text"
                        id="reviewer-name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>

                {/* Star Rating */}
                <div className="form-group">
                    <label>Rating</label>
                    <div className="star-rating">
                        {[...Array(5)].map((star, index) => {
                            index += 1;
                            return (
                                <button
                                    type="button"
                                    key={index}
                                    className={index <= rating ? "on" : "off"}
                                    onClick={() => setRating(index)}
                                >
                                    <span className="star">&#9733;</span>
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Review Text Area */}
                <div className="form-group">
                    <label htmlFor="review-text">Review</label>
                    <textarea
                        id="review-text"
                        rows="4"
                        value={reviewText}
                        onChange={(e) => setReviewText(e.target.value)}
                        required
                    ></textarea>
                </div>
                <button type="submit" className="submit-review-btn">Submit</button>
            </form>
        </div>
    );
};

export default ReviewForm;