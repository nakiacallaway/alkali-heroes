import { Link } from 'react-router-dom'

const JumpLink = ({member}) => {
    return (
    <div className="card mb-3">
        <div className='jl-card-bg-img' src={member.profile_img} style={{'backgroundImage': `url(${member.profile_img})`}}></div> 
                
    </div>
    );
};

export default JumpLink;