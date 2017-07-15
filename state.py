import RPi.GPIO as GPIO
GPIO.setmode(GPIO.BCM)
GPIO.setwarnings(False)

GPIO.setup(16, GPIO.IN)
GPIO.setup(20, GPIO.IN)
GPIO.setup(21, GPIO.IN)

def get_status():
	heat_state = GPIO.input(16)
	AC_state = GPIO.input(21)
	return json.dumps([{'ac':AC_state, 'heat':heat_state}]), 200, {'ContentType':'application/json'} 
