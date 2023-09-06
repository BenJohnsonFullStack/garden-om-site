import axios from "axios";

/* eslint-disable react/prop-types */
const SubscribeForm = ({ onChange, formValues, submit }) => {
  return (
    <form className="form-wrapper" onSubmit={submit}>
      <label htmlFor="first_name" className="form-field">
        First Name
        <input
          className="input-box"
          id="first_name"
          placeholder="Jane"
          type="text"
          name="first_name"
          onChange={onChange}
          value={formValues.first_name}
        />
      </label>
      <label htmlFor="last_name" className="form-field">
        Last Name
        <input
          className="input-box"
          id="last_name"
          placeholder="Doe"
          type="text"
          name="last_name"
          onChange={onChange}
          value={formValues.last_name}
        />
      </label>
      <label htmlFor="email" className="form-field">
        Email
        <input
          className="input-box"
          id="email"
          label="Email"
          placeholder="janedoe@email.com"
          type="email"
          name="email"
          onChange={onChange}
          value={formValues.email}
        />
      </label>
      <label htmlFor="dob" className="form-field">
        Date of Birth
        <input
          className="input-box"
          id="dob"
          label="Date of Birth"
          type="date"
          name="dob"
          onChange={onChange}
          value={formValues.dob}
        />
      </label>
      <button className="primary-button subscribe-button">Submit</button>
    </form>
  );
};

export default SubscribeForm;
