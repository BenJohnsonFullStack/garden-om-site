import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

/* eslint-disable react/prop-types */
const SubscribeModal = (props) => {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    dob: "",
  };

  const { modalActive, isModalActive } = props;
  const [formValues, setFormValues] = useState(initialValues);

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  if (modalActive) {
    return (
      <div className="modal">
        <h4>Stay up to date.</h4>
        <FontAwesomeIcon
          icon={faX}
          onClick={isModalActive}
          className="menu-icon"
        />
        <form className="form-wrapper" method="dialog">
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            placeholder="Jane"
            type="text"
            name="firstName"
            onChange={onChange}
            value={formValues.firstName}
          />
          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            placeholder="Doe"
            type="text"
            name="lastName"
            onChange={onChange}
            value={formValues.lastName}
          />
          <label htmlFor="email">Email</label>
          <input
            id="email"
            label="Email"
            placeholder="janedoe@email.com"
            type="email"
            name="email"
            onChange={onChange}
            value={formValues.email}
          />
          <label htmlFor="dob">Date of Birth</label>
          <input
            id="dob"
            label="Date of Birth"
            type="date"
            name="dob"
            onChange={onChange}
            value={formValues.dob}
          />
        </form>
      </div>
    );
  }
};

export default SubscribeModal;
