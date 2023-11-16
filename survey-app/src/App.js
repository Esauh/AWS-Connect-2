// App.js
import React, { useState } from 'react';
import Header from './components/Header';
import SurveyForm from './components/SurveyForm';
import SurveyResults from './components/SurveyResults';

function App() {
  const [submittedFeedback, setSubmittedFeedback] = useState('');

  const handleFeedbackSubmit = (feedback) => {
    setSubmittedFeedback(feedback);
  };

  return (
    <div className="App">
      <Header />
      <SurveyForm onFeedbackSubmit={handleFeedbackSubmit} />
      <SurveyResults feedback={submittedFeedback} />
    </div>
  );
}

export default App;
