import express from 'express';
import Datastore from 'nedb';
import Courses from '../db/courses.json'

//an empty object of db datastores/collections/table
let db = {};

//declare express server
const app = express();

//declare nedb Database
//1. for user datastore in the database
db.users = new Datastore('db/users.db');
//2. for courses datastore in the database
db.courses = new Datastore('db/courses.db');
//load the datastore in the database
db.users.loadDatabase();
db.courses.loadDatabase();

//load courses into the database operation
db.courses.remove({}, {multi: true}, function(err, numYankedOff){});
db.courses.insert(Courses, function(err, newCourses){});

app.use(express.json());

/**
 * All Routes
 */
//1. user routes
//signup route
 app.post(`/signup`, async (req, res) => {
     //save the user data and encrypt password as base64 string
    db.users.insert({
        email: req.body.email,
        password: Buffer.from(req.body.password, 'base64'),
    }, function (err, newUser) {
        if (err) res.status(400).json({error: "could not create account"})
        res.json(newUser);
    });
  })

//login route
  app.post('/login', function (req, res) {
      //check if the user exists in the database
      db.users.findOne({email: req.body.email}, function (err, user) {
          if(err) res.status(400).json({error: "could not find your account"})
          //check if the password of the user is correct
          if (user.password.toString('Base64') == req.body.password) {
              res.json({
                  user: user.email,
                  token: Buffer.from(user.email, 'base64')
              })
          } else {
            res.status(400).json({
                error: "please enter correct password"
            });
          }
      });
  })


  //courses route
  app.get(`/courses`, async (req, res) => {
    db.courses.find((req.query.department) ? {department: {$in: [req.query.department, 'general']}} : {} , function (err, newDoc) {
        if (err) res.status(400).json({error: "could not find courses"})
        res.json(newDoc);
    });
  })




// expose the api
export default {
    path: '/api',
    handler: app,
}