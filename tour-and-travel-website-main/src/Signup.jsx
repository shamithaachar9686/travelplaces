/* eslint-disable no-unused-vars */
// Signup.jsx
// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// function Signup() {
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const navigate = useNavigate();

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         axios.post('http://localhost:3001/register', { name, email, password })
//             .then(result => {
//                 console.log(result);
//                 navigate('/login');
//             })
//             .catch(err => console.log(err));
//     };

//     return (
//         <center><div className="d-flex justify-content-center align-items-center vh-100">
//             <div className="bg-white p-6 rounded shadow-md" style={{ width: '300px' }}>
//                 <h2 className="text-2xl mb-4 text-center">Signup</h2>
//                 <form onSubmit={handleSubmit}>
//                     <div className="mb-4">
//                         <label htmlFor="name">
//                             <strong>Name</strong>
//                         </label>
//                         <input
//                             type="text"
//                             placeholder="Enter name"
//                             autoComplete="off"
//                             name="name"
//                             className="form-control rounded-0"
//                             onChange={(e) => setName(e.target.value)}
//                         />
//                     </div>
//                     <div className="mb-4">
//                         <label htmlFor="email">
//                             <strong>Email</strong>
//                         </label>
//                         <input
//                             type="email"
//                             placeholder="Enter email"
//                             autoComplete="off"
//                             name="email"
//                             className="form-control rounded-0"
//                             onChange={(e) => setEmail(e.target.value)}
//                         />
//                     </div>
//                     <div className="mb-4">
//                         <label htmlFor="password">
//                             <strong>Password</strong>
//                         </label>
//                         <input
//                             type="password"
//                             placeholder="Enter password"
//                             name="password"
//                             className="form-control rounded-0"
//                             onChange={(e) => setPassword(e.target.value)}
//                         />
//                     </div>
//                     <button type="submit" className="btn btn-success w-100 rounded-0 d-flex justify-content-center">Register</button>
//                 </form>
//                 <div className="mt-4 text-center">
//                     <p>Already have an account?</p>
//                     <Link to="/login" className="btn btn-primary w-100 rounded-0">Login</Link>
//                 </div>
//             </div>
//         </div>
//         </center>
//     );
// }

// export default Signup;
/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-vars */
// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import './auth.css'; // Import the common CSS file

// function Signup() {
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const navigate = useNavigate();

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         axios.post('http://localhost:3001/register', { name, email, password })
//             .then(result => {
//                 console.log(result);
//                 navigate('/login');
//             })
//             .catch(err => console.log(err));
//     };

//     return (
//         <div className="auth-container">
//             <div className="auth-card">
//                 <h2>Signup</h2>
//                 <form onSubmit={handleSubmit}>
//                     <div className="form-group">
//                         <label htmlFor="name">
//                             <strong>Name</strong>
//                         </label>
//                         <input
//                             type="text"
//                             placeholder="Enter name"
//                             autoComplete="off"
//                             name="name"
//                             className="form-control"
//                             onChange={(e) => setName(e.target.value)}
//                         />
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="email">
//                             <strong>Email</strong>
//                         </label>
//                         <input
//                             type="email"
//                             placeholder="Enter email"
//                             autoComplete="off"
//                             name="email"
//                             className="form-control"
//                             onChange={(e) => setEmail(e.target.value)}
//                         />
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="password">
//                             <strong>Password</strong>
//                         </label>
//                         <input
//                             type="password"
//                             placeholder="Enter password"
//                             name="password"
//                             className="form-control"
//                             onChange={(e) => setPassword(e.target.value)}
//                         />
//                     </div>
//                     <button type="submit" className="btn btn-success">Register</button>
//                 </form>
//                 <p>Already have an account?</p>
//                 <Link to="/login" className="btn btn-primary">Login</Link>
//             </div>
//         </div>
//     );
// }

// export default Signup;
//===========================
/* eslint-disable no-unused-vars */
// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import './auth.css'; // Import the common CSS file

// function Signup() {
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const navigate = useNavigate();

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         axios.post('http://localhost:3001/register', { name, email, password })
//             .then(result => {
//                 console.log(result);
//                 navigate('/login');
//             })
//             .catch(err => console.log(err));
//     };

//     return (
//         <div className="auth-container">
//             <div className="auth-card">
//                 <h2>Signup</h2>
//                 <form onSubmit={handleSubmit}>
//                     <div className="form-group">
//                         <label htmlFor="name">
//                             <strong>Name</strong>
//                         </label>
//                         <input
//                             type="text"
//                             placeholder="Enter name"
//                             autoComplete="off"
//                             name="name"
//                             className="form-control"
//                             onChange={(e) => setName(e.target.value)}
//                         />
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="email">
//                             <strong>Email</strong>
//                         </label>
//                         <input
//                             type="email"
//                             placeholder="Enter email"
//                             autoComplete="off"
//                             name="email"
//                             className="form-control"
//                             onChange={(e) => setEmail(e.target.value)}
//                         />
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="password">
//                             <strong>Password</strong>
//                         </label>
//                         <input
//                             type="password"
//                             placeholder="Enter password"
//                             name="password"
//                             className="form-control"
//                             onChange={(e) => setPassword(e.target.value)}
//                         />
//                     </div>
//                     <button type="submit" className="btn btn-success">Register</button>
//                 </form>
//                 <p>Already have an account?</p>
//                 <Link to="/login" className="btn btn-primary">Login</Link>
//             </div>
//         </div>
//     );
// }

// export default Signup;
///-------------------------------------------------

/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './auth.css'; // Import the common CSS file

function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/register', { name, email, password })
            .then(result => {
                console.log(result);
                navigate('/login');
            })
            .catch(err => console.log(err));
    };

    return (
        <div className="auth-container">
            <div className="auth-card">
                <h2>Signup</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">
                            <strong>Name</strong>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter name"
                            autoComplete="off"
                            name="name"
                            className="form-control"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">
                            <strong>Email</strong>
                        </label>
                        <input
                            type="email"
                            placeholder="Enter email"
                            autoComplete="off"
                            name="email"
                            className="form-control"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">
                            <strong>Password</strong>
                        </label>
                        <input
                            type="password"
                            placeholder="Enter password"
                            name="password"
                            className="form-control"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn btn-success">Register</button>
                </form>
                <div className="mt-0 text-center additional-margin">
                    <p>Already have an account?</p><br/>
                    <Link to="/login" className="btn btn-primary centered-button">Login</Link>
                </div>
            </div>
        </div>
    );
}

export default Signup;
