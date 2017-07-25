import { buttonToggleOff, buttonToggleOn } from './toggleActions';

export function setCurrentTemp(current_temp) {
    firebase.database().ref('therm_state/current_temp').set(Number(current_temp.substring(0, 2)));
    return {
        type: 'SET_CURRENT_TEMP',
        current_temp: current_temp
    }
}

export function setDesiredTemp(desired_temp) {
    return {
        type: 'SET_DESIRED_TEMP',
        desired_temp: desired_temp
    }
}

export function setDpMsg(msg) {
    return {
        type: 'SET_DP_MSG',
        msg: msg
    }
}

export function thermStateListener() {
    return (dispatch, getState) => {
        firebase.database().ref('therm_state').on('value', function(snapshot) {
            var ac_state = Number(snapshot.val().ac_state)
            var heat_state = Number(snapshot.val().heat_state)
            var current_temp = snapshot.val().current_temp;
            var desired_temp = snapshot.val().desired_temp;
            if (desired_temp == current_temp) {
                firebase.database().ref('therm_state/ac_state').set("0");
                firebase.database().ref('therm_state/heat_state').set("0");
                fetch('http://gharcontrol.com/cmd?cmd=heat_off')
                fetch('http://gharcontrol.com/cmd?cmd=ac_off')
                var ac_state = 0;
                var heat_state = 0;
            }
            if (ac_state == 1) {
                dispatch(buttonToggleOn('AC'));
            } else if (heat_state == 1) {
                dispatch(buttonToggleOn('HEAT'));
            } else {
                dispatch(buttonToggleOff('AC'));
                dispatch(buttonToggleOff('HEAT'));
            }
            dispatch(setDesiredTemp(desired_temp));
        });
    };
}

export function decrementTemp(new_temp) {
    return (dispatch, getState) => {
        dispatch(setDesiredTemp(new_temp));
        firebase.database().ref('therm_state/desired_temp').set(new_temp);
    };
}

export function incrementTemp(new_temp) {
    return (dispatch, getState) => {
        dispatch(setDesiredTemp(new_temp));
        firebase.database().ref('therm_state/desired_temp').set(new_temp);
    };
}

export function getCurrentTemp() {
    return (dispatch, getState) => {
        fetch('http://gharcontrol.com/get_temp')
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                return response;
            })
            .then((response) => response.json())
            .then((res) => dispatch(setCurrentTemp(res[0].current_temp)))
    };
}


export function setThermState(url, cmd, name) {
    return (dispatch, getState) => {
        var current_temp = Number(getState().thermState.current_temp.substring(0, 2));
        var desired_temp = getState().thermState.desired_temp;
        var lower_name = name.toLowerCase();
        if (cmd == '_on') {
            if (lower_name == 'heat' && desired_temp > current_temp) {
                fetch(url);
                firebase.database().ref('therm_state/ac_state').set("0");
                firebase.database().ref('therm_state/auto_state').set("0");
                firebase.database().ref('therm_state/' + lower_name + '_state').set("1");
            } else if (lower_name == 'heat' && desired_temp < current_temp) {
                dispatch(setDpMsg("Desired Temperature Has Already Been Reached"));
                setTimeout(() => dispatch(setDpMsg("")), 3000);
            } else if (lower_name == 'ac' && desired_temp < current_temp) {
                fetch(url);
                firebase.database().ref('therm_state/heat_state').set("0");
                firebase.database().ref('therm_state/auto_state').set("0");
                firebase.database().ref('therm_state/' + lower_name + '_state').set("1");
            } else if (lower_name == 'ac' && desired_temp > current_temp) {
                dispatch(setDpMsg("Desired Temperature Has Already Been Reached"));
                setTimeout(() => dispatch(setDpMsg("")), 3000);
            } else if (desired_temp == current_temp) {
                dispatch(setDpMsg("Desired Temperature Has Already Been Reached"));
                setTimeout(() => dispatch(setDpMsg("")), 3000);
            }
        } else if (cmd == '_off') {
            fetch(url);
            firebase.database().ref('therm_state/' + lower_name + '_state').set("0");
        }
    };
}