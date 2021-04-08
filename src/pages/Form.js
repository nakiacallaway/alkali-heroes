//This will be the form page to add someone to the team.
import { useEffect, useState } from 'react';
import { teamData } from '../data/team';
import '../App.css';
import JoinForm from '../components/JoinForm';
import Alert from '../components/Alert'

const FormPage = () =>{
    return(
        <div className="container">
            <div className="row text-center my-5">
                <div className="col">
                    <h2>Join The Team</h2>
                    <h4 className="text-secondary">We’re always on the lookout for awesome people to join Team Alkali.<br></br>To send us your info fill out the form below.  </h4>
                </div>
            </div>
            <div className="row mb-5">
                <JoinForm /> 
            </div>           
        </div>

    )
};

export default FormPage;