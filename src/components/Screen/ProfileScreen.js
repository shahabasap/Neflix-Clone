import { useSelector } from 'react-redux';
import Nav from '../Nav';
import './ProfileScreen.css'
import { selectUser } from '../../features/counter/userSlice';
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';


function ProfileScreen() {
    const user=useSelector(selectUser)
    const navigate=useNavigate()


    return ( 
        <div className='profileScreen' >
            <Nav />
            <div className="profileScreen_body">
                <h1>Edit Profile</h1>
                <div className="profileScreen_info">
                    <img src="https://github.com/navya123jacob/Netflix-clone/blob/main/src/netflix-avatar.jpg?raw=true" alt="Profile Screen photo" />
                    <div className="profileScreen_details">
                        <h3>{user.email}</h3>
                        <div className="current-plans">
                        <h4>Plans (Current Plan:premium)</h4>
                        <span className='renewal'>Renewal data:04/03/2021</span>
                        <div className="indicidul-palans">
                         <div className="left-contents">Netflix Standard <small>1080p</small></div>
                         <div className="right-contents"><button className='suscribe-btn'>Subscribe</button></div>
                        </div>
                        <div className="indicidul-palans">
                         <div className="left-contents">Netflix Basic <small>408p</small></div>
                         <div className="right-contents"><button className='suscribe-btn'>Subscribe</button></div>
                        </div>
                        <div className="indicidul-palans">
                         <div className="left-contents">Netflix Premium <small>4K+HDR</small></div>
                         <div className="right-contents "><button className='current-Pack-btn'>Current Package</button></div>
                        </div>
                        <div className="profileScreen_plans">
                            <button className="profileScreen_signout" onClick={()=>{
                                auth.signOut()
                                navigate('/')
                            }}>Sign Out</button>
                        </div>
                        
                        </div>

                    </div>
                </div>
            </div>
        </div>
     );
}

export default ProfileScreen;