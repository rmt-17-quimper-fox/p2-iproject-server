const errorHandler = (error, req, res, next) => {
    if (error.name == `SequelizeValidatorError`) {
        let arrError = error.errors.map(el =>  el.message )
        res.status(400).json({ message: arrError[0]})
    } else if (error.name == `Error Not Found`) {
        if (!error.message) {
            res.status(404).json({ message: `Error Not Found`})
        } else {
            res.status(404).json({ message: error.message})
        }
    } else if (error.name == "unauthorized" || error.name == "JsonWebTokenError") {
        console.log(error.message);
        res.status(401).json({ message: "Unauthorized"})
    } else if (error.name == `Error Login`) {
        res.status(401).json({ message: `Email and Password does not match`})
    } else if (error.name == `Invalid Token`) {
        res.status(401).json({ message: `Invalid Access Token`})      
    } else if (error.name == `Access Denied`) {
        res.status(403).json({ message: `Forbidden Access. Access Denied`})
    } else if (error.name == `Request Entity Too Large`) {
        res.status(413).json({ message: `File Size Limits` , })
    } else if (error.name == `Unsopported File Type`) {
        res.status(415).json({ message: `File type does not supported` })
    } else {
        console.log(error.message);
        res.status(500).json({ message: `Invalid Server Error`})
    }
}

module.exports = errorHandler