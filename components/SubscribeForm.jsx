/* eslint-disable react/prop-types */
const SubscribeForm = ({ onChange, formValues }) => {
  return (
    <form className="form-wrapper" method="dialog">
      <label htmlFor="firstName" className="form-field">
        First Name
        <input
          className="input-box"
          id="firstName"
          placeholder="Jane"
          type="text"
          name="firstName"
          onChange={onChange}
          value={formValues.firstName}
        />
      </label>
      <label htmlFor="lastName" className="form-field">
        Last Name
        <input
          className="input-box"
          id="lastName"
          placeholder="Doe"
          type="text"
          name="lastName"
          onChange={onChange}
          value={formValues.lastName}
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
      <button className="primary-button">Submit</button>
    </form>
  );
};

export default SubscribeForm;
