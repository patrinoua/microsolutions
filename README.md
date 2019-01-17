# I made this file

## To experiment with github read me formatting styles

### so let's see

#### Does this still get smaller?

##### and smaller?

###### and smaller???

# kindynos

## Copy the project from Git
The first step is to copy the project files from bitbucket into the projects' file like this
go to https://bitbucket.org/modifi-dev/modif-ui/src/master/
press clone clone
open terminal, go to projects file and write
git clone git@bitbucket.org:modifi-dev/modif-ui.git

If this is the first time you copy a project to a local device, at this stage you will be blocked and asked to provide an SSH key. 

## SSH Key
To generate an SSH key follow the instructions on this link
https://docs.joyent.com/public-cloud/getting-started/ssh-keys/generating-an-ssh-key-manually/manually-generating-your-ssh-key-in-mac-os-x 
and then find it it with terminal inside the hidden folder [path]/.ssh, copy it and add it to your bitbucket account. 

## .env
Find the .env.example file in /client and /server and copy it. On the copy, remove the .example (keep .env). 
This will tell yarn witch port to use while running this project. 
checkout you are on the right branch! (eg review) 

## Login to NPM
npm login
username: your email
password: your password...
Yarn install
cd client
yarn install
cd server 
yarn install
Now everything should be set up.
Next, 

## Start the project!
cd client
yarn start
cd server 
yarn watch
