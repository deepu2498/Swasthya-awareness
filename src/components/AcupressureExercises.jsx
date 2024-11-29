// src/components/AcupressureExercises.js
import React from "react";

const AcupressureExercises = () => {
  const exercises = [
    {
      name: "Hand Pressure Points",
      description:
        "Press the point between your thumb and index finger for relief from headaches, neck pain, or stress.",
      icon: "fas fa-hand-paper",
    },
    {
      name: "Third Eye Point (Headache Relief)",
      description:
        "Press the area between your eyebrows, just above the bridge of your nose. This can help relieve tension headaches.",
      icon: "fas fa-eye",
    },
    {
      name: "Shoulder Relief",
      description:
        "Press on the point between the base of your neck and shoulder to relieve shoulder pain and tension.",
      icon: "fas fa-shoulder",
    },
    {
      name: "Solar Plexus Point (Stomach Relief)",
      description:
        "Apply pressure just above the navel (solar plexus) to help with digestive issues or bloating.",
      icon: "fas fa-bell",
    },
    {
      name: "Inner Gate Point (Wrist Relief)",
      description:
        "Place your thumb on the inner side of your wrist to relieve nausea and discomfort.",
      icon: "fas fa-wristband",
    },
    {
      name: "Liver 3 Point (Foot Relief)",
      description:
        "Press the area between your first and second toes for detoxification and stress relief.",
      icon: "fas fa-foot-print",
    },
    {
      name: "Ear Massage",
      description:
        "Gently massage the outer ear to reduce stress, tension, and improve circulation.",
      icon: "fas fa-ear",
    },
    {
      name: "Neck and Shoulder Stretch",
      description:
        "Apply pressure along your neck from the base of your skull to relieve stiffness and improve flexibility.",
      icon: "fas fa-user-md",
    },
    {
      name: "Wrist and Palm Pressure Points",
      description:
        "Apply pressure to your wrist and palm area to reduce anxiety and help digestion.",
      icon: "fas fa-hand-holding-heart",
    },
    {
      name: "Nose Bridge Point (Sinus Relief)",
      description:
        "Press the top of your nose bridge to relieve sinus pressure and headaches.",
      icon: "fas fa-snowflake",
    },
    {
      name: "Sacral Point (Lower Back Relief)",
      description:
        "Apply pressure just above your tailbone to relieve lower back pain and stress.",
      icon: "fas fa-spine",
    },
    {
      name: "Temple Pressure Points (Eye Strain Relief)",
      description:
        "Gently press your temples to relieve eye strain, headaches, and mental fatigue.",
      icon: "fas fa-eye-dropper",
    },
    {
      name: "Ankle Pressure Point Relief",
      description:
        "Press the area on the inside of your ankle to help with tension relief and improve energy flow.",
      icon: "fas fa-shoe-prints",
    },
  ];

  return (
    <div>
      <h2>Acupressure Exercises</h2>
      {exercises.map((exercise, index) => (
        <div key={index} className="exercise-card">
          <h3>
            <i className={exercise.icon}></i> {exercise.name}
          </h3>
          <p>{exercise.description}</p>
        </div>
      ))}
    </div>
  );
};

export default AcupressureExercises;
