HOW TO HOST THIS APPLICATION IN THE SERVER
1. prepair the server by installing node js and npm
2. Install Node.js and npm by running the following command:
    ```
    sudo apt-get install nodejs npm
    ```
    This will install both Node.js and npm on your server.

3. Install MongoDB by running the following command:
        ```
        sudo apt-get install mongodb
        ```
        This will install MongoDB on your server.

    2. Start the MongoDB service by running the following command:
        ```
        sudo service mongodb start
        ```
        This will start the MongoDB service.
        By default the database will run in the following port 27017, if not so, please modify the mongoUri variable to the new port in the 
            .env file in the backend folder

    3. Verify that MongoDB is running by running the following command:
        ```
        sudo service mongodb status
        ```
        This will display the status of the MongoDB service.
4. Clone the GitHub repository by running the following command:
        ```
        git clone https://github.com/thee-grinch/project-management-system.git
        ```
    
5. Cd to the  directory
        ```
        cd project-management-system
        ```
6. Cd to the backend and start the application
    you can choose to customize the start variables in the .env file, such as new user name , password  and port

    ```
    cd backend 
    npm install
    npm run dev
    ```
    After running this the backend application will run on the localhost:3000,
7.  The compiled frontend to be served is saved in:
        ``` project-management-system/frontend/dist
        ```
8.   Now set up your server configuration to serve the frontend application (step 7), and proxy pass all urls starting with /api to the backend server localhost:3000
9.   to create a start user with the login details in the .env file, visit /start after the server configuration
10. for any details please contact:
    Mordecai Muvandi 0798548329
    Email: mordecaimuvandi16@gmail.com
