# System imports
import subprocess
from flask import *
from os import path
from cmd_sender import send_cmd

# Local predicition modules
# find modules in parent_folder/predictions
# sys.path.append(os.path.join(os.path.dirname(__file__), '..', 'prediction')) 

static_assets_path = path.join(path.dirname(__file__), "dist")
app = Flask(__name__, static_folder=static_assets_path)

def _cmd(cmd):
	return send_cmd(cmd)

# ----- Routes ----------

@app.route('/')
def index():
    return app.send_static_file("index.html")

@app.route('/cmd')
def cmd():
	cmd = request.args.get('cmd')
   	return _cmd(cmd)

if __name__ == "__main__":
    # Make sure all frontend assets are compiled
    #subprocess.Popen("webpack")

    # Start the Flask app
    app.run(host='0.0.0.0', port=7000, threaded=True)
