import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import { Link } from 'react-router-dom';
import { userActions } from '../../actions/users_action';
import { connect } from 'react-redux';


class Register extends Component {

    constructor(props){
        super(props);
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
        console.log("handleChange called");
        const {name, value} = event.target;
        const user = this.state;

        this.setState({
            user: {
                ...user,
                [name]:value
            }
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log("handleSubmit called");
        this.setState({ isSubmitted:true });

        const {user} = this.state;

        console.log(`${user.firstName}  ${user.lastName}  ${user.username}`);

        if(user.firstName && user.lastName && user.username && user.password){
            this.props.register(user);
            console.log(`${user.firstName}  ${user.lastName}  ${user.username}`);
        }

        console.log(`${user.firstName}  ${user.lastName}  ${user.username}`);
        
    }

    render() {
        const {registering} = this.props;
        const {user, isSubmitted} = this.state;


        return (
            <Aux>
                <div className="col-md-6 mx-auto m-3 p-3 card card-body my-3">
                        <h1 className="text-center">Register</h1> <br />
                    <form onSubmit={this.handleSubmit}>
                        <div className={"form-group" +(isSubmitted && !user.firstName ? 'has-error' : '')}>
                            <label htmlFor="firstName">First Name</label>
                            <input type="text" name="firstName" className="form-control" value={user.firstName} onChange={this.handleChange} placeholder="enter first name"/> 
                            {isSubmitted && !user.firstName && <div className="help-block">First name is required</div> }
                        </div>

                        <div className="form-group">
                            <label>Last Name</label> <br />
                            <input type="text" name="lastName" className="form-control"  value={user.lastName} onChange={this.handleChange} placeholder="enter last name"></input> 
                            {isSubmitted && !user.lastName && <div className="help-block">Last name is required</div>}
                        </div>

                        <div className="form-group">
                            <label>Username</label> <br />
                            <input type="text" name="username" className="form-control" value={user.username}  onChange={this.handleChange} placeholder="enter username"></input>
                            {isSubmitted && !user.username && <div className="help-block">username required</div> }
                        </div>

                        <div className="form-group">
                            <label>Password</label> <br />
                            <input type="password" name="password" className="form-control" value={user.password} onChange={this.handleChange} placeholder="enter password"></input>
                            {isSubmitted && !user.password && <div className="help-block">Password required</div>}
                        </div>

                        <button className="btn btn-block btn-lg btn-primary mt-3">Register</button>
                        {registering && 
                            <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                        }
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

const actionCreaters = {
    register: userActions.register
}

const connectedRegPage = connect(mapStateToProps, actionCreaters)(Register);
export { connectedRegPage as Register}

