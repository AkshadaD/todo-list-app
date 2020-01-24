import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import { Link } from 'react-router-dom';

export default class Register extends Component {

    render() {
        return (
            <Aux>
                <div className="col-md-6 mx-auto m-3 p-3 card card-body my-3">
                        <h1 className="text-center">Register</h1> <br />
                    <form>
                        <div className="form-group">
                            <label>First Name</label>
                            <input type="text" name="fname" className="form-control" placeholder="enter first name"></input> 
                        </div>

                        <div className="form-group">
                            <label>Last Name</label> <br />
                            <input type="text" name="lname" className="form-control" placeholder="enter last name"></input> 
                        </div>

                        <div className="form-group">
                            <label>Email-id</label> <br />
                            <input type="text" name="email" className="form-control" placeholder="enter mail id"></input>
                        </div>

                        <div className="form-group">
                            <label>Password</label> <br />
                            <input type="text" name="pwd" className="form-control" placeholder="enter password"></input>
                        </div>

                        <button type="submit" className="btn btn-block btn-lg btn-primary mt-3">Register</button>
                        <Link to="/login">Already Registered? Login here</Link>
                    </form>
                </div>
            </Aux>
        );
    }
}