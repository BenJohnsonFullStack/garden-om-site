/* eslint-disable react/prop-types */
function SubscribeModal(props) {
  const { modalActive, isModalActive } = props;

  if (modalActive === true) {
    return <>Hello World</>;
  }
}

export default SubscribeModal;
