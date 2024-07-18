// /* eslint-disable react/no-unescaped-entities */
// import { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';

// function Login() {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const navigate = useNavigate();

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log("Submitting:", { email, password });

//         axios.post('http://localhost:3001/login', { email, password })
//             .then(result => {
//                 console.log("Server response:", result);
//                 if (result.data === "Success") { // Ensure the string matches the response exactly
//                     console.log("Login successful, navigating to /district-page");
//                     navigate('/district-page');
//                 } else {
//                     console.log("Login failed:", result.data);
//                 }
//             })
//             .catch(err => {
//                 console.error("Error during login:", err);
//             });
//     };

//     return (
//         <div className="d-flex justify-content-center align-items-center h-screen">
//             <div className="bg-white p-6 rounded shadow-md">
//                 <h2 className="text-2xl mb-4">Login</h2>
//                 <form onSubmit={handleSubmit}>
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
//                     <button type="submit" className="btn btn-success w-100 rounded-0">Login</button>
//                 </form>
//                 <p>Don't have an account?</p>
//                 <Link to="/register" className="btn btn-success w-100 rounded-0">Register</Link>
//             </div>
//         </div>
//     );
// }

// export default Login;



/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unescaped-entities */
// import { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import './auth.css'; // Import the common CSS file

// function Login() {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const navigate = useNavigate();

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log("Submitting:", { email, password });

//         axios.post('http://localhost:3001/login', { email, password })
//             .then(result => {
//                 console.log("Server response:", result);
//                 if (result.data === "Success") { // Ensure the string matches the response exactly
//                     console.log("Login successful, navigating to /district-page");
//                     navigate('/district-page');
//                 } else {
//                     console.log("Login failed:", result.data);
//                 }
//             })
//             .catch(err => {
//                 console.error("Error during login:", err);
//             });
//     };

//     return (
//         <div className="auth-container">
//             <div className="auth-card">
//                 <h2>Login</h2>
//                 <form onSubmit={handleSubmit}>
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
//                     <button type="submit" className="btn btn-success">Login</button>
//                 </form>
//                 <p>Don't have an account?</p>
//                 <Link to="/register" className="btn btn-primary">Register</Link>
//             </div>
//         </div>
//     );
// }


// export default Login;
//==============================

/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './auth.css'; // Import the common CSS file

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitting:", { email, password });

        axios.post('http://localhost:3001/login', { email, password })
            .then(result => {
                console.log("Server response:", result);
                if (result.data === "Success") { // Ensure the string matches the response exactly
                    console.log("Login successful, navigating to /district-page");
                    navigate('/district-page');
                } else {
                    console.log("Login failed:", result.data);
                }
            })
            .catch(err => {
                console.error("Error during login:", err);
            });
    };

    return (
        <div className="auth-container">
            <div className="auth-card">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
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
                    <button type="submit" className="btn btn-success">Login</button>
                </form>
                <p>Don't have an account?</p>
                <Link to="/register" className="btn btn-primary">Register</Link>
            </div>
        </div>
    );
}

export default Login;


