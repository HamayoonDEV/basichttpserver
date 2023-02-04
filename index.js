const http = require("http")

const port  = 8000;

const server = http.createServer();

server.listen(port,(err)=>{
    if(err){
        console.log(err)
        return;
    }else{
        console.log("server is runing on port: ",port)
    }
})