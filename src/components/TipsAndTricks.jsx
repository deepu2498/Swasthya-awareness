import React from 'react';

const TipsAndTricks = () => {
  const tips = [
    {
      ageGroup: '20-30',
      tips: [
        'Exercise daily and maintain a balanced diet.',
        'Prioritize sleep (7-9 hours per night).',
        'Stay hydrated by drinking at least 8 glasses of water daily.',
        'Practice mindfulness or meditation to manage stress.',
        'Avoid smoking and limit alcohol consumption.',
      ],
    },
    {
      ageGroup: '30-40',
      tips: [
        'Incorporate regular cardiovascular exercise for heart health.',
        'Get regular screenings for blood sugar, cholesterol, and cancer risks.',
        'Eat omega-3 fatty acids for brain health.',
        'Limit screen time before bed to improve sleep quality.',
        'Monitor your weight and maintain a healthy BMI.',
      ],
    },
    {
      ageGroup: '40-50',
      tips: [
        'Incorporate weight-bearing exercises to strengthen bones.',
        'Eat foods rich in antioxidants to protect against aging.',
        'Monitor your vision and hearing health.',
        'Practice gratitude daily to improve emotional well-being.',
        'Focus on sleep hygiene for better rest.',
      ],
    },
    {
      ageGroup: '50+',
      tips: [
        'Focus on low-impact exercises such as walking or swimming.',
        'Include high-fiber foods to promote digestive health.',
        'Continue mental stimulation through new hobbies and learning.',
        'Keep up with routine health screenings.',
        'Stay active socially by engaging in community activities.',
      ],
    },
  ];

  return (
    <div>
    <h2><i className="fas fa-stethoscope" style={{ marginRight: '10px' }}></i>Health Tips</h2>
    {tips.map((group, index) => (
      <div key={index}>
        <h3>Age Group: {group.ageGroup}</h3>
        <ul>
          {group.tips.map((tip, i) => (
            <li key={i}>{tip}</li>
          ))}
        </ul>
      </div>
    ))}
  </div>
  );
};

export default TipsAndTricks;
