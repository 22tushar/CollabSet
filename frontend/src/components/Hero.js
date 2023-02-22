import React from "react";
const Hero = () => {
  return (
    <div style={styles.container}>
      <div style={styles.textContainer}>
        <h1 style={styles.title}>Connect and Hire</h1>
        <p style={styles.text}>
        The Collaboration Platform for College and Career Connections. 
Unleashing limitless opportunities for students and employers alike.
        </p>
      </div>
      <img src='https://media.discordapp.net/attachments/1066435024720777331/1074345579129360464/3d-business-man-and-woman-working-at-the-table.png' alt="Collaboration" height="450px" width="350px" marginTop="20px" />
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "400px",
    width: "100%",
    padding: "0 50px",
  },
  textContainer: {
    width: "45%",
  },
  title: {
    fontSize: "60px",
    fontWeight: "extra-bold",
    marginBottom: "20px",
  },
  text: {
    fontSize: "18px",
    lineHeight: "1.5",
    color: "#333",
  },
  img: {
    width: "45%",
  },
};

export default Hero;