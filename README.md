# Job Portal

# Database Setup

1. Run `create-db.sql` inside the database
2. Initialize the table by uncommenting the following line inside `server.js`
    > `initializeModels`
3. Seed the database by uncommenting the line 41
4. Once the job is applied entry will be created inside the `job-user` table
5. Update your password inside the `.env` file

# Caution 
1. In case the port is updated for frontend code, please update it inside the `server.js` **CORS** options.
2. Install `nodemon` in the machine locally or globally to run the server

# Development Setup

## Backend
1. `npm install`
2. `npm start`

## Frontend
1. `npm install`
2. `npm start`

# Public APIs

1. `/jobs` - list jobs
2. `/jobs/jobId` - get job details
3. `/jobs/apply` - apply for job
4. `/user` -  list users

# Database Structure

1. `user` - `user-job` - `job`
2. `user-job` table to accommodate `many-to-many` relationship - 
    1. job can have many users
    2. users can have many jobs

