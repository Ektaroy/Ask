// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signin from "./Signin.jsx";
import Signup from "./Signup.jsx";
import Appbar from "./Appbar.jsx";
import AddCourse from "./AddCourse.jsx";
import Courses from "./Courses";
import Course from "./Course";
import Ask from "./Ask"; // Import the Ask component
import LandingPage from './LandingPage.jsx';
import LeaderBoard from './LeaderBoard.jsx';

function App() {
    return (
        <div style={{
            width: "100vw",
            height: "100vh",
            backgroundColor: "#ffffff"
        }}>
            <Router>
                <Appbar />
                <Routes>
                    <Route path={"/ask/*"} element={<Ask />} />
                    <Route path={"/"} element={<LandingPage />} />
                    <Route path={"/addcourse"} element={<AddCourse />} />
                    <Route path={"/leaderboard"} element={<LeaderBoard />} />
                    <Route path={"/course/:courseId"} element={<Course />} />
                    <Route path={"/courses"} element={<Courses />} />
                    <Route path={"/signin"} element={<Signin />} />
                    <Route path={"/signup"} element={<Signup />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
