var express = require("express");
var router = express.Router();
let parsePDF = require("../pdf/fill-WaiveFeeBirthCert");
var path = require("path");

/* GET pdf listing. */
router.get("/waiveFeeBirthCert/:name", function (req, res, next) {
    const name = req.params.name;
    res.contentType("application/pdf");
    var appDir = path.dirname(require.main.filename);
    parsePDF(name)
        .then(() => {
            res.status(200).sendFile(
                path.resolve(__dirname + "/../pdf/temp/waiveFeeBirthCert.pdf")
            );
        })
        .catch((e) => {
            console.log(e);
        });
    // res.status(200).sendFile(
    //     path.resolve(__dirname + "/../pdf/temp/waiveFeeBirthCert.pdf"),
    //     {},
    //     (err) => {
    //         console.log("adsf");
    //         console.log(err);
    //     }
    // );
});

module.exports = router;
