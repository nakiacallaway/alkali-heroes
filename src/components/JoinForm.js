import { useEffect, useState } from 'react';
import { teamData } from '../data/team';
import '../App.css';

const JoinForm = () =>{
    return(
        <row>
            <form className="col-md-10 offset-1 my-5">
                <div className="row">
                <div id="first" className="form-group col col-md-6">
                    <label htmlFor="firstname">First Name</label>
                    <input 
                        type="text" 
                        id="firstname" 
                        className="form-control" 
                        value=""
                        onChange=""
                        placeholder="First"/>
                </div>
                <div id="last" className="form-group col col-md-6">
                    <label htmlFor="lastname">Last Name</label>
                    <input
                        type="text" 
                        id="lastname" 
                        className="form-control" 
                        value=""
                        onChange=""
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
                            value=""
                            onChange=""
                            placeholder="NewMember@Alkali.com"
                        />                    
                </div>
                <div id="station" className="form-group">
                    <label htmlFor="position">Position</label>
                    <select 
                        className="form-control" 
                        id="position" 
                        onChange="">
                            <option>React Apprentice</option>
                            <option>React Lead</option>
                    </select>
                </div>
                <div id="skills" className="form-group mt-3">
                    <div>
                        <label htmlFor="skills">Languages</label>                        
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" name="languages" id="html" value="option1"/>
                        <label class="form-check-label" for="html">HTML</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" name="languages" id="css" value="option2"/>
                        <label class="form-check-label" for="css">CSS</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" name="languages" id="javascript" value="option3"/>
                        <label class="form-check-label" for="javascript">Javascript</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" name="languages" id="react" value="option1"/>
                        <label class="form-check-label" for="react">React</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" name="languages" id="react-native" value="option2"/>
                        <label class="form-check-label" for="react-native">React-Native</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" name="languages" id="nodejs" value="option3"/>
                        <label class="form-check-label" for="nodejs">NodeJS</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" name="languages" id="java" value="option1"/>
                        <label class="form-check-label" for="java">Java</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" name="languages" id="python" value="option2"/>
                        <label class="form-check-label" for="python">Python</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" name="languages" id="mongodb" value="option3"/>
                        <label class="form-check-label" for="mongodb">MongoDB</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" name="languages" id="react" value="option1"/>
                        <label class="form-check-label" for="react">React</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" name="languages" id="c++" value="option2"/>
                        <label class="form-check-label" for="c++">C++</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" name="languages" id="express" value="option3"/>
                        <label class="form-check-label" for="espress">Express</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" name="languages" id="oz" value="option2"/>
                        <label class="form-check-label" for="oz">Oz</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" name="languages" id="haskell" value="option3"/>
                        <label class="form-check-label" for="haskell">Haskell</label>
                    </div>
                </div>
                <div id="info" className="form-group">
                    <label htmlFor="bio">About</label>
                    <textarea 
                        id="bio"
                        className="form-control"
                        value=""
                        onchange=""
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
                            value=""
                            onChange=""
                            placeholder="https://github.com/username"
                        />
                    </div>
                    <div id="linkedin_acct" className="form-group col-md-6">
                        <label htmlFor="linkedin">LinkedIn</label>
                        <input
                            type="text" 
                            id="linkedin" 
                            className="form-control" 
                            value=""
                            onChange=""
                            placeholder="https://www.linkedin.com/in/username-1234abc/"
                        />
                    </div>
                </div>
                <div id="image" className="form-group">
                    <label htmlFor="profile_img"></label>
                    <input
                        type="text" 
                        id="profile_img" 
                        className="form-control" 
                        value=""
                        onChange=""
                        placeholder="Place a direct link to your desired profile picture"
                    />
                </div>
                <button type="submit" class="btn btn-info col mt-3" onClick="">Submit</button>
            </form>            
        </row>

       

    )
};

export default JoinForm;