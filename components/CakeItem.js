// components/CakeItem.js
const CakeItem = ({ cake }) => (
    <div className="cake-item">
      <img src={`/images/${cake.image}`} alt={cake.name} />
      <h2>{cake.name}</h2>
      <p>Price: {cake.price} VC</p>
      <button>Buy</button>
    </div>
  );
  
  export default CakeItem;
  