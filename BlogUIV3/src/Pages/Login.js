import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

const h1Style = {
    color: '#483D8B',
};

function Login () {
    return (
        <center>
            <div>
                <br></br>
                <br></br>
                <h1 style={h1Style}>
                    Login
                </h1>
                <br></br>
                <TextField required id="outlined-user-name" label="User name" type="user name" variant="outlined" />
                <br></br>
                <br></br>
                <TextField
                    required
                    id="standard-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    variant="outlined"
                />
                <br></br>
                <br></br>
                <Button variant="contained">Login</Button>
                <br></br>
                <br></br>
                <Link to="/login">Forgot Username / Password</Link>
            </div>
        </center>
    );
}

export default Login;