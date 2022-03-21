import "../App.css";
import ContactCard from "../compontents/ContactCard.jsx";
import data from "../data/contacts.json";

function Contactlist() {
  const list = data.results.map((item) => (
    <ContactCard
      image={item.picture.large}
      name={item.picture.name.first + " " + item.name.last}
      home={item.phone}
      mobile={item.cell}
    />
  ));
  return (
    <>
      <div className="container">{list}</div>;
    </>
  );
}

export default Contactlist;
