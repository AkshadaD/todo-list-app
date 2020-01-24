import React from 'react';
import Aux from '../../hoc/Aux';
import { Link } from 'react-router-dom';

export default class Login extends React.Component {

    render() {
        return (
            <Aux>
                <div className="container">
                    <div className="col-md-6 mx-auto m-4 p-5 card card-body my-3">
                        <h1 className="text-center">Login</h1> <br />
                        <form>
                            <div className="form-group">
                                <label>Email-id</label> <br />
                                <input type="text" name="email" className="form-control" placeholder="enter mail id"></input> <br />
                            </div>

                            <div className="form-group">
                                <label>Password</label> <br />
                                <input type="text" name="pwd" className="form-control" placeholder="enter password"></input> <br />
                            </div>

                            <button type="submit" className="btn btn-block btn-primary mt-3">Login</button>
                            <Link to="/register">Not Registered? Register here</Link>
                        </form>
                    </div>
                </div>
            </Aux>
        );
    }
}