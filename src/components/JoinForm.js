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

    console.log(newMember);

    const addMember = () => {
        teamData.push({newMember, id: teamData.length});
    }; //function to push member into array

    const handleSubmit = event => {
        event.preventDefault();

        console.log('submit runs!');
        setAlert(true);
        setTimeout(() => {
            setAlert(false);             
        }, 2000) 
        addMember();
        console.log(teamData);
    };

    return(
        <div className="row my-5">
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
                    <div className="row"> 
                        <div id="first" className="form-group col col-md-6">
                            <label htmlFor="firstname">First Name</label>
                            <input 
                                type="text" 
                                id="firstname" 
                                className="form-control" 
                                value={newMember.firstName}
                                onChange={event => setNewMember(event.target.value)}
                                placeholder="First"/>
                        </div>
                        <div id="last" className="form-group col col-md-6">
                            <label htmlFor="lastname">Last Name</label>
                            <input
                                type="text" 
                                id="lastname" 
                                className="form-control" 
                                value={newMember.lastName}
                                onChange={event => setNewMember(event.target.value)}
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
                                onChange={event => setNewMember(event.target.value)}
                                placeholder="NewMember@Alkali.com"
                            />                    
                    </div>
                    <div id="station" className="form-group">
                        <label htmlFor="position">Position</label>
                        <select 
                            className="form-control" 
                            id="position" 
                            value={newMember.position}
                            onChange={event => setNewMember(event.target.value)}>
                                <option>React Apprentice</option>
                                <option>React Lead</option>
                        </select>
                    </div>
                    <div id="skills" className="form-group mt-3">
                        <div>
                            <label htmlFor="skills">Languages</label>                        
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox" name="languages" id="html" value={newMember.languages} onChange={event => setNewMember(event.target.checked)} />
                            <label class="form-check-label" for="html">HTML</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox" name="languages" id="css"  value={newMember.languages} onChange={event => setNewMember(event.target.checked)} />
                            <label class="form-check-label" for="css">CSS</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox" name="languages" id="javascript"  value={newMember.languages} onChange={event => setNewMember(event.target.checked)} />
                            <label class="form-check-label" for="javascript">Javascript</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox" name="languages" id="react"  value={newMember.languages} onChange={event => setNewMember(event.target.checked)} />
                            <label class="form-check-label" for="react">React</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox" name="languages" id="react-native"  value={newMember.languages} onChange={event => setNewMember(event.target.checked)} />
                            <label class="form-check-label" for="react-native">React-Native</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox" name="languages" id="nodejs"  value={newMember.languages} onChange={event => setNewMember(event.target.checked)} />
                            <label class="form-check-label" for="nodejs">NodeJS</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox" name="languages" id="java"  value={newMember.languages} onChange={event => setNewMember(event.target.checked)} />
                            <label class="form-check-label" for="java">Java</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox" name="languages" id="python"  value={newMember.languages} onChange={event => setNewMember(event.target.checked)} />
                            <label class="form-check-label" for="python">Python</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox" name="languages" id="mongodb"  value={newMember.languages} onChange={event => setNewMember(event.target.checked)} />
                            <label class="form-check-label" for="mongodb">MongoDB</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox" name="languages" id="c++"  value={newMember.languages} onChange={event => setNewMember(event.target.checked)} />
                            <label class="form-check-label" for="c++">C++</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox" name="languages" id="express"  value={newMember.languages} onChange={event => setNewMember(event.target.checked)} />
                            <label class="form-check-label" for="espress">Express</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox" name="languages" id="oz"  value={newMember.languages} onChange={event => setNewMember(event.target.checked)} />
                            <label class="form-check-label" for="oz">Oz</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox" name="languages" id="haskell"  value={newMember.languages} onChange={event => setNewMember(event.target.checked)} />
                            <label class="form-check-label" for="haskell">Haskell</label>
                        </div>
                    </div>
                    <div id="info" className="form-group">
                        <label htmlFor="bio">About</label>
                        <textarea 
                            id="bio"
                            className="form-control"
                            value={newMember.bio}
                            onChange={event => setNewMember(event.target.value)}
                            placeholder="Tell us a little bit about yourself"
                        />
                    </div>
                    <div className="row">
                        <div id="github_acct" className="form-group col-md-6">
                            <label htmlFor="github">Github</label>
                            <input
                                type="text" 
                                id="github" 
                                className="form-control" 
                                value={newMember.github}
                                onChange={event => setNewMember(event.target.value)}
                                placeholder="https://github.com/username"
                            />
                        </div>
                        <div id="linkedin_acct" className="form-group col-md-6">
                            <label htmlFor="linkedin">LinkedIn</label>
                            <input
                                type="text" 
                                id="linkedin" 
                                className="form-control" 
                                value={newMember.linkedIn}
                                onChange={event => setNewMember(event.target.value)}
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
                            onChange={event => setNewMember(event.target.value)}
                            placeholder="Place a direct link to your desired profile picture"
                        />
                    </div>
                    <button type="submit" class="btn btn-info col mt-3" onClick="">Submit</button>
                </form>            
            </div>
        </div>

       

    )
};

export default JoinForm;