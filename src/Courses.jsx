import { Button, Card, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom";

function Courses() {
    const [courses, setCourses] = useState([]);
    
    useEffect(() => {
        function callback2(data) {
            setCourses(data.courses);
        }
        function callback1(res) {
            res.json().then(callback2)
        }
        fetch("https://ask-backend-livid.vercel.app/admin/courses/", {
            method: "GET",
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("token")
            }
        }).then(callback1)
    }, []);

    return <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
        {courses.map(course => {
            return <Course course={course} />}
        )}
    </div>
}

export function Course({course}) {
    const navigate = useNavigate();

    return <Card style={{
        margin: 10,
        width: 1000,
        minHeight: 200,
        padding: 20
    }}>
        <Typography textAlign={"center"} variant="h5">{course.title}</Typography>
        <Typography textAlign={"center"} variant="subtitle1">{course.description}</Typography>
        <img src={course.imageLink} style={{width: 300}} ></img>
        <div style={{display: "flex", justifyContent: "center", marginTop: 20}}>
        <Button
                            variant={"contained"}
                            style={{ marginRight: 60, width: 100, height: 40, boxShadow: 3, 
                               
    marginTop: 15,
    
                                background: "linear-gradient(to right bottom, #FF69B4, #FFC0CB)" }}
                      onClick={() => {
                navigate("/course/" + course._id);
            }}>Edit</Button>
        </div>
    </Card>

}



export default Courses;
