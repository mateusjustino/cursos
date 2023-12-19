import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div>
      <h2>Contact Page</h2>
      <button className="btn btn-primary">Botão Bootstrap</button>
      <Link to="/contact/contact2">Contact</Link>
    </div>
  );
};

export default Contact;
