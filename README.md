# I made this file

## To experiment with github read me formatting styles

### so let's see

#### Does this still get smaller?

##### and smaller?

###### and smaller???

# kindynos

## Copy the project from Git
The first step is to copy the project files from bit-bucket into the projects' file like this

go to https://bitbucket.org/modifi-dev/kindynos/src/master/

press **clone**

open terminal, go to projects' directory and write
```
git clone git@bitbucket.org:modifi-dev/modif-ui.git
```

If this is the first time you copy a project to a local device, at this stage you will be blocked and asked to provide an SSH key. 

#### SSH Key
To generate an **SSH key** follow the instructions on this link
https://docs.joyent.com/public-cloud/getting-started/ssh-keys/generating-an-ssh-key-manually/manually-generating-your-ssh-key-in-mac-os-x 
and then find it it with terminal inside the hidden folder [path]/.ssh, copy it and add it to your bitbucket account. 

\
if you haven't done this before, you will also need to 
#### Login to NPM
```
npm login
username: [your email]
password: [your password...]
```
## .env
Find the .env.example file in `/client` and copy it. 

On the copy, remove the .example ending, so keep a file with the name **.env** 

The .env file will tell yarn witch port to use while running this project.

Now, do the same on `/server`.

Don't forget to make sure you are on the right branch! (branch **review** for example) 

##Yarn install
will checkout package.json and yarn.lock and install all the necessary packages.
```
cd client
yarn install
```
```
cd server 
yarn install
```
Now everything should be set up.

Next, 

## Start the project!
```
cd client
yarn start
```
```
cd server 
yarn watch
```
### Enjoy!
