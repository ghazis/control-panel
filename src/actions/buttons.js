export function setTemp(temp) {
    return {
        type: 'SET_TEMP',
        temp: temp
    }
}

export function disableToggle(){
    return{
        type: 'DISABLE_TOGGLE'
    }
}

export function enableToggle(){
    return{
        type: 'ENABLE_TOGGLE'
    }
}

export function buttonToggleOn(name) {
    return {
        type: 'BUTTON_TOGGLE_ON_' + name
    };
}

export function buttonToggleOff(name) {
    return {
        type: 'BUTTON_TOGGLE_OFF_' + name
    };
}

export function setState(dispatch, ac_state, heat_state, temp) {
    if (ac_state == 1) {
        dispatch(buttonToggleOn('AC'));
    } else if (heat_state == 1) {
        dispatch(buttonToggleOn('HEAT'));
    } else {
        dispatch(buttonToggleOff('AC'));
        dispatch(buttonToggleOff('HEAT'));
    }
    dispatch(setTemp(temp));
}

export function get_state() {
    return (dispatch, getState) => {
        fetch('http://73.209.181.138:7000/get_state')
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                return response;
            })
            .then((response) => response.json())
            .then((res) => setState(dispatch, res[0].ac, res[0].heat, res[0].temp))
    };
}

export function runScript(url, cmd, name) {
    return (dispatch, getState) => {
        fetch(url);
        if (cmd == '_on') {
            dispatch(buttonToggleOn(name));
            dispatch(disableToggle());
            setTimeout(() => dispatch(enableToggle()), 3000);
        } else {
            dispatch(buttonToggleOff(name));
        }
    };
}