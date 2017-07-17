import json, RPi.GPIO as GPIO
import Adafruit_MCP9808.MCP9808 as MCP9808
GPIO.setmode(GPIO.BCM)
GPIO.setwarnings(False)

GPIO.setup(16, GPIO.IN)
GPIO.setup(20, GPIO.IN)
GPIO.setup(21, GPIO.IN)

def c_to_f(c):
        return c * 9.0 / 5.0 + 32.0

def get_status():
	sensor = MCP9808.MCP9808()
	sensor.begin()
	temp = sensor.readTempC()
	heat_state = GPIO.input(16)
	AC_state = GPIO.input(21)
	return json.dumps([{'ac':AC_state, 'heat':heat_state, 'temp': '{1:0.3F}F'.format(temp, c_to_f(temp))}]), 200, {'ContentType':'application/json'} 
