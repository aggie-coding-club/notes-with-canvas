import { CardContent } from "@mui/material";
import "./Taskboard.css";
import {useState} from "react";
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';

export default function Taskboard() { 
    const [todo, setTodo] = useState("");

    return(
        <>
            <div className="smaller-title">
                <h1 className="taskboard-heading">your taskboard:</h1>
            </div>

            <div className="taskboard">
                <Card className="list-card">
                    <form>
                        To-Do List #1
                        <CardContent className="list-content">
                            {todo}
                            <div>
                                <TextField type="text" className="add-task" onChange={(e) => setTodo(e.target.value)}>
                                    
                                </TextField>
                                <button type="submit">add</button>
                            </div>
                        </CardContent>
                    </form>
                </Card>
                
            </div>
        </>
    );
}

