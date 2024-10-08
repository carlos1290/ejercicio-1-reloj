import React from 'react';
import { FaClock } from 'react-icons/fa';
import { BiAlarm } from "react-icons/bi";
 // Importa el icono de reloj

const Sidebar = () => {
  return (
    <div style={styles.sidebar}>
      <div style={styles.iconContainer}>
        <FaClock style={styles.icon} />
        <span>Clock 1</span>
      </div>
      <div style={styles.iconContainer}>
        <BiAlarm style={styles.icon} />
        <span>Clock 2</span>
      </div>
    </div>
  );
};

const styles = {
  sidebar: {
    height: '95vh',
    width: '200px',
    backgroundColor: '#333333',
    color: '#ffffff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
  },
  icon: {
    fontSize: '24px',
    marginRight: '10px',
  },
};

export default Sidebar;
