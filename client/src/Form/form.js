import React from "react";
import _ from "lodash/fp";
import { useForm } from "react-hook-form";

import "./styling.css";

export default function Form() {
    const { register, handleSubmit, watch, errors } = useForm();

    const onSubmit = (data) => {
        alert(JSON.stringify(data));
    }; // your form submit function which will invoke after successful validation

    console.log(watch("example")); // you can watch individual input by pass the name of the input

    return (
        //         <form onSubmit={handleSubmit(onSubmit)}>
        //             const {(register, handleSubmit, errors)} = useForm();
        // const onSubmit = data => console.log(data); console.log(errors); return (
        //         <form onSubmit={handleSubmit(onSubmit)}>
        //             const { register, handleSubmit, errors } = useForm();
        //   const onSubmit = data => console.log(data);
        //   console.log(errors);

        //   return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input
                type="text"
                placeholder="Username"
                name="Username"
                ref={register({ required: true, maxLength: 80 })}
            />
            <input
                type="email"
                placeholder="Email"
                name="Email"
                ref={register({ required: true, pattern: /^\S+@\S+$/i })}
            />
            <input
                type="text"
                placeholder="Password"
                name="Password"
                ref={register({ required: true, min: 4, maxLength: 25 })}
            />

            <input type="submit" />
        </form>
    );
}
