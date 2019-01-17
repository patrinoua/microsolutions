# kindynos

Repository for frontend service of the Risk Office.

## Prerequisites
- node v10.x
- npm v6.x
- yarn v1.10.x

## Setting up a project for the first time on your computer

### SSH Key
To generate an **SSH key** follow the instructions on this [link](https://confluence.atlassian.com/bitbucket/set-up-an-ssh-key-728138079.html).

Open the terminal and look inside the hidden .ssh folder 
```
cd ~/.ssh
```
for the generated keys.


This will work on a Mac, but if you are on another OS, it is possible that you will need to google in order to find out how to access .ssh on the file system.

Following the link instructions, copy that and add it to your bit-bucket account. 

### Login to NPM
```
npm login
username: [your email]
password: [your password]
```

## Preparing your Project

### Copy the project from Git
The first step is to copy the project files from bit-bucket into the projects' file like this

go to https://bitbucket.org/modifi-dev/kindynos/src/master/

press **Clone**

Open Terminal, go to your projects' directory and paste the command provided by the clone dialog:
```
git clone git@bitbucket.org:modifi-dev/kindynos.git
```

### Select which Branch to work on

- **review**: Default development branch, used for Product review before something goes to production (Link)
- **review-sf**: Seller Financing Features
- **master**: Code that runs in production 

for example
```
git checkout review
```


## Running the app
MODIFI apps usually have a **client side** where most of the functionality is built 
and a **server side**, mostly used to retrieve key-word translations. 
You will need to **yarn install** and **start** the project in both these directories.

Before starting the project you will need to create the **.env** file in both these directories.
**.env** files tell yarn witch port to use while running the project.

### client
Inside `/client` directory

Find the .env.example file and make a duplicate. 

On the copy, remove the .example ending. 

Now the new file you created, **.env** has the same contents as .env.example .

You are ready to run the client side:

```yarn start```

#### server

follow the same procedure for the server:

Inside `/server` directory

Create the *.env* file by copying .env.example

run the server by running: 

```yarn watch```
