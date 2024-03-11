export default function Card(props) {
  return (
    <div className="center-container">
      <div className="inner-card-container">
        <div className="bizzy-card-container">
          <div className="biz-card-a">
            <div className="biz-headshot biz-pic-drew">
              <div className="biz-words-container">
                <div className="biz-name">{props.form.name}</div>
                <div className="biz-title">{props.form.proffession}</div>
              </div>
            </div>
          </div>

          <div className="biz-card-b">
            <div className="biz-shape">
              <div className="biz-contact-box">
                <div className="biz-email">
                  <a href="mailto:drew@drewgoff.com">{props.form.email}</a>
                </div>

                <div className="biz-cell">
                  <a href="tel:317-910-5607">{props.form.phone_no}</a>
                </div>

                <div className="biz-portfolio">
                  <a target="_blank" href={props.form.website}>
                    {props.form.website}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <button>Load Example</button>
        </div>
      </div>
    </div>
  );
}
