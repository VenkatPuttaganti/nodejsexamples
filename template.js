var express=require('express');
var app=express();
app.set('view engine','pug');
app.get('/',function(req,res)
{
res.render('index',
{title:'Guru99',message:'Welcome'})
});
var server=app.listen(8090,function() {});