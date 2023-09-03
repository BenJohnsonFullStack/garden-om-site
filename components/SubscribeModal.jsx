import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import SubscribeForm from "./SubscribeForm";

/* eslint-disable react/prop-types */
const SubscribeModal = ({ modalActive, isModalActive }) => {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    dob: "",
  };

  const [formValues, setFormValues] = useState(initialValues);

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  if (modalActive) {
    return (
      <div className="modal">
        <h4>Get the latest updates.</h4>
        <FontAwesomeIcon
          icon={faX}
          onClick={isModalActive}
          className="menu-icon"
        />
        <SubscribeForm onChange={onChange} formValues={formValues} />
      </div>
    );
  }
};

export default SubscribeModal;
