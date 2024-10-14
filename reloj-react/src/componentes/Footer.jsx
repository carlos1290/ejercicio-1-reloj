import React from 'react';
import { FaClock } from 'react-icons/fa';
import { BiAlarm } from "react-icons/bi";
import { Link } from 'react-router-dom';


const Sidebar = () => {
  return (
    <div style={styles.sidebar}>
      <div style={styles.iconContainer}>
      <Link to="/reloj-timer">
        <FaClock style={styles.icon} />
        <span>Reloj</span>
        </Link>
      </div>
      <div style={styles.iconContainer}>
        <BiAlarm style={styles.icon} />
        <span>Cronometro</span>
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
