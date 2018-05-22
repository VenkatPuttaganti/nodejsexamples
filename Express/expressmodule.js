var express=require('express');
var app=express();
app.set('view emngine','jade');
app.get('/',function(req,res)
{
	res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello World!!!');
});
var server=app.listen(8090,function()
{
	console.log("testing");
});