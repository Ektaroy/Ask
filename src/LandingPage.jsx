import Button from '@mui/material/Button';
import TextField from "@mui/material/TextField";
import { Card, Typography } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import homemainbg from '../public/homemainbg.png';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import ButtonBase from '@mui/material/ButtonBase';
import Appbar from './Appbar';
// import logo from '../public/Logo.png';

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '50%',
    maxHeight: '90%',
});


function LandingPage() {


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
               
                <div style={{

   width: "550px"

}}>
                <img src={homemainbg} style={{

width: "550px"

}} alt="Logo" />;
            </div>
                <div style={{
                    paddingTop: "10%",
                    paddingLeft: "10%"
                }} >
                    <div
                    >
                        <Typography style={{ color: "#3C097D", fontSize: "3rem", fontWeight: "600",
                             
                               
                            
                              
                                lineHeight:"1",
                                paddingTop: "9%"
                         }} >
                            Welcome to
                            <br />
                            Ask Your Seniors
                        </Typography>
                    </div>
                    <div>
                        <Typography style={{ color: "#4C0AA3", fontSize: "1.5rem", fontWeight: "300"
                            
                         }} >
                            One place for all your queries
                        </Typography>
                    </div>
                </div>

            </div>



        </Paper>
        
    </div >



}

export default LandingPage;
// ----------------------------------------------------------
// Appbar

// import {Typography} from "@mui/material";
// import Button from "@mui/material/Button";
// import { useEffect, useState } from "react";
// import {useNavigate} from "react-router-dom";
// // import { ReactComponent as Logo } from 'public\Logo.png';


// import logo from '../public/Logo.png';
// function Appbar() {
//     const navigate = useNavigate()
//     const [userEmail, setUserEmail] = useState(null);

//     useEffect(() => {
//         function callback2(data) {
//             if (data.username) {
//                 setUserEmail(data.username)
//             }
//         }
//         function callback1(res) {
//             res.json().then(callback2)
//         }
//         console.log("token - " + localStorage.getItem("token"));
//         fetch("http://localhost:3000/admin/me", {
//             method: "GET",
//             headers: {
//                 "Authorization": "Bearer " + localStorage.getItem("token")
//             }
//         }).then(callback1)
//     }, []);

//     if (userEmail) {
//         return <div style={{
//             display: "flex",
//             justifyContent: "space-between",
//             padding: 4,
//             zIndex: 1
//         }}>
//             <div>
//             <img src={require('.public/Logo.png')} />
//             {/* <img src="public\Logo.png" /> */}
//     </div>
    
//             <div style={{display: "flex"}}>
//                 <div style={{marginRight: 10, display: "flex"}}>
//                 <div style={{marginRight: 10}}>
//                         <Button
//                             onClick={() => {
//                                 navigate("/ask")
//                             }}
//                         >Ask Your Doubt</Button>
//                     </div>

//                     <div style={{marginRight: 10}}>
//                         <Button
//                             onClick={() => {
//                                 navigate("/courses")
//                             }}
//                         >Leader Board</Button>
//                     </div>

//                     <Button
//                         variant={"contained"}
//                         onClick={() => {
//                             localStorage.setItem("token", null);
//                             window.location = "/";
//                         }}
//                     >Logout</Button>
//                 </div>
//             </div>
//         </div>
//     } else {
//         return <div style={{
//             display: "flex",
//             justifyContent: "space-between",
//             padding: 4,
//             zIndex: 1
//         }}>
//             <div >
//             {/* <Img alt="complex" src="public\Logo.png" /> */}
//             </div>
    
//             <div style={{display: "flex"}}>
//                 <div style={{marginRight: 10}}>
//                     <Button
//                         variant={"contained"}
//                         onClick={() => {
//                             navigate("/signup")
//                         }}
//                     >Signup</Button>
//                 </div>
//                 <div>
//                     <Button
//                         variant={"contained"}
//                         onClick={() => {
//                             navigate("/signin")
//                         }}
//                     >Signin</Button>
//                 </div>
//             </div>
//         </div>
//     }
// }

// export default Appbar;

// ----------------------------------------------------------------
// signup

// function Signup() {
//     const [email, setEmail] = useState("")
//     const [password, setPassword] = useState("")
//     const [name, setName] = useState("")
//     const [year, setYear] = useState("")
//     const [Branch, setBranch] = useState("")

//     return <div>
//         <div style={{
//             paddingTop: 150,
//             marginBottom: 10,
//             display: "flex",
//             justifyContent: "center"
//         }}>
//             <Typography variant={"h6"}>
//                 Welcome to Coursera. Sign up below
//             </Typography>
//         </div>
//         <div style={{ display: "flex", justifyContent: "center" }}>
//             <Card varint={"outlined"} style={{ width: 400, padding: 20 }}>
//                 <TextField
//                     onChange={(evant11) => {
//                         let elemt = evant11.target;
//                         setEmail(elemt.value);
//                     }}
//                     fullWidth={true}
//                     label="Email"
//                     variant="outlined"
//                 />
//                 <br /><br />
//                 <TextField
//                     onChange={(evant11) => {
//                         let elemt = evant11.target;
//                         setName(elemt.value);
//                     }}
//                     fullWidth={true}
//                     label="Name"
//                     variant="outlined"
//                 />
//                 <br /><br />
//                 <TextField
//                     onChange={(evant11) => {
//                         let elemt = evant11.target;
//                         setYear(elemt.value);
//                     }}
//                     fullWidth={true}
//                     label="year"
//                     variant="outlined"
//                 />
//                 <br /><br />
//                 <TextField
//                     onChange={(e) => {
//                         setBranch(e.target.value);
//                     }}
//                     fullWidth={true}
//                     label="Branch"
//                     variant="outlined"
//                     type={"password"}
//                 />
//                 <br /><br />
//                 <TextField
//                     onChange={(e) => {
//                         setPassword(e.target.value);
//                     }}
//                     fullWidth={true}
//                     label="Password"
//                     variant="outlined"
//                     type={"password"}
//                 />
//                 <br /><br />

//                 <Button
//                     size={"large"}
//                     variant="contained"
//                     onClick={async () => {
//                         const response = await axios.post("http://localhost:3000/admin/signup", {
//                             username: email,
//                             name: name,
//                             year: year,
//                             branch: branch,
//                             password: password
//                         })
//                         let data = response.data;
//                         localStorage.setItem("token", data.token);
//                         window.location = "/"
//                     }}

//                 > Signup</Button>
//             </Card>
//         </div>
//     </div>
// }

// export default Signup;