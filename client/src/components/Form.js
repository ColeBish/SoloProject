import axios from "axios";
import React, { useState } from "react";
import { Link } from '@reach/router'
import Main from "../views/View";



function Form() {
    const [name, setName] = useState("");
    const [genra, setGenra] = useState("");
    const [idea, setIdea] = useState("");
    const [errors, setErrors] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newIdea = {
            name,
            genra,
            idea,
        };
        axios.post("http://localhost:8000/api/ideas", newIdea)
            .then((Response) => console.log(Response))
            .catch(err => {
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
            })

    }
    return (
        <div>
            <h2 style={{ color: "blue" }}>Game Idea's</h2>
            <form onSubmit={handleSubmit} className="form">
                {errors.map((err, index) => <p key={index}>{err}</p>)}
                <div>
                    <p>Game Name</p>
                    <input
                        type="text"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    >
                    </input>
                </div>
                <div>
                    <p>Genra </p>
                    <input
                        type="text"
                        onChange={(e) => setGenra(e.target.value)}
                        value={genra}
                    >
                    </input>
                </div>
                <div>
                    <p>Idea </p>
                    <input
                        type="text"
                        onChange={(e) => setIdea(e.target.value)}
                        value={idea}
                    >
                    </input>
                </div>
                <button type="submit">
                    Submit Idea
                </button>
                <Link to="/">
                    <button className="" onClick={Main}>
                        Homepage
                    </button>
                </Link>
            </form>

        </div>
    );
}

export default Form;