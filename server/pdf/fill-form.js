const { PDFDocument } = require("pdf-lib");
const fs = require("fs");

parsePDF().catch((err) => console.log(err));

async function parsePDF() {
    const pdfForm = fs.readFileSync("../pdfForms/WaiveFeeCAId-test.pdf");

    const pdfDoc = await PDFDocument.load(pdfForm, { ignoreEncryption: true });

    const form = pdfDoc.getForm();

    const fields = form.getFields();
    // fields.forEach((field) => {
    //     console.log(field.getName());
    // });
    const name = form.getTextField("Entity Name");
    name.setText("test");

    const pdfBytes = await pdfDoc.save();

    let writeStream = fs.createWriteStream("filename.pdf");

    writeStream.write(pdfBytes, "base64");

    writeStream.on("finish", () => {
        console.log("saved");
    });

    writeStream.end();
}
