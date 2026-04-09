import React from 'react'

function UserCard(props) {
  return (
    <div style={styles.card}>
      <h2>User Information</h2>
      <p><strong>Name:</strong> {props.name}</p>
      <p><strong>Age:</strong> {props.age}</p>
      <p><strong>Location:</strong> {props.location}</p>
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid #ccc",
    borderRadius: "10px",
    padding: "15px",
    width: "250px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    margin: "10px"
  }
};

export default UserCard
