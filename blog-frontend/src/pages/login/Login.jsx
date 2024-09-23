import './login.css';

export default function Login() {
    return (
        <div className="login">
            <span className="loginTitle">Login</span>
            <form action="" className="loginForm">
                <label htmlFor="Email">Email</label>
                <input
                    className="loginInput"
                    type="email"
                    placeholder="Enter your email..."
                />
                <label htmlFor="password">Password</label>
                <input
                    className="loginInput"
                    type="password"
                    placeholder="Enter your password..."
                />
                <button className="loginButton">Login</button>
                <button className="loginRegisterButton">Register</button>
            </form>
        </div>
    );
}
