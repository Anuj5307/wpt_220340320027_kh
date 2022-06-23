let dbparams={
        host: 'localhost',
        user: 'root',
        password: 'cdac',
        database: 'hazaribagh',
        port:3306
};
const mysql=require('mysql2');
const con = mysql.createConnection(dbparams);
const express=require('express');
const app=express();
app.use (express.satic("CM"));


app.get("/getbook",(req,resp)=>{
    let input=req.query.x;
    console.log(input);
    let output={bookidfoundstatus:false,bookdetails:{bookid:1, bookname:'math',price:400}};
    con.query('select * from books where bookid=?',[input],(error,rows)={
        if(row.length>0)
        {
            output.bookidfoundstatus=true;
            output.bookidfoundstatus=rows[0];

        }
        resp.send(output);
    });
});
app.get("/updatebook",(req,resp)=>{
    let output=false;
    let input={bookid:req.query.bookno,bookname:req.query.bookname,price:req.price};
    console.log(input);
    con.query('updatebook set bookid=?, price=? where bookid=?',[input.bookname,input.price,input.bookid],
    (error, whathappentoinsert)={
        if(error)
        {
        }
        else if(whathappentoinsert.affectedRow>0){
            output=true;
            resp.send(output);}

        });
        resp.send(output);
    });
});
app.listen(1000,function(){
    console.log("server listen at port 1000")
});