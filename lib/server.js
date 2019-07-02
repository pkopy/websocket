const io = require('socket.io')();
const port = 8000;
const faker = require('faker/locale/pl')

lib = {}
lib.init = () => {
    io.on('connection', (client) => {
        // start emitting events to the client 
        client.on('subscribeToTimer', (interval) => {
            console.log('client is subscribing to timer with interval ', interval);
            setInterval(() => {
                client.emit('timer', {
                    name: faker.name.findName(),
                    address: faker.address.country()
                });
            }, interval);
        });
    });

    io.listen(port)

    console.log('listening on port ', port);
}

module.exports = lib;