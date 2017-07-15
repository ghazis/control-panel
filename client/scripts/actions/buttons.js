export function init() {
    return {
        type: 'INIT'
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

export function setState(dispatch, ac_state, heat_state) {
    if (ac_state == 1) {
        dispatch(buttonToggleOn('AC'));
    } else if (heat_state == 1) {
        dispatch(buttonToggleOn('HEAT'));
    } else {
        dispatch(buttonToggleOff('AC'));
        dispatch(buttonToggleOff('HEAT'));
    }
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
            .then((res) => setState(dispatch, res[0].ac, res[0].heat))
    };
}

export function runScript(url, cmd, name) {
    return (dispatch, getState) => {
        fetch(url);
        if (cmd == '_on') {
            dispatch(buttonToggleOn(name));
        } else {
            dispatch(buttonToggleOff(name));
        }
    };
}