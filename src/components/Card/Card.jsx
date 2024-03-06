
export default function Card(props) {
  return (
    <>
      <div style={{marginTop: props.mt}} className="card__container">
        <div className="card__upper">
          <p className="card__count">{props.num}</p>
          <img className="arrow_light" src="./arrow_light.svg" alt="" />
          <img className="arrow_black" src="./arrow_black.svg" alt="" />
        </div>
        <span className="card__abrev">{props.abrev}</span>
        <div className="card__lower">
          <h2 className="card__title">{props.title}</h2>
          <p className="card__desc">{props.desc}</p>
        </div>
      </div>
    </>
  );
}