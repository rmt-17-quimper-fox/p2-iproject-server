let errorHandler = (err, req, res, next) => {
    if(err === "mailnotfound"){
        res.status(400).json({
            message: "Email is required"
        })
    }
    else if(err === "passnotfound"){
        res.status(400).json({
            message: "Password is required"
        })
    }
    else if(err === "invalidlogin"){
        res.status(401).json({
            message: "Invalid email/password"
        })
    }

    else if(err.name === "SequelizeUniqueConstraintError"){
        res.status(400).json({
            message: "Email must be unique"
        })
    }

    else if(err === "invalidtoken" || err.name === "JsonWebTokenError"){
        res.status(401).json({
            message: "Invalid token"
        })
    }

    else if(err === "datanotfound"){
        res.status(404).json({
            message: "Data not found"
        })
    }

    else if(err === "forbidden"){
        res.status(403).json({
            message: "You are not authorized"
        })
    }

    else if(err === "weighterror"){
        res.status(400).json({
            message: "Weight must be at least 20kg"
        })
    }

    else{
        res.status(500).json({
            message: "Internal server error"
        })
    }
}

module.exports = errorHandler