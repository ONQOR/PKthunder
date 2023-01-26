const http = require('http');
const {
    Template
} = require("@walletpass/pass-js");
const fs = require('fs');
const {
    pw
} = require('./passTemplate/credentials')

const hostname = '127.0.0.1';
const port = 3000;

const template = new Template("eventTicket", {
    teamIdentifier: "ONQOR",
    backgroundColor: "black",
    foregroundColor: 'white',
    eventTicket: {
        primaryFields: [
            {
                key: 'event',
                label: 'EVENT',
                value: 'Biness'
            }
        ],
        secondaryFields: [
            {
                key: 'event',
                label: 'EVENT',
                value: 'Carton'
            }
        ]
    },
    sharingProhibited: false
});
const server = http.createServer(async (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');

    try {
        await template.images.add("icon", './passTemplate/icon.png')
        await template.images.add("logo", './passTemplate/logo.png')

        await template.loadCertificate(
            './passTemplate/com.onqor.passbook.pem',
            pw
        );
        const pass = template.createPass({
            passTypeIdentifier: 'com.onqor.passbook',
            serialNumber: "123456",
            description: "This is a business Card made by ONQOR",
            organizationName: 'ONQOR',
        });
        const buf = await pass.asBuffer();
        await fs.writeFile("./onqor.pkpass", buf, async function (err, result) {
            if (err) console.log('error', err);
        });
        res.end('Pass generated');
    } catch (e) {
        console.log(e)
        res.statusCode = 500;
        res.end('Error generating pass');
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});