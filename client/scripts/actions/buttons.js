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