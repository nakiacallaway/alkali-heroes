import { useEffect, useState } from 'react';
import { teamData } from '../data/team';
import '../App.css';

const JoinForm = () =>{
    const [alert, setAlert] = useState(false); //sets alert state
    const [newMember, setNewMember] = useState({ // define a STATE here to keep track of input from the user
        firstName:'',
        lastName:'',
        email:'',
        position:'',
        linkedIn:'',
        github:'',
        bio:'',
        profile_img:'',
        languages:[],             
    });    

    const addMember = () => {//function to push member into array
        newMember.id = teamData.length + 1;
        teamData.push(newMember);
        console.log(newMember);
    }; 

    const handleSubmit = event => {
        event.preventDefault();
        console.log('submit runs!');
        setAlert(true);
        setTimeout(() => {
            setAlert(false);             
        }, 2500) 
        addMember();
        console.log(teamData);
    };

    return(
        <div className="container">
            <div className="col col-md-10 offset-1">
                {/* //conditional for alert functionality */}
                {  alert ? (
                    <div className="alert alert-success mb-5" role="alert"> 
                        A member has been added. Welcome to the team!
                    </div> 
                ) : (
                    <div></div>
                )}
            </div> 
            <div className="row">          
                <form 
                    action='submit'
                    className="col-md-10 offset-1 "
                    id='join-form' 
                    onSubmit={handleSubmit}
                >
                    {/* inputs start */}
                    <div className="form-row"> 
                        <div id="first" className="form-group col col-md-6">
                            <label htmlFor="firstname">First Name</label>
                            <input 
                                type="text" 
                                id="firstname" 
                                className="form-control" 
                                value={newMember.firstName}
                                onChange={event => setNewMember({...newMember, firstName:event.target.value})}
                                placeholder="First"/>
                        </div>
                        <div id="last" className="form-group col col-md-6">
                            <label htmlFor="lastname">Last Name</label>
                            <input
                                type="text" 
                                id="lastname" 
                                className="form-control" 
                                value={newMember.lastName}
                                onChange={event => setNewMember({...newMember, lastName:event.target.value})}
                                placeholder="Last"
                            />
                        </div>   
                    </div>             
                    <div id="e_mail" className="form-group">
                        <label htmlFor="email">E-mail</label>
                            <input 
                                type="email" 
                                id="email" 
                                className="form-control" 
                                value={newMember.email}
                                onChange={event => setNewMember({...newMember, email:event.target.value})}
                                placeholder="NewMember@Alkali.com"
                            />                    
                    </div>
                    <div id="station" className="form-group">
                        <label htmlFor="position">Position</label>
                        <select 
                            className="form-control" 
                            id="position" 
                            value={newMember.position}
                            onChange={event => setNewMember({...newMember, position:event.target.value})}>
                                <option>React Apprentice</option>
                                <option>React Lead</option>
                        </select>
                    </div>
                    <div id="skills" className="form-group">
                        <div>
                            <label htmlFor="skills">Languages</label>                        
                        </div>
                        <textarea 
                            id="languages"
                            className="form-control col"
                            value={newMember.languages}
                            onChange={event => setNewMember({...newMember, languages:event.target.value.split(',')})}
                            placeholder="What coding languages do you know?"
                        />

                        </div>
                       
                    <div id="info" className="form-group">
                        <label htmlFor="bio">About</label>
                        <textarea 
                            id="bio"
                            className="form-control"
                            value={newMember.bio}
                            onChange={event => setNewMember({...newMember, bio:event.target.value})}
                            placeholder="Tell us a little bit about yourself"
                        />
                    </div>
                    <div className="form-row">
                        <div id="github_acct" className="form-group col col-md-6">
                            <label htmlFor="github">Github</label>
                            <input
                                type="text" 
                                id="github" 
                                className="form-control" 
                                value={newMember.github}
                                onChange={event => setNewMember({...newMember, github:event.target.value})}
                                placeholder="https://github.com/username"
                            />
                        </div>
                        <div id="linkedin_acct" className="form-group col col-md-6">
                            <label htmlFor="linkedin">LinkedIn</label>
                            <input
                                type="text" 
                                id="linkedin" 
                                className="form-control" 
                                value={newMember.linkedIn}
                                onChange={event => setNewMember({...newMember, linkedIn:event.target.value})}
                                placeholder="https://www.linkedin.com/in/username-1234abc/"
                            />
                        </div>
                    </div>
                    <div id="image" className="form-group">
                        <label htmlFor="profile_img">Profile Picture</label>
                        <input
                            type="text" 
                            id="profile_img" 
                            className="form-control" 
                            value={newMember.profile_img}
                            onChange={event => setNewMember({...newMember, profile_img:event.target.value})}
                            placeholder="Place a direct link to your desired profile picture"
                        />
                    </div>
                    <button type="submit" class="btn btn-info col" onClick="">Submit</button>
                </form>            
            </div>
        </div>

      

    )
};

export default JoinForm;