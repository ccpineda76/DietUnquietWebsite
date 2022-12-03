import "./styles/ExerciseCreate.css";
import React, { useState, useEffect } from "react";
import CopyRecipeList from './JSON files/recipelistAll.json'
import './styles/RecipeCreate.css'
import { Link } from 'react-router-dom';
import db from './firebase.js';
import { collection, doc, setDoc, getDocs, connectFirestoreEmulator } from 'firebase/firestore';
import { setRef, tooltipClasses } from "@mui/material";


function ExerciseCreate(props) {
    const [message, setmessage] = useState("")
    const [imagelink, setimagelink] = useState("");
    const [tools, settools] = useState("");
    const [name, setname] = useState("");
    const [instructions, setinstructions] = useState("");
    const [tool_list, settool_list] = useState([]);
    const addTool = () => {
        if (!tools.trim().length || !tools) {
            alert("Please do not leave only whitespace or an empty value");
            return;
        }
        settool_list((prevArray => [...prevArray, tools]));
        settools('');
    }

    const SubmitExercise = async (event) => {
        event.preventDefault();
        if ((imagelink.trim().length || !imagelink) || (name.trim().length || !name)(instructions.trim().length || !instructions)) {
            setmessage("SUBMISSION DENIED: All fields must be filled.  If you do not require a tool for this, then you may leave it empty");
        }
        // addNewExercise();
        setmessage('');
        setimagelink('');
        settools([]);
        setname('');
        setinstructions('');
        alert("Your exercise is now in your database")
    }

    async function addNewExercise() {
        let exercise_value = props.exercise_data;
        let object = {
            Name: name,
            ToolS: tools,
            imgE: imagelink,
            Instructions: instructions,
        }
        exercise_value.push(object);
        try {
            await setDoc(doc(db, "Exercises", "ExerciseArray"), {
                Exercises: exercise_value
            });
        }
        catch (error) {
            console.log(error.code + error.message);
            alert(error.message);
        }
        props.setexercise_data(exercise_value)
    }

    const deleteTool = (index) => {
        let new_array = [];
        for (let i = 0; i < tool_list.length; i++) {
            if (i === index) {
                continue;
            }
            else {
                new_array.push(tool_list[i]);
            }
        }
        settool_list(new_array);
    }
    return (
        <div className="exercisepage">
            <div className="entirepage">

                <form className="container mt-5 mb-5 d-flex justify-content-center" onSubmit={SubmitExercise}>
                    <div>
                        <label className="exercise-name">Exercise Name
                            <input className="name-box" type="text" placeholder="Name of Exercise" value={name} onChange={(e) => setname(e.target.value)}></input>
                        </label><br />
                        <label className="image-ex">Image Link for Exercise
                            <input className="imagebox-ex" type='text' placeholder="Image Link" value={imagelink} onChange={(e) => setimagelink(e.target.value)}></input>
                        </label><br />
                        <label>Tools
                            <input placeholder="Tools" className="tool-box" type='text' value={tools} onChange={(e) => settools(e.target.value)}></input>
                        </label>
                        <button type='button' className="tool-button" onClick={addTool}>Add tool</button>
                        <label> Instructions
                            <textarea className="text-input" type='text' value={instructions} placeholder="Instructions" onChange={(e) => setinstructions(e.target.value)}></textarea>
                        </label><br />
                        <button className="submit-exercise">Submit Exercise</button>
                    </div>
                </form>
                <form>
                    <div className="tools-display">
                        <h4 className="tools-header">Tools</h4>
                        <ul> 
                            {
                                tool_list.map((tags, index) => {
                                    return (
                                        <div>
                                            <li key={index}>{tags}
                                                <button type='button' className="close" onClick={() => deleteTool(index)}>x</button>
                                            </li>
                                        </div>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </form>
                <div className="restriction">
                    {message}
                </div>
            </div>
        </div>
    );
}


export default ExerciseCreate