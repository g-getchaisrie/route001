import React from 'react';
import { useParams } from 'react-router-dom';

function User() {
  // รับค่าจาก Dynamic Route ด้วย useParams
  const { userId } = useParams();

  return (
    <div>
      <h2>User Page</h2>
      <p>User ID: {userId}</p>
    </div>
  );
}

export default User;
