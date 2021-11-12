import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from '@reach/router'
import Main from './View';

const Update = (props) => {
    const { id } = props;
    const [name, setName] = useState("");
    const [genra, setGenra] = useState("");
    const [idea, setIdea] = useState("");

    useEffect(() => {

        axios.get('http://localhost:8000/api/ideas/' + id)
            .then(res => {
                setName(res.data.name);
                setGenra(res.data.genra);
                setIdea(res.data.idea);
            })
    }, [])
    const updateIdea = (e) => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/ideas/' + id, {
            name,
            genra,
            idea
        })
            .then(res => console.log(res));
    }
    return (
        <div className="update">
            <h1>Update an Idea</h1>
            <form onSubmit={updateIdea}>
                <p>
                    <label> Game Name</label><br />
                    <input type="text"
                        name="name"
                        value={name}
                        onChange={(e) => { setName(e.target.value) }} />
                </p>
                <p>
                    <label>Genra</label><br />
                    <input type="text"
                        name="genra"
                        value={genra}
                        onChange={(e) => { setGenra(e.target.value) }} />
                </p>
                <p>
                    <label>Idea</label><br />
                    <input type="text"
                        name="idea"
                        value={idea}
                        onChange={(e) => { setIdea(e.target.value) }} />
                </p>
                <button type="submit">Submit</button>
                <Link to="/">
                    <button className="" onClick={Main}>
                        Homepage
                    </button>
                </Link>
            </form>

        </div>
    )
}
export default Update;