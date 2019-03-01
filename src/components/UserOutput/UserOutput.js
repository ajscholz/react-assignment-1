import React from 'react';
import './UserOutput.css'

const UserOutput = (props) => {
  return (
    <div className='UserOutput'>
      <p>Username: {props.username}</p>
      <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
  )
}

export default UserOutput;
