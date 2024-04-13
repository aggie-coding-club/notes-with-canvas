import React, { useState } from 'react';
import { CardContent } from "@mui/material";
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import './Taskboard.css';

export default function Taskboard() {
    const [todoLists, setTodoLists] = useState([{ name: "Todo List #1", tasks: [], todo: "" }]);
    const [numLists, setNumLists] = useState(1);

    const handleSubmit = (e, listIndex) => {
        e.preventDefault(); 
        const updatedLists = [...todoLists];
        if (updatedLists[listIndex].todo.trim() !== "") {
            updatedLists[listIndex].tasks.push(updatedLists[listIndex].todo);
            updatedLists[listIndex].todo = ""; 
            setTodoLists(updatedLists);
        }
    };

    const handleInputChange = (e, listIndex) => {
        const updatedLists = [...todoLists];
        updatedLists[listIndex].todo = e.target.value;
        setTodoLists(updatedLists);
    };

    const addList = () => {
        const newListName = `Todo List #${numLists + 1}`;
        setTodoLists([...todoLists, { name: newListName, tasks: [], todo: "" }]);
        setNumLists(numLists + 1);
    };

    return (
        <>
            <div className="smaller-title">
                <h1 className="taskboard-heading">Taskboard:</h1>
            </div>
            <div className="add-list">
                <button onClick={addList}>Add List</button>
            </div>

            <div className="taskboard">
                {todoLists.map((list, index) => (
                    <Card key={index} className="list-card">
                        <h2 className="list-heading">{list.name}</h2>
                        <ul className="ul-list">
                            {list.tasks.map((task, taskIndex) => (
                                <li key={taskIndex}>{task}</li>
                            ))}
                        </ul>
                        <form onSubmit={(e) => handleSubmit(e, index)}>  
                            <CardContent className="list-content">
                                <TextField 
                                    type="text" 
                                    className="add-task" 
                                    value={list.todo} 
                                    onChange={(e) => handleInputChange(e, index)}
                                />
                                <button type="submit">add</button>
                            </CardContent>
                        </form>
                    </Card>
                ))}
            </div>
        </>
    );
}
