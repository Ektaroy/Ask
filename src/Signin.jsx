

import Button from '@mui/material/Button';
import TextField from "@mui/material/TextField";
import { Card, Typography } from "@mui/material";
import { useState } from "react";
import axios from "axios";

import homemainbg from '../public/homemainbg.png';
// -------------------------------design-

import logo from '../public/hmainbg.svg';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import ButtonBase from '@mui/material/ButtonBase';



const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});



function Signin() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

  


return <div style={{ display: "flex", justifyContent: "center" }}>

    <Paper
        sx={{
            //  p: 2,
            margin: 'auto',
            flexGrow: 1,
            backgroundColor: (theme) =>
                theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        }}
    >


        <div style={{

               float: "left",
            display: "flex",
            flexdirection: "row",
            //    maxWidth:"50%"
        }}>


<div>
        <div style={{
            paddingTop: 150,
            paddingRight: 1000,
            marginBottom: 10,
            display: "flex",
            justifyContent: "center"
        }}>
            
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
       
            <Card varint={"outlined"} style={{ width: 400, padding: 20 }}>
            <Typography variant={"h6"} style={{ display: "flex", justifyContent: "center" }}>
                Welcome to Coursera. Sign up below
            </Typography>
                <TextField
                    onChange={(evant11) => {
                        let elemt = evant11.target;
                        setEmail(elemt.value);
                    }}
                    fullWidth={true}
                    label="Email"
                    variant="outlined"
                />
                <br /><br />
                <TextField
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                    fullWidth={true}
                    label="Password"
                    variant="outlined"
                    type={"password"}
                />
                <br /><br />

                <Button
                    size={"large"}
                    variant="contained"
                    onClick={async () => {
                        const res = await axios.post("https://ask-backend-livid.vercel.app/admin/login", {
                            username: email,
                            password: password
                        }, {
                            headers: {
                                "Content-type": "application/json"
                            }
                        });
                        const data = res.data;

                        localStorage.setItem("token", data.token);
                        window.location = "/courses"
                    }}

                > Signin</Button>
            </Card>
        </div>
    </div>
    <div>
                <img src={homemainbg} alt="Logo" />;
            </div>
        </div>



</Paper>

</div >

                }

export default Signin;
