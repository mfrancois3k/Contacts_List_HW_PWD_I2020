import "../App.css";
import Contact from "./Contact.jsx";
import data from "../data/contacts.json";

function ContactList() {
  return (
    <div className="container">
      {data.results.map((contact, index) => {
        return <Contact key={index} {...contact} />;
      })}
    </div>
  );
}

export default ContactList;
