## Initial setup
If you have not `.env` file in root folder create it and fill it.
This file set environment (global) variables for current application.

We must use STAGE env for develop and testing.

#### Create`.env` file in the root
```$xslt
MONGO_CONNECTION_STRING_PROD=mongodb://localhost:27017/codewars
MONGO_CONNECTION_STRING_LOCAL=mongodb://localhost:27017/codewars

JWT_KEY=jwtSecretKey
JWT_EXPIRES_IN=10d

TZ=America/Los_Angeles

CLIENT_HOST=http://localhost:3006
MAIL_SERVICE=gmail
MAIL_USER=5901867@gmail.com
MAIL_PASS=oxquhrejxuloydyw
MAIL_SILENT=false
```

#### Local Install

Run `npm install`.

Check if you have locally intalled `nodemon` and `mongodb`.

`npm run local` start the server locally with connection to locall MongoDB.

#### Postman

Use `docs/postman/PASV.postman_collection.json` and envinronments.

### Try

Try to ping GET localhost:5000/info


### API tests


### Docker


### Database

### Getting started for new contributors

#### Step 1 - clone the project

1. Follow https://github.com/bogutski/pasv-server project.
2. Click on `Clone or download` button and copy **the path**.
3. Open your WebStorm and close current project.
4. Click on `Check out from Version Control`.
5. Paste **the path** into `URL` field.
6. Chose directory for your project. Create a pasv-server folder in the list of your WebStorm projects, if needed. **ALERT!** Make sure you remember that directory, we will have to find it later.
7. Click `Clone` button.

#### Step 2 - Install and run local MongoDB
##### Windows OS
1. Follow https://www.mongodb.com/download-center/community?jmp=docs and download MongoDB Community Edition.
2. Use [this](https://docs.mongodb.com/manual/installation/) tutorial to install your MongoDB.
3. Run MongoDB.
4. Make New Connection. For that, find the `MONGO_CONNECTION_STRING_LOCAL` path in `.env` file located in the pasv-server project. 
Copy `mongodb://localhost:27017/codewars` and paste it in the text area (Paste your connection string (SRV or Standard )).
5. Press `connect`.
6. Add the path to the server (for ex. "C:\Program Files\MongoDB\Server\4.2\bin" ) to Path Environment Variable. 
   System Properties -> Environment Variables -> Path -> Edit -> New -> paste your path

##### mac OS

1. Go to the official Mongo DB page make sure all commands below haven't changed:
https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/
2. Check if all additional command-line tools are installed before (according to the article)
3. Go to the Mac terminal, run commands down below (run all commands according to latest MongoDB version):
    * Brew tap mongodb/brew
    * Brew install mongodb-community@4.2
    * Brew services start mongodb-community@4.2
4. Download MongoDB Compass, (Connect on localhost:27017)

#### Step 3 - Install and run Postman

1. Follow https://www.getpostman.com/downloads/.
2. Choose your OS and press `Download`.
3. Create a new workspace.
4. Click on `Import` button. Then click on `Choose files`.
5. Now you need find a directory with your project. Then select `docs` folder and then `postman` folder.
6. Choose `PASV.postman_collection.json` and `PASV-LOCAL.postman_environment.json` files in /yourProjectDirectory/docs/postman and open them both
7. In the upper right corner of the Postman interface, find a drop-down with `No Environment` field. Change it to `PASV-LOCAL`.

#### Step 4 - Running local server and sending first request

1. Open WebStorm and pasv-server project.
2. Use `npm install` command to download all modules.
3. Install nodemon. To install nodemon, type `npm install nodemon`. Then close and reopen WebStorm.
4. Use `npm run local` command to start server. 
    * If you have Windows OS - it is bad. First, open `File` -> `Settings` -> `Tools` -> `Terminal` and make sure that in `Shell path` you have `C:\Program Files\Git\bin\sh.exe`.
    * Then use `npm config set script-shell "C:\\Program Files\\git\\bin\\bash.exe"` command and try to use `npm run local` command once again. If it is still not working - go https://www.apple.com/shop/ and get a new mac.
5. Now open Postman and open `PASV Collection`. Click on it, then find `INFO` folder and send `GET localhost:5000/info` request.
6. If you get a status 200 response - my warmest congratulations!
