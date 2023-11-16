// SurveyResults.js
import React from 'react';

const SurveyResults = ({ feedback }) => {
  return (
    <div>
      <h2>Survey Results</h2>
      {feedback && (
        <p>
          <strong>Your Feedback:</strong> {feedback}
        </p>
      )}
    </div>
  );
};

export default SurveyResults;
