import subprocess, json

def send_cmd(cmd):
	try:
        	proc = subprocess.Popen(['sh', '/home/pi/remote_cmd.sh', cmd], stdout=subprocess.PIPE, stderr=subprocess.PIPE)
		if 'ERROR' in proc.stdout.readlines()[0]:
			return json.dumps([{'success':True}]), 200, {'ContentType':'application/json'} 
		return json.dumps([{'success':True}]), 200, {'ContentType':'application/json'}
	except Exception as e:
		return json.dumps([{'success':True}]), 200, {'ContentType':'application/json'}
