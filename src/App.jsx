import "./App.css";
import Header from "./Components/Header";
import Section from "./Components/Section";
import Footer from "./Components/Footer";

function App() {
    return (
        <>
            <Header title1="Mi pagina web" show = {true}>
                <h3>Este es el header (soy un children h3)</h3>
            </Header>
            <Section />
            <Footer />
        </>
    );
}

export default App;
