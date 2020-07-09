import React from "react";

export default function Header() {
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
                            <a href="sass.html">Users</a>
                        </li>
                        <li>
                            <a href="/newUser">Auth</a>
                        </li>
                        <li>
                            <a href="/register">New</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}
