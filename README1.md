# kindynos

Repository for frontend service of the Risk Office.

### Table of contents

- [Prerequisites](#prerequisites)

- [Setting up a project for the first time on your computer](#setting-up-a-project-for-the-first-time-on-your-computer)
    - [SSH Key](#ssh-key)
    - [Login to NPM](#login-to-npm)

- [Preparing your Project](#preparing-your-project) 
    - [Copy the project from Git](#copy-the-project-from-git) 
    - [Select which Branch to work on](#select-which-branch-to-work-on)

- [Running the app](#running-the-app)
    - [Prepare and start the client](#prepare-and-start-the-client) 
    - [Prepare and start the server](#prepare-and-start-the-server)



## Prerequisites
- node v10.x
- npm v6.x
- yarn v1.10.x

## Setting up a project for the first time on your computer

#### SSH Key
To generate an **SSH key** follow the instructions on this [link](https://confluence.atlassian.com/bitbucket/set-up-an-ssh-key-728138079.html).

#### Login to NPM
```
npm login
username: [your email]
password: [your password]
```

## Preparing your Project

#### Copy the project from Git
The first step is to copy the project files from bit-bucket into the projects' file like this

go to https://bitbucket.org/modifi-dev/kindynos/src/master/

press **Clone**

Open Terminal, go to your projects' directory and paste the command provided by the clone dialog:
```
git clone git@bitbucket.org:modifi-dev/kindynos.git
```

#### Select which Branch to work on

- **review**: Default development branch, used for Product review before something goes to production [link](https://risk-office.review.stage.modifi.com/companies)
- **review-sf**: Seller Financing Features
- **master**: Code that runs in production 

for example
```
git checkout review
```


## Running the app
MODIFI apps usually have a **client side** where most of the functionality is built 
and a **server side**, mostly used to retrieve key-word translations. 
You will need to **yarn install** and **start/watch** the project in both these directories.

Before starting the project you will need to create the **.env** file in both these directories.
**.env** files tell yarn which localhost port to use while running the project.

#### Prepare and start the client
```
# inside the projects client folder
cd ./client

# create our .env file from the .env.example
cp .env.example .env

# make sure all dependencies are installed
yarn install

# now we are ready to start the client application
yarn start
```


Follow the same procedure for the server:

#### Prepare and start the server
```
# inside the projects server folder
cd ./server

# create our .env file from the .env.example
cp .env.example .env

# make sure all dependencies are installed
yarn install

# now we are ready to start the server application
yarn watch
```
