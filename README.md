# Job Portal

# Database Setup

1. Run `create-db.sql` inside database
2. Initialize the table by uncommenting the following line inside `server.js`
    > `initializeModels`
3. Seed the database by uncommenting the line 41
4. Once the job is applied entry will be created inside `job-user` table

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

