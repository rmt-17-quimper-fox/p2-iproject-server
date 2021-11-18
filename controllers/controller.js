const { User, Patient, Room, Class, PatientDetail } = require("../models")
const bcrypt = require('bcryptjs')
const { GenerateToken } = require('../helpers/generateToken')
const { OAuth2Client } = require('google-auth-library');

class Controllers {
    static async register(req, res) {
        try {
            const { email, password } = req.body
            if (!email || !password) {
                res.status(400).json({ message: "Email/password not valid" })
            }
            const check = await User.findOne({ where: { email } })
            if (check) {
                res.status(400).json({ message: "Email already used" })
            } else {
                const result = await User.create({ email, password, role: "Admin" })
                res.status(201).json({ id: result.id, email: result.email });
            }
        } catch (error) {
            res.status(500).json({ message: "Invalid server error" })
        }
    }

    static async login(req, res) {
        try {
            const { email, password } = req.body
            if (!email || !password) {
                res.status(400).json({ message: "Email/password not valid" })
            }
            const result = await User.findOne({
                where: { email }
            });
            if (result) {
                let valid = bcrypt.compareSync(password, result.password)
                if (valid == true) {
                    let payload = { id: result.id, email: result.email }
                    let access_token = GenerateToken(payload)
                    res.status(200).json({ message: 'Succes Login', access_token, role: result.role })
                } else {
                    res.status(400).json({ message: "Email/password not valid" })
                }
            } else {
                res.status(400).json({ message: "Email/password not valid" })
            }
        } catch (err) {
            res.status(500).json({ message: "Invalid server error" })
        }
    }

    static async googleSignin(req, res) {
        try {
            const { id_token } = req.body;
            const client_id = "130915091584-nkeah9r7afr7c6i0hcg9m2e1qmaapan9.apps.googleusercontent.com"
            const client = new OAuth2Client(client_id);
            const ticket = await client.verifyIdToken({
                idToken: id_token,
                audience: client_id,
            });
            const payload = ticket.getPayload();
            const { email, name } = payload
            const password = (Math.random() + 1).toString(36).substring(4);
            let access_token = GenerateToken(payload)
            const check = await User.findOne({ where: { email } })
            if (check) {
                res.status(201).json({ access_token });
            } else {
                const result = await User.create({ email, password, role: "User", username: name });
                res.status(201).json({ id: result.id, email: result.email, access_token });
            }
        } catch (err) {
            res.status(500).json({ message: "Invalid server error" })
        }
    }

    static async newPatient(req, res) {
        try {
            const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            const date = new Date()
            const createdAt = date.toLocaleDateString('id-ID',options)
            const UserId = req.user.id
            const { name, age, gender, ClassId } = req.body
            const newPatient = await Patient.create({ name, age, gender, UserId, ClassId, createdAt })
            const details = await PatientDetail.create({heartrate:80, SpO2:98, PatientId: newPatient.id})
            const myclass = await Class.findOne({ where: { id: ClassId } })
            const room = await Room.create({ name: name, PatientId: newPatient.id, ClassId: ClassId })
            res.status(201).json({ massage: "Success added new patient", class: myclass.name, roomNumber: `${myclass.name}-${room.id}` });
        } catch (error) {
            res.status(500).json({ message: "Invalid server error" })
        }
    }

    static async deletePatient(req, res) {
        try {
            const { id } = req.params
            await Patient.destroy({ where: { id } })
            res.status(200).json({ message: `success deleted patient id: ${id}` })
        } catch (error) {
            res.status(500).json({ message: "Invalid server error" })
        }
    }

    static async updatePatient(req, res) {
        try {
            const { id } = req.params
            const { name, age, gender } = req.body
            const updated = await Patient.update({ name, age, gender }, { where: { id }, returning: true })
            res.status(200).json(updated[1])
        } catch (error) {
            res.status(500).json({ message: "Invalid server error" })
        }
    }

    static async readPatient(req, res) {
        try {
            const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            const date = new Date()
            const createdAt = date.toLocaleDateString('id-ID',options)
            const patients = await Patient.findAll({
                where: {
                   createdAt
                  },
                  include: [{
                    model: Class,
                  }]
                });
            res.status(200).json(patients)
        } catch (error) {
            res.status(500).json({ message: "Invalid server error" })
        }
    }

    static async readPatientDetail(req, res) {
        try {
            const { id } = req.params
            console.log(id);
            const detail = await PatientDetail.findAll({where: {PatientId:id}, include: [{
                model: Patient,
              }]
            });
            res.status(200).json(detail)
        } catch (error) {
            res.status(500).json({ message: "Invalid server error" })
        }
    }
}


module.exports = Controllers