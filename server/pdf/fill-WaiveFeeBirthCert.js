const { PDFDocument } = require("pdf-lib");
const fs = require("fs");

// parsePDF("Charles Boyle").catch((err) => console.log(err));

async function parsePDF(name) {
    const pdfForm = fs.readFileSync("../pdfForms/WaiveFeeBirthCert.pdf");

    const pdfDoc = await PDFDocument.load(pdfForm, { ignoreEncryption: true });

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

    let writeStream = fs.createWriteStream("./temp/waiveFeeBirthCert.pdf");

    writeStream.write(pdfBytes, "base64");

    writeStream.end();
}

module.exports = parsePDF;
