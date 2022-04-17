const express = require('express');
const Server = (port) => {
    const app = express()
    
    app.get('/', (req, res) => {
      res.send('Hello World!')
    })
    
    app.listen(port, () => {
      console.log(` Bot listening on port ${port}`)
    })
}
module.exports = {Server}