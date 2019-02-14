var mqtt = require('mqtt')
var client  = mqtt.connect('mqtt://127.0.0.1:15542',{
    clientId: "NODEJS_MQTT",
    username: "test",
    password: "123"
})
 
client.on('connect', function () {
  client.subscribe('test', function (err) {
    if (!err) {
      client.publish('test', 'Hello mqtt')
    }
  })
})
 
client.on('message', function (topic, message) {
  // message is Buffer
  console.log(message.toString())
  client.end()
})