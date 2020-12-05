const app = require('express')()
const consign = require('consign')

consign()
  .then('./config/middlewares.js')
  .then('./api')
  .then('./router/routes/routes.js')
  .into(app) 

app.listen(3000, () => {
  console.log('Backend executando...')
})