import "./App.css";
import Header from "./Components/Header/Header";
import Section from "./Components/Section/Section";
import Footer from "./Components/Footer/Footer";

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
