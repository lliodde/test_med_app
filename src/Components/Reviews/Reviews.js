import React, { useState, useEffect } from 'react';
import Popup from 'reactjs-popup';
import ReviewForm from '../ReviewForm/ReviewForm';
import './Reviews.css';

const Reviews = () => {
    const [appointments, setAppointments] = useState([]);
    const [reviewed, setReviewed] = useState({});

    useEffect(() => {
        const savedAppointment = sessionStorage.getItem('bookedAppointment');
        if (savedAppointment) {
            setAppointments([JSON.parse(savedAppointment)]);
        }
    }, []);

    const handleReviewSubmit = (appointmentId) => {
        setReviewed(prev => ({ ...prev, [appointmentId]: true }));
    };

    return (
        <div className="reviews-container">
            <h2>Reviews</h2>
            <p>Provide feedback for your past consultations.</p>
            <div className="reviews-table-container">
                <table>
                    <thead>
                        <tr>
                            <th>Serial Number</th>
                            <th>Doctor Name</th>
                            <th>Doctor Speciality</th>
                            <th>Provide Feedback</th>
                            <th>Review Given</th>
                        </tr>
                    </thead>
                    <tbody>
                        {appointments.length > 0 ? appointments.map((app, index) => (
                            <tr key={app.id}>
                                <td>{index + 1}</td>
                                <td>Dr. {app.doctor.name}</td>
                                <td>{app.doctor.specialty}</td>
                                <td>
                                    {!reviewed[app.id] ? (
                                        <Popup
                                            trigger={<button className="provide-review-btn">Click Here</button>}
                                            modal
                                            nested
                                        >
                                            {(close) => (
                                                <div className="modal-container">
                                                    <button className="close-modal-btn" onClick={close}>&times;</button>
                                                    <ReviewForm
                                                        doctorName={app.doctor.name}
                                                        onSubmit={() => {
                                                            handleReviewSubmit(app.id);
                                                            close();
                                                        }}
                                                    />
                                                </div>
                                            )}
                                        </Popup>
                                    ) : (
                                      <span>Thank you!</span>
                                    )}
                                </td>
                                <td className={reviewed[app.id] ? 'reviewed-yes' : 'reviewed-no'}>
                                    {reviewed[app.id] ? 'Yes' : 'No'}
                                </td>
                            </tr>
                        )) : (
                            <tr>
                                <td colSpan="5">You have no past appointments to review.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Reviews;