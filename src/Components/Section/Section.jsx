
import "./section.css"

let frutas = [ 'Mnazana', 'Banana', 'Melon' ]

const Section = ({ title }) => {
    return(
        <section className="section">

            <h3>{title}</h3>

            <ul>
                {
                    frutas.map( (fruta, index) => {
                        return <li key={index}>{ fruta }</li>
                    })
                }
            </ul>

        </section>
    )
}

export default Section