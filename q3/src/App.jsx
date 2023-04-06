import React from 'react';

const App = () => {
  const currentDate = new Date();
  const days = [];

  for (let i = 1; i <= 5; i++) {
    const nextDate = new Date(currentDate);
    nextDate.setDate(currentDate.getDate() + i);
    days.push(nextDate.toDateString());
  }

  return (
    <div className='main'>
      <h2>Next 5 Days : </h2>
      <ul>
        {days.map((day) => (
          <li key={day} style={{ color: 'magenta' }}>
            {day}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;