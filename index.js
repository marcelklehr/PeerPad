var smoke = require('smokesignal')
  , REdit = require('r-edit')

var textarea = document.getElementById('text')
var r = REdit()
r.wrap(textarea)

var node = smoke.createNode({
  port: 8495
, address: /*window.prompt('IP address') || */smoke.localIp('192.168.2.1/255.255.255.0') // Tell it your subnet and it'll figure out the right IP for you
, seeds: [{port: 8495, address:'192.168.2.101'}] // the address of a seed (a known node)
, logger: {info: log, debug: log}
})
function log(msg) {var p = document.createElement('p'); p.textContent=msg; var log = document.getElementById('log'); log.insertBefore(p, log.firstChild)}

node.peers.on('add', function(peer) {
  
})

node.broadcast.pipe(r.createStream()).pipe(node.broadcast)

node.start()