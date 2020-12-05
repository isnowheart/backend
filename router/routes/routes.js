const Router = require('express').Router()
 
module.exports = app => {
  Router.post('/users',app.api.user.save)
}