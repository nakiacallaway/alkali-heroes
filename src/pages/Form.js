//This will be the form page to add someone to the team.
import { useEffect, useState } from 'react';
import { teamData } from '../data/team';
import '../App.css';
import JoinForm from '../components/JoinForm';
import Alert from '../components/Alert'

const FormPage = () =>{
    return(
        <div className="container">
            <div className="row text-center">
                <div className="col mt-5">
                    <h2>Join The Team</h2>
                    <h4 className="text-secondary">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere voluptas facilis ab culpa?</h4>
                </div>
            </div>
            <div className="row">
                <JoinForm /> 
            </div>           
        </div>

    )
};

export default FormPage;