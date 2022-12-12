const router = require("express").Router();
const User = require("../models/User.js");


var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

router.post("/add", async (req, res) => {
    
    const email = req.body.email;
    
    const testUser = await User.find({ email: email });
    
    if (testUser) {

        if(testUser.month === months[new Date().getMonth()])
        {
            console.log("You have already registered for this month");
            return res.status(401).send("You have already registered for this month");
        }
    }

    

    const user = new User({
        name: req.body.name,
        address: req.body.address,
        contact: req.body.contact,
        email: req.body.email,
        batch: req.body.batch,
    });
    try {
        const savedUser = await user.save();
        res.send(savedUser);
    } catch (err) {
        res.status(400).send
    }
});

router.get("/all", async (req, res) => {
    try {
        const users = await User.find();
        res.send(users);
    } catch (err) {
        res.status(400).send
    }
});

module.exports = router;
