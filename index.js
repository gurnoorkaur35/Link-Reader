const fs = require("fs");
const pdfparser = require("pdf-parse");

 //Creating constant to input the PDF file and the no of pages to extract content from
const getPDFText = async(pdfFile, maxPages) => {
    let pdfBuffer = null;
    let parsedPDF = ""
    try {
        if(fs.existsSync(pdfFile)){
            pdfBuffer = fs.readFileSync(pdfFile)
            if(maxPages){
                parsedPDF = await pdfparser(pdfBuffer, {
                    max:maxPages
                })
            } else{
                parsedPDF = await pdfparser(pdfbuffer);
                } 
                if(parsedPDF){//null-check
                    return parsedPDF.text
                } 
            }
    } catch (error) {
        return error.message   
    }
}

getPDFText("samplefile.pdf",1)//inputting my sample file
    .then((text) => {
        console.log(text);
    })
    .catch((errMsg) => {
        console.log(errMsg);
    });