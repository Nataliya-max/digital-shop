import "./DigitalItem.css";

const DigitalItem = ({ item }) => {
  return (
    <div className="digital-item-card">
      <img src={item.image} alt={item.title} />
      <h3>{item.title}</h3>
      <p>{item.description}</p>
    </div>
  );
};

export default DigitalItem;
