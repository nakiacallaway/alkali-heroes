import { Link } from 'react-router-dom'

const JumpLink = ({member}) => {
    return (
    <div className="card mt-3">
        <Link to={`/member/${member.id}`} className="card-link text-info"><div className='jl-card-bg-img' src={member.profile_img} style={{'backgroundImage': `url(${member.profile_img})`}}></div></Link>
        
    </div>
    );
};

export default JumpLink;