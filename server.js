const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));


mongoose.connect("mongodb+srv://Pragra:Pragra123-$@cluster0.jfhji.mongodb.net/studentpage", { useNewUrlParser: true },  {useUnifiedTopology: true })

const notesSchema = {
    firstName: String,
    lastName: String,
    dateOfbirth: String,
    email: String,
    phone: Number,
    gender: String,
    purpose: String
    
}

const Note = mongoose.model("students", notesSchema);

app.get("/", function(req, res) 
{
    res.sendFile(__dirname + "/student page.html");
})

//app.post
app.post("/", function(req, res){
    let newNote = new Note({

        firstName: req.body.firstName,
        lastName: req.body.lastName,
        dateOfbirth: req.body.dateOfbirth,
        email: req.body.email,
        phone: req.body.phone,
        gender: req.body.gender,
        purpose:req.body.purpose
       
    });
    newNote.save();
    res.redirect('/');
})
app.listen(3000, function() {

    console.log("server is running on 3000");

})
