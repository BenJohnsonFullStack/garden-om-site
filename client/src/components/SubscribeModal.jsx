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
      <div className="modal-wrapper">
        <div className="modal">
          <div className="modal-content">
            <FontAwesomeIcon
              icon={faX}
              onClick={isModalActive}
              className="subscribe-close"
            />
            <h3>Get the latest updates.</h3>
            <SubscribeForm onChange={onChange} formValues={formValues} />
          </div>
        </div>
      </div>
    );
  }
};

export default SubscribeModal;
