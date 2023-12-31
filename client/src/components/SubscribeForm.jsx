/* eslint-disable react/prop-types */
const SubscribeForm = ({
  onChange,
  formValues,
  submit,
  subscribeMessage,
  promoMessage,
  status,
  errorMessage,
  toggleModalActive,
}) => {
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
      {status === "idle" && (
        <button className="primary-button subscribe-button" type="submit">
          Submit
        </button>
      )}
      {status === "loading" && <p>Sending...</p>}
      {status === "success" && (
        <div>
          <p className="success">{subscribeMessage}</p>
          <p className="promo">{promoMessage}</p>
          <button
            className="primary-button subscribe-button"
            onClick={toggleModalActive}
          >
            Close
          </button>
        </div>
      )}
      {status === "error" && <p className="error">{errorMessage}</p>}
    </form>
  );
};

export default SubscribeForm;
