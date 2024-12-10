import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footerContainer}>
      <div style={styles.footerSection}>
        <h3 style={styles.heading}>Address</h3>
        <p>📍 Location</p>
        <p>📞 Call +01 1234567890</p>
        <p>✉ demo@gmail.com</p>
      </div>
      <div style={styles.footerSection}>
        <h3 style={styles.heading}>Info</h3>
        <p>
          Necessary, making this the first true generator on the Internet. It
          uses a dictionary of over 200 Latin words, combined with a handful.
        </p>
      </div>
      <div style={styles.footerSection}>
        <h3 style={styles.heading}>Links</h3>
        <ul style={styles.list}>
          <li style={styles.listItem}>Home</li>
          <li style={styles.listItem}>About</li>
          <li style={styles.listItem}>Services</li>
          <li style={styles.listItem}>Why Us</li>
          <li style={styles.listItem}>Team</li>
        </ul>
      </div>
      <div style={styles.footerSection}>
        <h3 style={styles.heading}>Subscribe</h3>
        <form>
          <input
            type="email"
            placeholder="Enter email"
            style={styles.input}
          />
          <button type="submit" style={styles.button}>
            Subscribe
          </button>
        </form>
      </div>
      <div style={styles.copyright}>
        <p>© 2024 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

const styles = {
  footerContainer: {
    backgroundColor: '#00204a',
    color: 'white',
    textAlign: 'center',
    padding: '30px 20px',
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: '20px',
  },
  footerSection: {
    flex: '1',
    minWidth: '200px',
    maxWidth: '300px',
    margin: '10px',
    textAlign: 'left',
  },
  heading: {
    fontSize: '1.4rem',
    marginBottom: '15px',
    color: '#00bcd4',
  },
  list: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  listItem: {
    marginBottom: '10px',
    cursor: 'pointer',
    transition: 'color 0.3s',
  },
  listItemHover: {
    color: '#00bcd4',
  },
  input: {
    padding: '10px',
    width: '80%',
    margin: '10px 0',
    borderRadius: '4px',
    border: '1px solid #ddd',
    outline: 'none',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#00bcd4',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: 'background-color 0.3s',
  },
  buttonHover: {
    backgroundColor: '#008cbf',
  },
  copyright: {
    flexBasis: '100%',
    textAlign: 'center',
    marginTop: '20px',
    fontSize: '0.9rem',
    color: '#aaa',
  },

  '@media (max-width: 768px)': {
    footerContainer: {
      flexDirection: 'column',
      alignItems: 'center',
      padding: '20px',
    },
    footerSection: {
      textAlign: 'center',
      maxWidth: '100%',
      marginBottom: '20px',
    },
    listItem: {
      marginBottom: '5px',
      fontSize: '1.1rem',
    },
    input: {
      width: '90%',
    },
    button: {
      width: '90%',
    },
  },
};

export default Footer;
