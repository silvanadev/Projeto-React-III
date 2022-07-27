import "./capitulo.css"

function Capitulo(props) {
  return (
    <div className="capitulo-container">
        <h2 className="title">{props.title}</h2>
        <img 
            className="image" 
            src={props.image}
            alt={props.alt}
        />
        <div className="text-container">
            <p className='texto'>{props.text}</p>
        </div>
    </div>
  );
}

export default Capitulo