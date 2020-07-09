import React, { Component } from "react";
import "./index.css";
export default class PostsCard extends React.Component {
    posts = [
        {
            name: "Shashwat Mishra",
            caption: "I got no chill",
        },
        {
            name: "logan Mishra",
            caption: "I got no chill",
        },
        {
            name: "yolo Mishra",
            caption: "I got no chill",
        },
        {
            name: "heyman Mishra",
            caption: "I got no chill",
        },
        {
            name: "mast Mishra",
            caption: "I got no chill",
        },
    ];

    render() {
        var post = this.posts.map((item) => {
            return (
                <div class="row">
                    <div class="col s12 m6">
                        <div class="card">
                            <div class="card-image">
                                <img src="https://materializecss.com/images/sample-1.jpg" />
                                <span class="card-title">{item.name}</span>
                                <a class="btn-floating halfway-fab waves-effect waves-light red">
                                    <i class="material-icons">add</i>
                                </a>
                            </div>
                            <div class="card-content">
                                <p>
                                    I am a very simple card. I am good at
                                    containing small bits of information. I am
                                    convenient because I require little markup
                                    to use effectively.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            );
        });
        return <div>{post}</div>;
    }
}
