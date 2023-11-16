// SurveyForm.js
import React, { useState } from 'react';

const SurveyForm = ({ onFeedbackSubmit }) => {
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onFeedbackSubmit(feedback); // Pass feedback to parent component
  };

  return (
    <div>
      <h2>Feedback Survey</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Your Feedback:
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SurveyForm;
