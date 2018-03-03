#!/usr/bin/python

import json, temp, requests, time
from cmd_sender import send_cmd

def get_temp():
    temp_dict = json.loads(temp.get_current_temp()[0])[0]
    current_temp_str = temp_dict['current_temp']
    current_temp = int(float(current_temp_str[:-1]))
    return current_temp

def get_therm_info():
    r = requests.get('https://control-panel-307d0.firebaseio.com/therm_state.json')
    therm_info = json.loads(r.text)
    return therm_info

def run():
    ac_state_prev = 0
    heat_state_prev = 0
    while True:
        time.sleep(3)
        therm_info = get_therm_info()
        ac_state = int(therm_info['ac_state'])
        heat_state = int(therm_info['heat_state'])
        desired_temp = therm_info['desired_temp']
        temp = get_temp()
        requests.put('https://control-panel-307d0.firebaseio.com/therm_state/current_temp.json',data=str(temp))
        if ac_state == 1:
            ac_state_prev = 1
            if desired_temp == temp or desired_temp > temp:
                #turn_off AC
                send_cmd('ac_off')
            elif temp > desired_temp+1:
                #turn_on AC
                send_cmd('ac_on')
        elif heat_state == 1:
            heat_state_prev = 1
            if desired_temp == temp or desired_temp < temp:
                #turn_off heat
                send_cmd('heat_off')
            if temp < desired_temp-1:
                #turn_on heat
                send_cmd('heat_on')
        if ac_state == 0 and ac_state_prev == 1:
            #turn_off AC
            send_cmd('ac_off')
            ac_state_prev = 0
        elif heat_state == 0 and heat_state_prev ==1:
            #turn_off heat
            send_cmd('heat_off')
            heat_state_prev = 0

try:
    run()

except Exception as e:
    with open('/home/pi/control_panel/auto_mode_log.txt', 'a') as f:
        f.write(str(e)+'\n')
