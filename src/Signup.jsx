import Button from '@mui/material/Button';
import TextField from "@mui/material/TextField";
import { Card, Typography } from "@mui/material";
import { useState } from "react";
import axios from "axios";


import homemainbg from '../public/homemainbg.png';
// -------------------------------design-

import Logo from '../public/hmainbg.svg';
// import Logo from '../public/Logo.png';
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


function Signup() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [year, setYear] = useState("")
    const [branch, setBranch] = useState("")


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

            //    float: "left",
            display: "flex",
            flexdirection: "row"
            //    maxWidth:"50%"
        }}>
           <div>
                <img src={Logo} style={{

width: "550px"

}} alt="Logo" />;
            </div>
            <div style={{
                paddingTop: "10%",
                paddingLeft: "10%"
            }} >
                <div>
        <div style={{
            // paddingTop: 150,
            marginBottom: 10,
            display: "flex",
            justifyContent: "center"
        }}>
            <Typography variant={"h6"}>
                Welcome to Coursera. Sign up below
            </Typography>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
            <Card varint={"outlined"} style={{ width: 400, padding: 20 }}>
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
                    onChange={(evant11) => {
                        let elemt = evant11.target;
                        setName(elemt.value);
                    }}
                    fullWidth={true}
                    label="Name"
                    variant="outlined"
                />
                <br /><br />
                <TextField
                    onChange={(evant11) => {
                        let elemt = evant11.target;
                        setYear(elemt.value);
                    }}
                    fullWidth={true}
                    label="year"
                    variant="outlined"
                />
                <br /><br />
                <TextField
                    onChange={(e) => {
                        setBranch(e.target.value);
                    }}
                    fullWidth={true}
                    label="Branch"
                    variant="outlined"
                    type={"password"}
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
                        const response = await axios.post("https://ask-backend-livid.vercel.app/admin/signup", {
                            username: email,
                            name: name,
                            year: year,
                            branch: branch,
                            password: password
                        })
                        let data = response.data;
                        localStorage.setItem("token", data.token);
                        window.location = "/"
                    }}

                > Signup</Button>
            </Card>
        </div>
    </div>
            </div>

        </div>



    </Paper>
    
</div >



}

// ----------------------------design----

    // return <div>
    //     <div style={{
    //         paddingTop: 150,
    //         marginBottom: 10,
    //         display: "flex",
    //         justifyContent: "center"
    //     }}>
    //         <Typography variant={"h6"}>
    //             Welcome to Coursera. Sign up below
    //         </Typography>
    //     </div>
    //     <div style={{ display: "flex", justifyContent: "center" }}>
    //         <Card varint={"outlined"} style={{ width: 400, padding: 20 }}>
    //             <TextField
    //                 onChange={(evant11) => {
    //                     let elemt = evant11.target;
    //                     setEmail(elemt.value);
    //                 }}
    //                 fullWidth={true}
    //                 label="Email"
    //                 variant="outlined"
    //             />
    //             <br /><br />
    //             <TextField
    //                 onChange={(evant11) => {
    //                     let elemt = evant11.target;
    //                     setName(elemt.value);
    //                 }}
    //                 fullWidth={true}
    //                 label="Name"
    //                 variant="outlined"
    //             />
    //             <br /><br />
    //             <TextField
    //                 onChange={(evant11) => {
    //                     let elemt = evant11.target;
    //                     setYear(elemt.value);
    //                 }}
    //                 fullWidth={true}
    //                 label="year"
    //                 variant="outlined"
    //             />
    //             <br /><br />
    //             <TextField
    //                 onChange={(e) => {
    //                     setBranch(e.target.value);
    //                 }}
    //                 fullWidth={true}
    //                 label="Branch"
    //                 variant="outlined"
    //                 type={"password"}
    //             />
    //             <br /><br />
    //             <TextField
    //                 onChange={(e) => {
    //                     setPassword(e.target.value);
    //                 }}
    //                 fullWidth={true}
    //                 label="Password"
    //                 variant="outlined"
    //                 type={"password"}
    //             />
    //             <br /><br />

    //             <Button
    //                 size={"large"}
    //                 variant="contained"
    //                 onClick={async () => {
    //                     const response = await axios.post("http://localhost:3000/admin/signup", {
    //                         username: email,
    //                         name: name,
    //                         year: year,
    //                         branch: branch,
    //                         password: password
    //                     })
    //                     let data = response.data;
    //                     localStorage.setItem("token", data.token);
    //                     window.location = "/"
    //                 }}

    //             > Signup</Button>
    //         </Card>
    //     </div>
    // </div>


export default Signup;
