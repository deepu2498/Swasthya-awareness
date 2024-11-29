import React from 'react'

const HomeRemedies = () => {
  const remedies = [
    { ailment: 'Cold', remedy: 'Ginger tea with honey.' },
    { ailment: 'Headache', remedy: 'Peppermint oil massage.' },
    // Add more remedies as needed
  ];


  return (
    <div>
       <h2>Home Remedies</h2>
      {remedies.map((item, index) => (
        <div key={index}>
          <h3>{item.ailment}</h3>
          <p>{item.remedy}</p>
        </div>
      ))}


    </div>
  )
}

export default HomeRemedies
