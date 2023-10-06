const BookingWidget = () => {
  const iframeStyle = {
    width: "100%",
    height: "300vh",
    border: "none",
  };

  return (
    <iframe
      src="https://gardenomyoga.simplybook.me"
      title="Schedule Your Yoga Session with Garden Om"
      style={iframeStyle}
    ></iframe>
  );
};

export default BookingWidget;
