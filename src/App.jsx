import {BrowserRouter, Route, Routes} from "react-router-dom";
import "./App.css";
import Auth from "./Auth";
import DetailsPage from "./DetailsPage";

function App() {
    return (
        <>
            <div>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Auth />}></Route>
                        <Route path="/DetailsPage" element={<DetailsPage />}></Route>
                    </Routes>
                </BrowserRouter>
            </div>
        </>
    );
}

export default App;
