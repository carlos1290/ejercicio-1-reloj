import React, { useState, useEffect } from 'react';

function hora () {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Limpiar el intervalo al desmontar el componente
    return () => clearInterval(interval);
  }, []);

  return (
    <div className=''>
      <h1>{time.toLocaleTimeString()}</h1>
    </div>
  );
}

export default hora;
