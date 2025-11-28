import { useState, useEffect } from 'react';

function Dashboard() {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);
  const [cartprice, setCartprice] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const serverresponse = await fetch('https://fakestoreapi.com/products');
      const jsonresponse = await serverresponse.json();
      console.log(jsonresponse);
      setData(jsonresponse);
    }
    fetchData();
  }, []);

  function shoppingCart(ele) {
    setCart(prev => [...prev, ele]);
  }

  function addCartprice(ele) {
    setCartprice(prev => prev + ele.price);
  }

  return (
    <div>
      <div style={{ backgroundColor: 'lightgray', padding: '10px', marginBottom: '20px', border: '2px solid black' }}>
        {cart.length === 0 ? (
          <h3>No items in cart</h3>
        ) : (
          cart.map((ele) => (
            <h3 key={ele.id}>
              {ele.title} - Rs. {ele.price}
            </h3>
          ))
        )}
        <h5>Total Price: Rs. {cartprice}</h5>
        <button>Checkout</button>
      </div>

      {data.length === 0 ? (
        <h1>Data could not fetch</h1>
      ) : (
        <div>
          {data.map((ele) => (
            <div
              key={ele.id}
              style={{ border: '1px solid black', margin: '10px', padding: '10px', width: '300px' }}
            >
              <img src={ele.image} alt="" height={100} width={100} />
              <h2>{ele.category}</h2>
              <h2>{ele.title}</h2>
              <h6>{ele.description}</h6>
              <h3>Rs. {ele.price}</h3>
              <button onClick={() => { shoppingCart(ele); addCartprice(ele); }}>Add to Cart</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dashboard;
