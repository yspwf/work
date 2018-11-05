var app = require('http').createServer(handler).listen(8080);

var io = require('socket.io').listen(app);
var fs = require('fs');


function handler(req, res){
    fs.readFile(__dirname+'/index.html', function(err, data){
        if(err){
            res.writeHead(500);
            return res.end('Error loading index.html');
        }
        res.writeHead(200, {'Content-Type':'text/html'});
        res.end(data);
    });
}


io.on('connection', function(socket){
        //console.log('connect');
        // socket.emit('news', {hello:'world'});
        // socket.on('data', function(data){
        //     console.log(data);
        // });


        // socket.on('sendMessage', function(data){
        //     console.log(data);
        //     data.id = socket.id;
        //     socket.emit('sendMessage', data);
        // });

        // socket.on('sendMessage', function(data){
        //     //console.log(data);
        //     socket.emit('showMessage', data);
        // })
        socket.on('sendMessage',function(data){
            //io.sockets.emit('receiveMessage',data);
            io.emit('receiveMessage',data);
        })

});