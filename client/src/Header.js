import React, { useContext } from "react";
import { AuthContext } from "./Auth/auth-Context";
export default function Header() {
    const auth = useContext(AuthContext);
    return (
        <div>
            <nav>
                <div class="nav-wrapper">
                    <a href="/" class="brand-logo">
                        <i class="large material-icons">tram</i>
                        Tripper
                    </a>

                    <ul id="nav-mobile" class="right hide-on-med-and-down">
                        <li>
                            <a href="/">Users</a>
                        </li>
                        <li>
                            <a href="/register">Auth</a>
                        </li>

                        {auth.isloggedIn && (
                            <li>
                                <a href="/newUser">New</a>
                            </li>
                        )}
                        {auth.isloggedIn && (
                            <li>
                                <a href="/posts">Posts</a>
                            </li>
                        )}
                        {auth.isloggedIn && (
                            <li>
                                <a href={auth.logout}>Logout</a>
                            </li>
                        )}
                    </ul>
                </div>
            </nav>
        </div>
    );
}
