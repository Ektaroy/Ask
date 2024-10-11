// Ask.jsx
import React from 'react';
import Button from '@mui/material/Button';
import TextField from "@mui/material/TextField";
import { Card, Typography } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import { Routes, Route } from 'react-router-dom';
import AddCourse from "./AddCourse.jsx";
import Courses from "./Courses";
import { height, maxHeight } from '@mui/system';

const Ask = () => {
    return (
        <div style={{
            // display: 'flex',
            justifyContent: 'space-around',
            marginTop: '20px'
        }}>
        <AddCourse />
    
              <Courses />
        </div>
    );
}

export default Ask;
