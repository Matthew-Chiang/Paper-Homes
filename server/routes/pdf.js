var express = require("express");
var router = express.Router();
// import { parsePDF } from "../pdf/fill-WaiveFeeBirthCert";
let parsePDF = require("../pdf/fill-WaiveFeeBirthCert");
var path = require("path");

/* GET pdf listing. */
router.get("/waiveFeeBirthCert", function (req, res, next) {
    res.contentType("application/pdf");
    var appDir = path.dirname(require.main.filename);
    parsePDF("name here").catch((e) => {
        console.log(e);
    });
    res.status(200).sendFile(
        path.resolve(__dirname + "/../pdf/temp/waiveFeeBirthCert.pdf")
    );
});

module.exports = router;
