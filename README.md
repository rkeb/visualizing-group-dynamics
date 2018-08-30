# visualizing-group-dynamics
## Set up on local machine
### Requirements
* `Python 3.6`. Python 3.7 is not supported until tensorflow works with 3.7.
* Clone this repo `git clone git@github.com:rkeb/visualizing-group-dynamics.git`.
* `pipenv 11.10.4`. Latest pipenv is not supported until it fix the [environment variable injection problem](https://github.com/pypa/pipenv/issues/2635) with git repo url. Make sure pipenv is creating Python 3 virtual environments (this is usually the case if you used homebrew to install it). If not, run `pipenv --three` under this project folder.
* Add a `.env` file in the project folder that contains a valid `GITHUB_TOKEN`. Contact us for the token.
* Run `pipenv shell` and then `pipenv install` in the project folder to install all the dependencies.

To run the server:
1. Run `pipenv run dev` to start the development web server.
2. Visit http://127.0.0.1:5000/

Alternatively, run `pipenv run prod` to start the production server.

