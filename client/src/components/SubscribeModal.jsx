import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import SubscribeForm from "./SubscribeForm";
import axios from "axios";

/* eslint-disable react/prop-types */
const SubscribeModal = ({ modalActive, isModalActive }) => {
  const [subscribeMessage, setSubscribeMessage] = useState("");
  const [promoMessage, setPromoMessage] = useState("");

  const initialValues = {
    first_name: "",
    last_name: "",
    email: "",
    dob: "",
  };

  const [formValues, setFormValues] = useState(initialValues);

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const submit = (e) => {
    e.preventDefault();
    const newSubscriber = {
      first_name: formValues.first_name.trim(),
      last_name: formValues.last_name.trim(),
      email: formValues.email.trim(),
      dob: formValues.dob,
    };
    axios
      .post("/api/subscribers", newSubscriber)
      .then((res) => {
        setSubscribeMessage(res.data.message);
        setPromoMessage(res.data.promo);
        setFormValues(initialValues);
      })
      .catch((err) => {
        console.error(err);
      });
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
            <SubscribeForm
              onChange={onChange}
              formValues={formValues}
              submit={submit}
              subscribeMessage={subscribeMessage}
              promoMessage={promoMessage}
            />
          </div>
        </div>
      </div>
    );
  }
};

export default SubscribeModal;
