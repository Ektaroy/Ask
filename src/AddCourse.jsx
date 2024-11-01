import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {Card} from "@mui/material";
import {useState} from "react";
import axios from "axios";

function AddCourse() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [price, setPrice] = useState(0)

    return <div style={{display: "flex", justifyContent: "center", minHeight: "5vh", justifyContent: "center"}}>
        <div style={{display: "flex", justifyContent: "center"}}>
            <Card varint={"outlined"} style={{width: 800, padding: 20, marginTop: 30, height: "50%"}}>
                <TextField
                    // style={{marginBottom: 10}}
                    onChange={(e) => {
                        setTitle(e.target.value)
                    }}
                    fullWidth={true}
                    label="Ask Your Doubt"
                    variant="outlined"
                />


                
            </Card>
            <Card  style={{width: 100, padding: 20, border: "none", boxShadow: "none",marginTop: 30, height: "50%"}}>
                

            <Button
                            variant={"contained"}
                            style={{ width: 100, height: 40, boxShadow: 3, 
                               
 
    
                                background: 'linear-gradient(to right bottom, #4C0AA3,#9747FF)' }}
                      
                    onClick={async () => {
                        await axios.post("https://ask-backend-livid.vercel.app/admin/courses", {
                            title: title,
                                description: description,
                                imageLink: image,
                                published: true,
                                price
                        }, {
                            headers: {
                                "Authorization": "Bearer " + localStorage.getItem("token")
                            }
                        });
                        alert("Added course!");
                    }}
                > Post</Button>
            </Card>
        </div>
    </div>
}

export default AddCourse;
