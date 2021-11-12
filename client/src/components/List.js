import React from 'react'
import axios from 'axios';
import { Link } from '@reach/router'

const IdeaList = (props) => {
    const { removeFromDom } = props;
    const deleteIdea = (ideaId) => {
        axios.delete('http://localhost:8000/api/ideas/' + ideaId)
            .then(res => {
                removeFromDom(ideaId)
            })
    }
    return (
        <div>
            {props.idea.map((idea, idx) => {
                return <h4 className="ideas" key={idx}>
                    <Link to={`/ideas/${idea._id}`} style={{ color: "blue" }}>{idea.name} </Link>,
                    <Link to={"/ideas/" + idea._id + "/edit"}>
                        <button>
                            Edit
                        </button>
                    </Link>
                    <button onClick={(e) => { deleteIdea(idea._id) }}>Delete</button>

                </h4>
            })}
        </div>
    )
}
export default IdeaList;