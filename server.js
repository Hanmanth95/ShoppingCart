var express=require('express');
var app=express();
var mn=require('mongodb').MongoClient;
var path=require('path');
var bodyParser=require('body-parser');
var mongoose=require("mongoose");
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,'/dist/')))
var dbo;
mn.connect("mongodb://Hanmanth:hanmanth95@ds245971.mlab.com:45971/hanmanthshopping",function(err,db)
{
    if(err) throw err;
    dbo=db.db('hanmanthshopping');
})
app.get('/men-clothing',function(req,res)
{
    dbo.collection('menclothing').find().toArray(function(err,data)
{
    if(err) throw err;
    res.send(data);
})
})
app.get('/home',function(req,res)
{
    dbo.collection('homemen').find().toArray(function(err,data1)
{
    if(err) throw err;
    res.send(data1);
})
})
app.get('/mencloths',function(req,res)
{

    dbo.collection('cartcollection').find().toArray(function(err,data1)
{
   
    if(err) throw err;
    res.send(data1);
})
})
app.post('/user-signup',(req,res)=>{
    
    dbo.collection('userRegistration').insert(req.body,(err,result)=>{
        if(err) throw err;
       
    })
    res.send(JSON.stringify('Registered Successfully'))
})
app.post('/men',function(req,res){
    console.log(req.body);
    dbo.collection('cartcollection').insert(req.body,(err,result)=>{
        if(err) throw err;
        console.log(result);
    })
     res.send(JSON.stringify('Added to cart Successfully'));
})
app.post('/user-login',function(req,res)
{
    var name=req.body.name;
    var pw=req.body.pwd;
  
    dbo.collection('userRegistration').findOne({"name":name,"pwd":pw},
    (err,result)=>{
        
if(err) throw err;
if(result===null)
{
    res.send(JSON.stringify("Invalid User"));

}
if(result!==null)
{
    res.send(JSON.stringify("User Exists"));
}
    

})
});
app.delete("/del/:id",(req,res)=>{
    console.log(req.params.id)

dbo.collection("cartcollection").deleteOne({"_id":req.params.id},(err,result)=>{
    if(err) throw err;
    dbo.collection("cartcollection").find().toArray((err,result)=>{
        if (err) throw err;
        res.send(result);
    })
})
    
})
app.listen(5000);