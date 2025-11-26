import { useState, useEffect } from 'react';

function Dashboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const serverresponse = await fetch('https://fakestoreapi.com/products');
      const jsonresponse = await serverresponse.json();
      console.log(jsonresponse);
      setData(jsonresponse);
    }
    fetchData();
  }, []);

  return (
    <div>
      {data.length === 0 ? (
        <h1>Data could not fetch</h1>
      ) : (
        <div>
          {data.map((ele) => (
            <div key={ele.id} style={{height: 300, width: 300 }}>
              <img src={ele.image} alt="" height={100} width={100} />
              <h2>{ele.title}</h2>
              <button>Add to Cart</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dashboard;
