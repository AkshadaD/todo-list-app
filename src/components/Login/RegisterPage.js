import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import { Link } from 'react-router-dom';

export default class Register extends Component {

    constructor(){
        super();
        this.state = {
            user: {
                firstName: '',
                lastName: '',
                username: '',
                password: ''
            },
            isSubmitted: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);        
    }

    handleChange(event) {
        const {name, value} = event.target;
        const user = this.state;

        this.setState = ({
            user: {
                ...user,
                [name]:value
            }
        });


    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState = ({isSubmitted:true});

        const {user} = this.state;

        if(user.firstName && user.lastName && user.username && user.password){
            this.props.register(user);
        }
        
    }

    render() {
        return (
            <Aux>
                <div className="col-md-6 mx-auto m-3 p-3 card card-body my-3">
                        <h1 className="text-center">Register</h1> <br />
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label>First Name</label>
                            <input type="text" name="firstName" className="form-control" value={user.firstName} onChange={this.handleChange} placeholder="enter first name"/> 
                            {isSubmitted && !user.firstName && <div className="help-block">First name is required</div> }
                        </div>

                        <div className="form-group">
                            <label>Last Name</label> <br />
                            <input type="text" name="lastName" className="form-control" value={user.lastName} onChange={this.handleChange} placeholder="enter last name"></input> 
                            {isSubmitted && !user.lastName && <div className="help-block">Last name is required</div>}
                        </div>

                        <div className="form-group">
                            <label>Username</label> <br />
                            <input type="text" name="username" className="form-control" value={user.username} onChange={this.handleChange} placeholder="enter username"></input>
                            {isSubmitted && !user.username && <div className="help-block">username required</div> }
                        </div>

                        <div className="form-group">
                            <label>Password</label> <br />
                            <input type="text" name="password" className="form-control" value={user.password} onChange={this.handleChange} placeholder="enter password"></input>
                            {isSubmitted && !user.password && <div className="help-block">Password required</div>}
                        </div>

                        <button type="submit" className="btn btn-block btn-lg btn-primary mt-3">Register</button>
                        <Link to="/login">Already Registered? Login here</Link>
                    </form>
                </div>
            </Aux>
        );
    }
}

function mapStateToProps(state){
    const { registering } = state.registration;
    return { registering};

}

