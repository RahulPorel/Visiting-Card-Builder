
export default function Editor() {
  return (
    <div className="form-container">
      <form className="form">
        
        <input
          type="text"
          placeholder="Your Name"
          className="form--input"
          name="name"
        />
        <input
          type="text"
          placeholder="Your Proffession"
          className="form--input"
          name="Proffession"
        />

        <input
          type="email"
          placeholder="Email address"
          className="form--input"
          name="email"
        />
        <input
          type="text"
          placeholder="Contact Number"
          className="form--input"
          name="number"
        />
        <input
          type="text"
          placeholder="Bussieness website url"
          className="form--input"
          name="website"
        />
      </form>
    </div>
  );
}
