// import React, {useState, useEffect} from 'react';

// function Example() {
//     const [count, setCount] = useState(0);

//     useEffect(()=>{
//         document.title = `You clicked ${count} times`
//     })

//     return(
//         <div>
//             <p> You clicked {count} times</p>
//             <button onClick={()=> setCount(count+1)}>
//                 Click Me
//             </button>
//         </div>
//     )
// }

import React, { useState } from 'react';

function UserPoints() {
  const [username, setUsername] = useState(``);
  const [isUsernameSaved, setIsUsernameSaved] = useState(false);
  const [points, setPoints] = useState(0);

  return (
    <>
      {isUsernameSaved ? (
        <>
          <h1>
            {username}: {points}
          </h1>
          <p>
            <button onClick={() => setPoints(points + 1)}>Add Point</button>
            <button onClick={() => setPoints(0)}>Clear Points</button>
          </p>
          <p>
            <button
              onClick={() => {
                setIsUsernameSaved(false);
              }}
            >
              Edit Username
            </button>
            <button
              onClick={() => {
                setUsername(``);
                setPoints(0);
                setIsUsernameSaved(false);
              }}
            >
              Clear Username
            </button>
          </p>
        </>
      ) : (
        <p>
          <input
            id="username"
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            value={username}
          />
          <button onClick={() => setIsUsernameSaved(true)}>
            Save Username
          </button>
        </p>
      )}
    </>
  );
}
