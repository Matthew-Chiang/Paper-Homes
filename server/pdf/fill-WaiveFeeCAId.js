const { PDFDocument } = require("pdf-lib");
const fs = require("fs");

async function fillWaiveFeeCaId() {
    const pdfForm = fs.readFileSync("../pdfForms/WaiveFeeCAId.pdf");

    const pdfDoc = await PDFDocument.load(pdfForm, { ignoreEncryption: true });

    const form = pdfDoc.getForm();

    const fields = form.getFields();
    // fields.forEach((field) => {
    //     console.log(field.getName());
    // });
    const name = form.getTextField("Entity Name");
    name.setText("test");

    const pdfBytes = await pdfDoc.save();

    let writeStream = fs.createWriteStream(".temp/filename.pdf");

    writeStream.write(pdfBytes, "base64");

    writeStream.end();
}
