function Contact({ name, phone, cell, picture }) {
  const { first, last } = name;
  return (
    <div className="card">
      <div className="image">
        <img src={picture.large} alt="" />
      </div>
      <div className="info">
        <div>{`${first} ${last}`}</div>
        <div>{cell}</div>
        <div>{phone}</div>
      </div>
    </div>
  );
}
export default Contact;
