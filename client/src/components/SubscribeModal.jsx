import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import SubscribeForm from "./SubscribeForm";
import axios from "axios";
import { useLocalStorage } from "../hooks/useLocalStorage";

/* eslint-disable react/prop-types */
const SubscribeModal = ({ modalActive, toggleModalActive }) => {
  const [subscribeMessage, setSubscribeMessage] = useState("");
  const [promoMessage, setPromoMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [status, setStatus] = useState("idle");

  const initialValues = {
    first_name: "",
    last_name: "",
    email: "",
    dob: "",
  };

  const [formValues, setFormValues] = useLocalStorage(
    "subscribe",
    initialValues
  );

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const upperCaseFirstLetter = (word) => {
    const casedWord = word.charAt(0).toUpperCase() + word.slice(1);
    return casedWord;
  };

  const submit = (e) => {
    e.preventDefault();
    setStatus("loading");
    const first = upperCaseFirstLetter(formValues.first_name);
    const last = upperCaseFirstLetter(formValues.last_name);
    const newSubscriber = {
      first_name: first.trim(),
      last_name: last.trim(),
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
      .then(() => {
        setStatus("success");
      })
      .catch((err) => {
        setStatus("error");
        setErrorMessage(err.response.data.message);
      });
  };

  if (modalActive) {
    return (
      <div className="modal-wrapper">
        <div className="modal">
          <div className="modal-content">
            <FontAwesomeIcon
              icon={faX}
              onClick={toggleModalActive}
              className="subscribe-close"
            />
            <h3>Get the latest updates.</h3>
            <SubscribeForm
              onChange={onChange}
              formValues={formValues}
              submit={submit}
              subscribeMessage={subscribeMessage}
              promoMessage={promoMessage}
              status={status}
              errorMessage={errorMessage}
            />
          </div>
        </div>
      </div>
    );
  }
};

export default SubscribeModal;
