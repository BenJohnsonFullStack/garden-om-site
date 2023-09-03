/* eslint-disable react/prop-types */
const SubscribeForm = ({ onChange, formValues }) => {
  return (
    <form className="form-wrapper" method="dialog">
      <label htmlFor="firstName" className="form-field">
        First Name
        <input
          id="firstName"
          placeholder="Jane"
          type="text"
          name="firstName"
          onChange={onChange}
          value={formValues.firstName}
        />
      </label>
      <label htmlFor="lastName">
        Last Name
        <input
          id="lastName"
          placeholder="Doe"
          type="text"
          name="lastName"
          onChange={onChange}
          value={formValues.lastName}
        />
      </label>
      <label htmlFor="email">
        Email
        <input
          id="email"
          label="Email"
          placeholder="janedoe@email.com"
          type="email"
          name="email"
          onChange={onChange}
          value={formValues.email}
        />
      </label>
      <label htmlFor="dob">
        Date of Birth
        <input
          id="dob"
          label="Date of Birth"
          type="date"
          name="dob"
          onChange={onChange}
          value={formValues.dob}
        />
      </label>
      <button className="subscribe-submit">Submit</button>
    </form>
  );
};

export default SubscribeForm;
