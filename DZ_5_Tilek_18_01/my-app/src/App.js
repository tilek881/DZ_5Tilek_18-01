import './App.css';
import AboutUs from "./pages/CountPage/AboutUs";
import PortfolioPage from "./pages/porfolioPages/PortfolioPage";
import ContactsPage from "./pages/contactsPage/ContactsPage";


function App() {
    return (
        <div className="App">
            <AboutUs/>
            <PortfolioPage/>
            <ContactsPage/>
        </div>
    );
}

export default App;
