import { alertActions } from "./alert_action";
import { history } from '../_helpers/history';

export const userActions = {
    register
};

function register(user) {
    return dispatch => {
        dispatch(request(user));

        register(user)
            .then(
                user => {
                    dispatch(success());
                    history.push('/login');
                    dispatch(alertActions.success("Registration successful"));
                },
            error => {
                dispatch(failure(error));
                dispatch(alertActions.error(error));
            }
        );
    };
    function request(user){
        return {type: 'USER_REGISTER_REQUEST', user}
    }

    function success(user){
        return {type: 'USER_REGISTER_SUCCESS', user}
    }

    function failure(error){
        return {type: 'USER_REGISTER_FAILURE', error}
    }
}