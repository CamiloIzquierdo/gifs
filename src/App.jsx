import "./App.css";
import Switch from "react-switch";
import { Route, Link } from "wouter";
import Home from "./pages/Home/Home";
import SearchResults from "./pages/SearchResults/SearchResults";
import StaticContext from "./context/StaticContext";
import Detail from "./pages/detail/Detail";
import { GifsContextProvider } from "./context/GifsContext";
import { useState } from "react";

function App() {
    const [checked, setChecked] = useState(false);
    const handleChange = (nextChecked) => {
        setChecked(nextChecked);
    };

    return (
        <StaticContext.Provider value={2}>
            <div className="App">
                <section className={`App-content ${checked ? "dark" : ""}`}>
                    <Switch
                        onChange={handleChange}
                        checked={checked}
                        className="react-switch"
                    />
                    <Link to="/">APP</Link>
                    <GifsContextProvider>
                        <Route component={Home} path="/" />
                        <Route component={Detail} path="/gif/:id" />
                        <Route
                            component={SearchResults}
                            path="/search/:keyword"
                        />
                    </GifsContextProvider>
                </section>
            </div>
        </StaticContext.Provider>
    );
}

export default App;
