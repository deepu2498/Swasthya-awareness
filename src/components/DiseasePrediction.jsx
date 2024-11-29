// src/components/DiseasePrediction.js
import React, { useState } from "react";

const DiseasePrediction = () => {
  const [symptoms, setSymptoms] = useState("");
  const [prediction, setPrediction] = useState("");

  const handlePredict = () => {
    const lowerCaseSymptoms = symptoms.toLowerCase();

    if (
      lowerCaseSymptoms.includes("fever") &&
      lowerCaseSymptoms.includes("cough")
    ) {
      setPrediction("You might have the flu.");
    } else if (
      lowerCaseSymptoms.includes("runny nose") &&
      lowerCaseSymptoms.includes("sneezing")
    ) {
      setPrediction("You might have a common cold.");
    } else if (
      lowerCaseSymptoms.includes("loss of taste") ||
      lowerCaseSymptoms.includes("shortness of breath")
    ) {
      setPrediction("You might have COVID-19. Please get tested.");
    } else if (
      lowerCaseSymptoms.includes("itchy eyes") &&
      lowerCaseSymptoms.includes("sneezing")
    ) {
      setPrediction("You might have allergies.");
    } else if (
      lowerCaseSymptoms.includes("chest pain") &&
      lowerCaseSymptoms.includes("shortness of breath")
    ) {
      setPrediction(
        "You might be having a heart attack. Seek medical help immediately."
      );
    } else if (
      lowerCaseSymptoms.includes("headache") &&
      lowerCaseSymptoms.includes("sensitivity to light")
    ) {
      setPrediction("You might have a migraine.");
    } else if (
      lowerCaseSymptoms.includes("frequent urination") &&
      lowerCaseSymptoms.includes("excessive thirst")
    ) {
      setPrediction("You might have diabetes.");
    } else if (
      lowerCaseSymptoms.includes("high blood pressure") &&
      lowerCaseSymptoms.includes("headache")
    ) {
      setPrediction("You might have hypertension. Please consult a doctor.");
    } else if (
      lowerCaseSymptoms.includes("abdominal pain") &&
      lowerCaseSymptoms.includes("diarrhea")
    ) {
      setPrediction("You might have gastrointestinal issues.");
    } else {
      setPrediction(
        "Please consult a healthcare professional for an accurate diagnosis."
      );
    }
  };

  return (
    <div>
      <h2>Disease Prediction</h2>
      <input
        type="text"
        placeholder="Enter symptoms (e.g., fever, cough)"
        value={symptoms}
        onChange={(e) => setSymptoms(e.target.value)}
      />
      <button onClick={handlePredict}>Predict</button>
      {prediction && <p>Prediction: {prediction}</p>}
    </div>
  );
};

export default DiseasePrediction;
