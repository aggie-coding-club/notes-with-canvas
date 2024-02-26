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
                <h1 className="taskboard-heading">Taskboard:</h1>
            </div>

            <div className="taskboard">
                <Card className="list-card">
                    <h2 className="list-heading">Todo List #1</h2>
                    <ul className="ul-list">
                        <li>Finish math homework</li>
                        <li>Fix car</li>
                        <li>Buy new car I guess</li>
                    </ul>
                    <form>  
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

                <Card className="list-card">
                    <h2 className="list-heading">Todo List #2</h2>
                    <form>  
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

