import data from './components/Data/etsy.json'
import Listing from "./components/Listing/Listing.tsx";

function App() {
    return (
        <Listing items={data}></Listing>
    );
}

export default App
