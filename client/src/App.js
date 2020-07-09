import React, { useState, useCallback } from "react";
import "./App.css";
import Header from "./Header";
import Card from "./Users/components/UsersCard";
import Post from "./Posts/components/PostsCard";
import Form from "./Form/form";
import Newpost from "./Form/Newpost/Newpost";
import { AuthContext } from "./Auth/auth-Context";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
    const [isloggedIn, setisloggedIn] = useState(false);

    const login = useCallback(() => {
        setisloggedIn(true);
    }, []);
    const logout = useCallback(() => {
        setisloggedIn(false);
    }, []);
    return (
        <AuthContext.Provider
            value={{
                isloggedIn: isloggedIn,
                login: login,
                logout: logout,
            }}
        >
            <Router>
                <div className="App">
                    <Header />
                    <Route path="/" exact>
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </Route>

                    <Route path="/posts" exact>
                        <Post />
                    </Route>
                    <Route path="/newUser" exact>
                        <Newpost />
                    </Route>
                    <Route path="/register" exact>
                        <Form />
                    </Route>
                </div>
            </Router>
        </AuthContext.Provider>
    );
}

export default App;
