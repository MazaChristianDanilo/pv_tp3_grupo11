import React, { useContext } from 'react';
import { AuthContext } from './context/AuthContext'; 

const Header = () => {

  const { user } = useContext(AuthContext);

  return (
    <header style={styles.header}>
      <div style={styles.logo}>
        <h1>Gestion de Proyectos Educativos</h1>
      </div>
      
      user ? (
        <div style={styles.userInfo}>
          <p style={styles.userName}>{user.name}</p>
          <span style={styles.userRole}>{user.role}</span>
        </div>
      ) : (
        <div style={styles.userInfo}>
          <p style={styles.userName}>Invitado</p>
        </div>
      )
    </header>
  );
};

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'between', 
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 20px',
    backgroundColor: '#2c3e50',
    color: '#fff',
    height: '60px'
  },
  userInfo: {
    textAlign: 'right', 
  },
  userName: {
    margin: 0,
    fontWeight: 'bold',
    fontSize: '14px'
  },
  userRole: {
    fontSize: '12px',
    color: '#bdc3c7',
    textTransform: 'uppercase'
  }
};

export default Header;