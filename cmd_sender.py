import subprocess, json

def send_cmd(cmd):
	try:
        	proc = subprocess.Popen(['/bin/bash', '-i', '-c', cmd+'&'], stdout=subprocess.PIPE, stderr=subprocess.PIPE)
		return json.dumps([{'success':True}]), 200, {'ContentType':'application/json'}
	except Exception as e:
		return json.dumps([{'success':True}]), 200, {'ContentType':'application/json'}
