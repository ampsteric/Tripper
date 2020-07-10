const express = require("express");
const router = express.Router();
const Place = require("../models/Place");
const User = require("../models/User");

router.get("/:pid", (req, res) => {
    const placeId = req.params.pid;
    res.send("places Routes");
});

router.get("/user/:uid", async (req, res) => {
    const userId = req.params.uid;

    const place = await Place.findById(userId)
        .then(() => {
            console.log("displaying the places");
        })
        .catch(() => {
            console.log("cannot get places");
        });

    require.json({ place: place.toObjec({ getters: true }) });
});

router.get("/");

router.post("/", async (req, res) => {
    const { title, description, image, creator } = req.body;

    const createdPlace = new Place({
        title,
        description,
        image,
        creator,
    });

    let user;
    try {
        user = await User.findById(creator);
    } catch (err) {
        console.log("creating Place Failed");
    }

    if (!user) {
        console.log("cant find user for provided Id");
    }

    try {
        const sess = await mongoose.startSession();
        sess.startTransaction();
        await createdPlace.save({ session: sess });
        user.places.push(createdPlace);
        await user.save({ session: sess });
        await sess.commoitTransaction();
    } catch (err) {}

    // const result = await createdPlace
    //     .save()
    //     .then(() => {
    //         console.log("place created successfully");
    //     })
    //     .catch(() => {
    //         console.log("Place creation was unsuccessful");
    //     });
    res.json({ place: createdPlace });
});
module.exports = router;
