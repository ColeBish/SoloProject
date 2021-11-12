import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Form from '../components/Form';
import IdeaList from '../components/List';
import { Link } from '@reach/router'

const Main = () => {
    const [idea, setIdea] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/ideas')
            .then(res => {
                setIdea(res.data);
                setLoaded(true);
            });
    }, [])
    const removeFromDom = ideaId => {
        setIdea(idea.filter(idea => idea._id !== ideaId));
    }

    return (
        <div>
            <div className="toplist">
                <h1 className="space" style={{ color: "blue" }}><img id="img" src="https://www.nicepng.com/png/full/19-194173_joystick-clipart-ps4-controller-ps4-controller-drawing-cartoon.png"></img>Anonymous Game Idea's</h1>
                <Link to="/ideas/new">
                    <button id="newIdea" onClick={Form}>
                        Add Idea
                    </button>
                </Link>
                <p style={{ backgroundColor: "black", height: "4px" }}> </p>
            </div>

            {loaded && <IdeaList idea={idea} removeFromDom={removeFromDom} />}
        </div>
    );
}

export default Main;