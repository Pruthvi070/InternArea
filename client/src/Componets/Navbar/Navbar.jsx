import React, { useState } from 'react';
import logo from '../../Assets/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithPopup, signOut } from 'firebase/auth';
import { auth, provider } from '../../firebase/firebase';
import { useSelector } from 'react-redux';
import { selectUser } from '../../Feature/Userslice';
import './navbar.css';

function Navbar() {
    const navigate = useNavigate();
    const user = useSelector(selectUser);

    const [dropdown, setDropdown] = useState({ internships: false, jobs: false, profile: false });
    const [isStudent, setStudent] = useState(true);
    const [showLogin, setShowLogin] = useState(false);

    const toggleDropdown = (key) => {
        setDropdown((prev) => ({ ...prev, [key]: !prev[key] }));
    };

    const loginFunction = () => {
        signInWithPopup(auth, provider)
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
        setShowLogin(false);
    };

    const logoutFunction = () => {
        signOut(auth);
        navigate('/');
    };

    return (
        <div>
            <nav className="nav1 w-full">
                <ul>
                    <div className="img ml-6">
                        <Link to="/">
                            <img src={logo} alt="Logo" />
                        </Link>
                    </div>

                    <div className="elem">
                        <div
                            className="dropdown"
                            onMouseEnter={() => toggleDropdown('internships')}
                            onMouseLeave={() => toggleDropdown('internships')}
                        >
                            <Link to="/Internship">
                                Internships{' '}
                                <i className={`bi ${dropdown.internships ? 'bi-caret-up-fill' : 'bi-caret-down-fill'}`}></i>
                            </Link>
                        </div>

                        <div
                            className="dropdown"
                            onMouseEnter={() => toggleDropdown('jobs')}
                            onMouseLeave={() => toggleDropdown('jobs')}
                        >
                            <Link to="/Jobs">
                                Jobs <i className={`bi ${dropdown.jobs ? 'bi-caret-up-fill' : 'bi-caret-down-fill'}`}></i>
                            </Link>
                        </div>
                    </div>

                    <div className="search">
                        <i className="bi bi-search"></i>
                        <input type="text" placeholder="Search" />
                    </div>

                    {user ? (
                        <>
                            <div className="Profile">
                                <Link to="/profile">
                                    <img
                                        src={user?.photo}
                                        alt="User Profile"
                                        className="rounded-full w-12"
                                        onMouseEnter={() => toggleDropdown('profile')}
                                        onMouseLeave={() => toggleDropdown('profile')}
                                    />
                                    <i
                                        className={`bi ${dropdown.profile ? 'bi-caret-up-fill' : 'bi-caret-down-fill'}`}
                                    ></i>
                                </Link>
                            </div>

                            <button className="bt-log" id="bt" onClick={logoutFunction}>
                                Logout <i className="bi bi-box-arrow-right"></i>
                            </button>
                        </>
                    ) : (
                        <>
                            <div className="auth">
                                <button className="btn1" onClick={() => setShowLogin(true)}>
                                    Login
                                </button>
                                <button className="btn2">
                                    <Link to="/register">Register</Link>
                                </button>
                            </div>
                            <div className="flex mt-7 hire">Hire Talent</div>
                            <div className="admin">
                                <Link to="/adminLogin">
                                    <button>Admin</button>
                                </Link>
                            </div>
                        </>
                    )}
                </ul>
            </nav>

            {dropdown.internships && (
                <div className="profile-dropdown-2">
                    <div className="left-section">
                        <p>Top Locations</p>
                        <p>Profile</p>
                        <p>Top Category</p>
                        <p>Explore More Internships</p>
                    </div>
                    <div className="line flex bg-slate-400"></div>
                    <div className="right-section">
                        {Array(5)
                            .fill('Intern at India')
                            .map((item, index) => (
                                <p key={index}>{item}</p>
                            ))}
                    </div>
                </div>
            )}

            {dropdown.jobs && (
                <div className="profile-dropdown-1">
                    <div className="left-section">
                        <p>Top Locations</p>
                        <p>Profile</p>
                        <p>Top Category</p>
                        <p>Explore More Jobs</p>
                    </div>
                    <div className="line flex bg-slate-400"></div>
                    <div className="right-section">
                        {Array(5)
                            .fill('Job at India')
                            .map((item, index) => (
                                <p key={index}>{item}</p>
                            ))}
                    </div>
                </div>
            )}

            {showLogin && (
                <div className="login">
                    <button id="cross" onClick={() => setShowLogin(false)}>
                        <i className="bi bi-x"></i>
                    </button>
                    <h5 id="state" className="mb-4 justify-center text-center">
                        <span
                            id="Sign-in"
                            className={`auth-tab ${isStudent ? 'active' : ''}`}
                            onClick={() => setStudent(true)}
                        >
                            Student
                        </span>
                        &nbsp; &nbsp; &nbsp;
                        <span
                            id="join-in"
                            className={`auth-tab ${!isStudent ? 'active' : ''}`}
                            onClick={() => setStudent(false)}
                        >
                            Employee and T&P
                        </span>
                    </h5>
                    <div className="py-6">
                        <button className="google-btn" onClick={loginFunction}>
                            Login with Google
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Navbar;
