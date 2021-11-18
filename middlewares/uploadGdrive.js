const { response } = require('express')
const { google } = require('googleapis')

const clientId = "979459015479-lufji34ucml3sb057u1srga7bshrfrid.apps.googleusercontent.com"
const clientSecret = "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"
const redirectURI = 'https://developers.google.com/oauthplayground'
const refreshToken = '1//044WUDWtGPqe1CgYIARAAGAQSNwF-L9Ir6KRSAWllgV6GUBMVsc6E6c6x5kaZed60w4A4zUU65M97ACxlt4ZthhjjhWDPAtLARzM'

const oauth2Client = new google.auth.OAuth2(
    clientId, clientSecret, redirectURI
)

oauth2Client.setCredentials({
    refresh_token: refreshToken
})

const drive = google.drive({
    version: 'v3',
    auth: oauth2Client
})

const randomName = (Math.random() + 1).toString(36).substring(2)

let uploadImageToDrive = async (req,res,next) => {
    try {
        if (req.file.size > 1000000) {
            throw { name: 'max file error' };
        }
      
        if (req.file.mimetype !== 'image/png' && req.file.mimetype !== 'image/jpeg') {
            throw { name: 'invalid format' };
        }
        // console.log(req.file)
        let stream = require('stream');
        let bufferStream = new stream.PassThrough();
        let fileObject = req.file;
        bufferStream.end(fileObject.buffer);
        const response = await drive.files.create({
            requestBody: {
                name: randomName,
                mimeType: req.file.mimetype
            },
            media: {
                mimeType: req.file.mimetype,
                body: bufferStream,
            },
            fields: 'id',
        })

        if(response){
            await drive.permissions.create({
                fileId: response.data.id,
                requestBody: {
                    role: 'reader',
                    type: 'anyone'
                }
            })
            const result = await drive.files.get({
                fileId: response.data.id,
                fields: 'webViewLink'
            })
            req.body.photo = result.data.webViewLink
            next()
        }    
    } 
    catch (err) {
        next(err)
    }
}

module.exports = uploadImageToDrive