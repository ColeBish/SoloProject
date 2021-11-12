import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from '@reach/router'

const Detail = (props) => {
    const [idea, setIdea] = useState([])
    const [state, setState] = useState({
        clickCount: 0
    });

    const handleClick = () => {
        setState({
            clickCount: state.clickCount + 1
        });
    }

    useEffect(() => {
        axios.get("http://localhost:8000/api/ideas/" + props.id)
            .then(res => setIdea({
                ...res.data
            }))
    })


    return (
        <div>
            <div className="title"><h1>{idea.name}</h1></div>
            <div className="detail">
                <h3>About</h3>
                <p>Game Genre: {idea.genra}</p>
                <p>Game Idea: {idea.idea}</p>
                <Link to="/">
                    <button>
                        Homepage
                    </button>
                </Link>
                <button onClick={handleClick}>Like ({state.clickCount})</button>

            </div >
        </div>
    )
}
export default Detail;