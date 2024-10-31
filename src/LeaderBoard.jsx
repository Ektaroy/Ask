import { Button, Card, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Admins() {
    const [admins, setAdmins] = useState([]);
    
    useEffect(() => {
        function callback2(data) {
            setAdmins(data.admins); // Update to set admins data
        }

        function callback1(res) {
            res.json().then(callback2);
        }

        fetch("https://ask-backend-livid.vercel.app/admin/all/", {
            method: "GET",
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("token")
            }
        }).then(callback1).catch(error => console.error("Error fetching admin data:", error));
    }, []);

    return (
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
            {admins.map(admin => {
                return <AdminCard admin={admin} key={admin._id} />;
            })}
        </div>
    );
}

export function AdminCard({ admin }) {
    const navigate = useNavigate();

    return (
        <Card style={{
            margin: 10,
            width: 300,
            minHeight: 200,
            padding: 20
        }}>
            <Typography textAlign={"center"} variant="h5">{admin.username}</Typography>
            <Typography textAlign={"center"} variant="subtitle1">Year: {admin.year}</Typography>
            <Typography textAlign={"center"} variant="subtitle1">Branch: {admin.branch}</Typography>
            <Typography textAlign={"center"} variant="subtitle1">Points: {admin.points}</Typography>
            <div style={{ display: "flex", justifyContent: "center", marginTop: 20 }}>
                <Button variant="contained" size="large" onClick={() => {
                    navigate("/admin/" + admin._id); // Navigate to edit the admin
                }}>Edit</Button>
            </div>
        </Card>
    );
}

export default Admins;
