const { Patient } = require('../models')

const authorization = async (req, res, next) => {
    try {
        const { id } = req.params
        const { role } = req.user
        const patient = await Patient.findByPk(id)
        if (!patient) {
            res.status(404).json({ message: "patient not found" })
        } else {
            if (role === 'Admin') {
                next()
            } else {
                res.status(403).json({ message: "access denied you don't have permission to access" })
            }
        }
    } catch (err) {
        res.status(500).json({ message: "Invalid server error" })
    }
}

const auth_getdata = async (req, res, next) => {
    try {
        const { role } = req.user
        if (role === 'Admin') {
            next()
        } else {
            res.status(403).json({ message: "access denied you don't have permission to access" })
        }
    } catch (err) {
        res.status(500).json({ message: "Invalid server error" })
    }
}


module.exports = { authorization, auth_getdata }