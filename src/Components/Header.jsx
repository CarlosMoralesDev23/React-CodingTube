import './Header.css';
import PropTypes from 'prop-types';

const Header = ({ children, title1, title2, show, show2}) => {
    return (
        <header className="header">
            <h1 className="title">{title1 || "No se recibio titúlo"}</h1>

            <h2 className="title">
                {title2 ||
                    "No se recibio titúlo h2 (puedo ser un titulo por defecto)"}
            </h2>

            {children}

            {show ? <p>Me muestro si show es True</p>: 
                <p>Me muestro si SHOW is FALSE</p>
            }

            {show2 && <p>Me muestro si show2 es True</p>
            }
            {/* esto es igual a que el ternario devolviera null sino se cumple la primera condición */}
        </header>
    );
}


Header.prototype = {
    children: PropTypes.node,
    title: PropTypes.string,
}


export default Header