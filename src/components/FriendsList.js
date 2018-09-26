import React from 'react';

export default function FriendsList ({
    friend,
}){
    return (
        <div>
          <h2>Your Friends List</h2>
          <ul>
            {
              friend ?
                          <li>
                            <h2>{friend.name}</h2>
                            <p>
                              <img src = {friend.photo} alt = {friend.name}/> 
                            </p>
                          </li>
                  : 
                  'No Friends found'
            
            }
          </ul>
        </div>
    );
}
