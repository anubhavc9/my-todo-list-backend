# [My Todo List Backend](https://my-todo-list-frontend.herokuapp.com/)
### The Node.js/Express.js & PostgreSQL based backend for the my-todo-list Angular app

# Running the application in Dev environment
1. Follow the instructions in `database.sql` to create a db & a table. Run the command in `psql` shell.
2. In `db.js` file, comment out the PROD ENV db credentials & uncomment the LOCAL ENV db credentials.
3. Run `node server.js` for running a dev server on `http://localhost:5000`
4. Make the desired changes in the code
5. `git add .`
6. `git commit -am "commit message"`
7. `git push heroku master`
8. Push the code to GitHub remote

# Running the application in Prod environment
1. In `db.js` file, comment out the LOCAL ENV db credentials & uncomment the PROD ENV db credentials.
2. Make the desired changes in the code
3. `git add .`
4. `git commit -am "commit message"`
5. `git push heroku master`
6. If build is successfull, push the code to GitHub remote too

## NOTE: Backend prod server runs on -> https://my-todo-list-backend.herokuapp.com/
