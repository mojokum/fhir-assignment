
# TransactionTables
1. Patient
2. User


# Register new User
POST: http://localhost:8080/api/user/register

# Request Input
{
    "name": "Kumaresan",
    "password": "test",
    "email": "mojo.test187@gmail.com"
}

# User Login
POST: http://localhost:8080/api/user/login
## Input 
{
    "password": "test",
    "email": "mojo.test187@gmail.com"
}

# Create Patient
POST: http://localhost:8080/api/patient/create
## Header 
###### Authorization Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Ikt1bWFyZXNhbiIsInN1YiI6OSwiaWF0IjoxNjUzODExNjA1LCJleHAiOjE2NTM4MTE2NjV9._NNem-4W3W5wV0PHTtLiwOqs7W2o4FMtQQrhq0PFyOE

## Body
{
    "name": "kums",
    "initial": "K",
    "phone": 7667337070,
    "email": "test@test.com",
    "age": 34,
    "gender": "male",
    "maritalStatus": "single"
}
  
# Get all Patients 
## Header 
###### Authorization Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Ikt1bWFyZXNhbiIsInN1YiI6OSwiaWF0IjoxNjUzODExNjA1LCJleHAiOjE2NTM4MTE2NjV9._NNem-4W3W5wV0PHTtLiwOqs7W2o4FMtQQrhq0PFyOE

http://localhost:8080/api/patient/patients
