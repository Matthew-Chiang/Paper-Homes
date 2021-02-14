const { PDFDocument } = require("pdf-lib");
const fs = require("fs");
var path = require("path");

// parsePDF("Charles Boyle").catch((err) => console.log(err));

async function parsePDF(name) {
    const pdfForm = fs.readFileSync(
        path.resolve(__dirname + "/../pdfForms/WaiveFeeBirthCert.pdf")
    );

    const pdfDoc = await PDFDocument.load(pdfForm);

    const page = pdfDoc.getPage(1);

    page.drawText(name, {
        x: 75,
        y: 555,
        size: 12,
    });

    const currDate = new Date();

    page.drawText(currDate.toDateString(), {
        x: 445,
        y: 375,
        size: 12,
    });

    const form = pdfDoc.getForm();

    const homeless = form.createCheckBox("homeless");
    homeless.addToPage(page, { x: 90, y: 495, width: 10, height: 10 });
    homeless.check();

    const pdfBytes = await pdfDoc.save();

    return new Promise((resolve) => {
        let writeStream = fs.createWriteStream(
            path.resolve(__dirname + "/temp/waiveFeeBirthCert.pdf")
        );

        writeStream.write(pdfBytes, "base64");

        writeStream.on("finish", () => {
            resolve();
        });

        writeStream.end();
    });
}

module.exports = parsePDF;
