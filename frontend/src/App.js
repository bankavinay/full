// import React, { useEffect, useState } from "react";
// import axios from "axios";
// const App = () => {
//   const [list, setList] = useState([]);

//   useEffect(() => {
//     const axiosData = async () => {
//       try {
//         const rep = await axios.get(
//           "https://jsonplaceholder.typicode.com/users"
//         );
//         setList(rep.data);
//         //console.log(rep.data);
//       } catch (e) {
//         console.log(e);
//       }
//     };
//     axiosData();
//   }, []);
//   return (
//     <div>
//       {list.map((item) => {
//         return (
//           <div>
//             <h1>{item.id}</h1>
//             <h3>{item.name}</h3>
//             <p>{item.email}</p>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default App;

// App.js (Frontend)
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState(null);

  // Fetch data from backend when component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/data');
        setData(response.data); // Store response data in state
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty array means this effect runs only once

  return (
    <div>
      <h1>Data from Backend:</h1>
      {data ? <p>{data.message}</p> : <p>Loading...</p>}
    </div>
  );
};

export default App;
