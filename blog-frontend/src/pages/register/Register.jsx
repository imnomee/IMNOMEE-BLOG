import './register.css';

export default function Register() {
    return (
        <div className="register">
            <span className="registerTitle">Register</span>
            <form action="" className="registerForm">
                <label htmlFor="username">Username</label>
                <input
                    className="registerInput"
                    type="text"
                    placeholder="Enter your username..."
                />
                <label htmlFor="Email">Email</label>
                <input
                    className="registerInput"
                    type="email"
                    placeholder="Enter your email..."
                />
                <label htmlFor="password">Password</label>
                <input
                    className="registerInput"
                    type="password"
                    placeholder="Enter your password..."
                />
                <button className="registerButton">Register</button>
                <button className="registerLoginButton">Login</button>
            </form>
        </div>
    );
}
