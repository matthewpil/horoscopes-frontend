import "./modal.css";

export default function ModalPopUp(props) {
  const addPastHoroscopes = [];

  if (!props.showModal) {
    return null;
  }
  const pastHoroscopes = props.pastHoroscopes;

  for (let i = 0; i < pastHoroscopes.length; i++) {
    const displayPastHoroscope = (
      <section className="past-horoscope">
        <p>{pastHoroscopes[i]}</p>
      </section>
    );

    addPastHoroscopes.push(displayPastHoroscope);
  }
  return (
    <section className="modal-container">
      <section className="modal-container-body">
        <section className="modal-container-header">
          <h1>My Past Horoscopes</h1>
        </section>
        <section className="modal-container-content">
          {addPastHoroscopes}
        </section>
        <section className="modal-container-footer">
          <button onClick={props.closeModal}>Close</button>
        </section>
      </section>
    </section>
  );
}
