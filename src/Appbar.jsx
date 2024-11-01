import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { shadows } from '@mui/system';
import logo from '../public/Logo.png';

// import { styled } from '@mui/material/styles';

// const Img = styled('img')({
//     margin: 'auto',
//     display: 'block',
//     maxWidth: '100%',
//     maxHeight: '100%',
// });


function Appbar() {
    const navigate = useNavigate()
    const [userEmail, setUserEmail] = useState(null);

    useEffect(() => {
        function callback2(data) {
            if (data.username) {
                setUserEmail(data.username)
            }
        }
        function callback1(res) {
            res.json().then(callback2)
        }
        console.log("token - " + localStorage.getItem("token"));
        fetch("https://ask-backend-livid.vercel.app/admin/me", {
            method: "GET",
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("token")
            }
        }).then(callback1)
    }, []);

    if (userEmail) {
        return <div style={{
            display: "flex",
            justifyContent: "space-between",
            padding: 4,
            zIndex: 1
        }}>
            <div>

                <div style={{ marginLeft: 10 ,height: "3.5rem"}}>
                <img alt="complex" style={{height: "3.5rem"}} src="public\Logo.png" />
                    {/* <img src={require('.public/Logo.png')} /> */}
                </div>
            </div>

            <div style={{ display: "flex" }}>
                <div style={{ marginRight: 10, display: "flex" }}>
                    <div style={{ marginRight: 10 }}>
                        <Button
                          style={{ color: "#4C0AA3", fontWeight: "550", fontSize: "1.05rem" }}
           
                            onClick={() => {
                                navigate("/ask")
                            }}
                        >Ask Your Doubt</Button>
                    </div>

                    <div style={{ marginRight: 10 }}>
                        <Button
                            onClick={() => {
                                navigate("/leaderboard")
                            }}
                        >Leader Board</Button>
                    </div>

                    <Button
                     
                     variant={"contained"}
                     style={{ marginRight: 60, width: 100, height: 40, boxShadow: 3, 
                        
marginTop: 15,

                         background: 'linear-gradient(to right bottom, #4C0AA3,#9747FF)' }}
               
                     
                        onClick={() => {
                            localStorage.setItem("token", null);
                            window.location = "/";
                        }}
                    >Logout</Button>
                </div>
            </div>
        </div>
    }




    //             <div style={{display: "flex"}}>
    //                 <div style={{marginRight: 10, display: "flex"}}>
    //                 <div style={{marginRight: 10}}>
    //                         <Button

    //                             style={{marginRight: 25 ,width: 150,height:50, background: 'linear-gradient(to right bottom, #4C0AA3,#9747FF)'}}
    //                             onClick={() => {
    //                                 navigate("/addcourse")
    //                             }} >Add course</Button>
    //                     </div>

    //                     <div>

    //                         <Button 

    //                             style={{marginRight: 25 ,width: 150,height:50, background: 'linear-gradient(to right bottom, #4C0AA3,#9747FF)'}}
    //                             onClick={() => {
    //                                 navigate("/courses")
    //                             }}>Courses </Button>
    //                     </div>

    //                     <Button
    //                         variant={"contained"}

    //                         onClick={() => {
    //                             localStorage.setItem("token", null);
    //                             window.location = "/";
    //                         }}   >Logout</Button>
    //                 </div>
    //             </div>
    //         </div>
    //     } 




    else {
        return <div style={{
            display: "flex",
            justifyContent: "space-between",
            padding: 15,
            zIndex: 1
        }}>
             <div style={{ marginLeft: 10 ,height: "3.5rem"}}>
                <img alt="complex" style={{height: "3.5rem"}} src="public\Logo.png" />
                    {/* <img src={require('.public/Logo.png')} /> */}
                </div>
      

            <div style={{ display: "flex" }}>

                <div style={{ marginRight: 30, marginTop: 14 }}>
                </div>

                <div style={{ display: "flex" }}>

      
                <div style={{ marginRight: 30, marginTop: 14 }}>
                <Button style={{ color: "#4C0AA3", fontWeight: "550", fontSize: "1.05rem" }}
                          onClick={() => {
                            
                        window.location = "/";
                        }}
                    >Home</Button>
                </div>

                <div style={{ marginRight: 30, marginTop: 14 }}>
                    <Button style={{ color: "#4C0AA3", fontWeight: "550", fontSize: "1.05rem" }}
                      onClick={() => {
                            
                            navigate("/courses")
                    }}
                    >Ask your Doubts</Button>
                </div>

                <div style={{ marginRight: 30, marginTop: 14 }}>
                <Button style={{ color: "#4C0AA3", fontWeight: "550", fontSize: "1.05rem" }}
                    
                    onClick={() => {
                            
                        navigate("/leaderboard")
                }}
                    >Leader Board</Button>
                </div>


                    <div style={{ marginRight: 10 }}>
                        <Button
                            variant={"contained"}
                            style={{ marginRight: 25, width: 100, height: 40, boxShadow: 3, background: 'linear-gradient(to right bottom, #4C0AA3,#9747FF)'
                               ,
                                marginTop: "15px",
                                marginLeft: "115px"
                                
                            }}
                            onClick={() => {
                                navigate("/signup")
                            }}
                        >Sign up</Button>
                    </div>

                    <div>
                        <Button
                            variant={"contained"}
                            style={{ marginRight: 60, width: 100, height: 40, boxShadow: 3, 
                               
    marginTop: 15,
    
                                background: 'linear-gradient(to right bottom, #4C0AA3,#9747FF)' }}
                            onClick={() => {
                                navigate("/signin")
                            }}
                        >Sign in</Button>
                    </div>
                </div>

            </div>

        </div>
    }
}

export default Appbar;
