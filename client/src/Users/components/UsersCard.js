import React from "react";
import "./index.css";
export default function UsersCard() {
    return (
        <div>
            <div class="card small">
                <div class="card-image waves-effect waves-block waves-light">
                    <img
                        class="activator"
                        src="https://materializecss.com/images/office.jpg"
                    />
                </div>
                <div class="card-content">
                    <span class="card-title activator grey-text text-darken-4">
                        Card Title<i class="material-icons right">more_vert</i>
                    </span>
                    <p>
                        <a href="#">Visit Profile</a>
                    </p>
                </div>
                <div class="card-reveal">
                    <span class="card-title grey-text text-darken-4">
                        Card Title<i class="material-icons right">close</i>
                    </span>
                    <p>
                        Here is some more information about this product that is
                        only revealed once clicked on.
                    </p>
                </div>
            </div>
        </div>
    );
}
