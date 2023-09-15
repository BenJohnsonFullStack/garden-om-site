const validateSubscriber = (req, res, next) => {
  const { first_name, last_name, email } = req.body;
  if (
    !first_name ||
    typeof first_name !== "string" ||
    first_name.length < 2 ||
    first_name.length > 128
  ) {
    next({ status: 422, message: "Please enter your first name" });
  } else if (
    !last_name ||
    typeof last_name !== "string" ||
    last_name.length < 2 ||
    first_name.length > 128
  ) {
    next({ status: 422, message: "Please enter your last name" });
  } else if (!email || typeof email !== "string") {
    next({ status: 422, message: "Please enter a valid email address" });
  } else {
    next();
  }
};

module.exports = {
  validateSubscriber,
};
