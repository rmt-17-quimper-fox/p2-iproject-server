const { Patient, PatientDetail } = require("../models")
const axios = require('axios')
const { Op } = require('sequelize')
const patientdetail = require("../models/patientdetail")

class ControllerApi {
    static getNews(req, res) {
        axios({
            method: "get",
            url: "https://newsapi.org/v2/top-headlines",
            headers: {
                'x-api-key': "d3e28970aeda4779b950fcd68e9ce40f",
            },
            params: {
                country: "id",
                category: "health",
            }
        })

            .then(({ data }) => {
                
                res.status(200).json(data)
            })
            .catch(err => {
                res.status(500).json({ message: "Invalid server error" })
            })
    }

    static async getCharts(req, res) {
        const vip_m = await Patient.count({
            where: {
                [Op.and]: [
                    { ClassId: 1 },
                    { createdAt: { [Op.like]: '%Minggu%' } }
                ]
            }
        })
        const vip_s = await Patient.count({
            where: {
                [Op.and]: [
                    { ClassId: 1 },
                    { createdAt: { [Op.like]: '%Senin%' } }
                ]
            }
        })
        const vip_sl = await Patient.count({
            where: {
                [Op.and]: [
                    { ClassId: 1 },
                    { createdAt: { [Op.like]: '%Selasa%' } }
                ]
            }
        })
        const vip_r = await Patient.count({
            where: {
                [Op.and]: [
                    { ClassId: 1 },
                    { createdAt: { [Op.like]: '%Rabu%' } }
                ]
            }
        })
        const vip_k = await Patient.count({
            where: {
                [Op.and]: [
                    { ClassId: 1 },
                    { createdAt: { [Op.like]: '%Kamis%' } }
                ]
            }
        })
        const satu_m = await Patient.count({
            where: {
                [Op.and]: [
                    { ClassId: 3 },
                    { createdAt: { [Op.like]: '%Minggu%' } }
                ]
            }
        })
        const satu_s = await Patient.count({
            where: {
                [Op.and]: [
                    { ClassId: 3 },
                    { createdAt: { [Op.like]: '%Senin%' } }
                ]
            }
        })
        const satu_sl = await Patient.count({
            where: {
                [Op.and]: [
                    { ClassId: 3 },
                    { createdAt: { [Op.like]: '%Selasa%' } }
                ]
            }
        })
        const satu_r = await Patient.count({
            where: {
                [Op.and]: [
                    { ClassId: 3 },
                    { createdAt: { [Op.like]: '%Rabu%' } }
                ]
            }
        })
        const satu_k = await Patient.count({
            where: {
                [Op.and]: [
                    { ClassId: 3 },
                    { createdAt: { [Op.like]: '%Kamis%' } }
                ]
            }
        })

        const dua_m = await Patient.count({
            where: {
                [Op.and]: [
                    { ClassId: 2 },
                    { createdAt: { [Op.like]: '%Minggu%' } }
                ]
            }
        })
        const dua_s = await Patient.count({
            where: {
                [Op.and]: [
                    { ClassId: 2 },
                    { createdAt: { [Op.like]: '%Senin%' } }
                ]
            }
        })
        const dua_sl = await Patient.count({
            where: {
                [Op.and]: [
                    { ClassId: 2 },
                    { createdAt: { [Op.like]: '%Selasa%' } }
                ]
            }
        })
        const dua_r = await Patient.count({
            where: {
                [Op.and]: [
                    { ClassId: 2 },
                    { createdAt: { [Op.like]: '%Rabu%' } }
                ]
            }
        })
        const dua_k = await Patient.count({
            where: {
                [Op.and]: [
                    { ClassId: 2 },
                    { createdAt: { [Op.like]: '%Kamis%' } }
                ]
            }
        })
        axios({
            method: "post",
            url: "https://quickchart.io/chart/create",
            headers: {
                'Content-Type': 'application/json'
            },
            data: {
                chart: {
                    type: "bar",
                    data: {
                        labels: [
                            "Minggu",
                            "Senin",
                            "Selasa",
                            "Rabu",
                            "Kamis",
                        ],
                        datasets: [
                            {
                                "type": "line",
                                "label": "I-Class",
                                "borderColor": "rgb(54, 162, 235)",
                                "borderWidth": 2,
                                "fill": false,
                                "data": [
                                    satu_m,
                                    satu_s,
                                    satu_sl,
                                    satu_r,
                                    satu_k,
                                ]
                            },
                            {
                                "type": "line",
                                "label": "II-Class",
                                "borderColor": "rgb(255, 205, 86)",
                                "borderWidth": 2,
                                "fill": false,
                                "data": [
                                    dua_m,
                                    dua_s,
                                    dua_sl,
                                    dua_r,
                                    dua_k,
                                ]
                            },
                            {
                                "type": "line",
                                "label": "VIP-Class",
                                "borderColor": 'rgb(255, 99, 132)',
                                "borderWidth": 2,
                                "fill": false,
                                "data": [
                                    vip_m,
                                    vip_s,
                                    vip_sl,
                                    vip_r,
                                    vip_k,
                                ]
                            },
                        ]
                    },
                    options: {
                        responsive: true,
                        title: {
                            display: true,
                            text: "Chart.js Combo Bar Line Chart"
                        },
                        tooltips: {
                            mode: "index",
                            intersect: true
                        }
                    }
                }
            }
        })

            .then(({ data }) => {
                res.status(200).json(data)
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }

    static async uploadData(req, res) {
        const { id } = req.params
        const hearthrate = await axios.get("http://192.168.43.47/heartrate")
        const SpO2 = await axios.get("http://192.168.43.47/spo2")
        const detail = await PatientDetail.create({ heartrate:hearthrate.data, SpO2:SpO2.data, PatientId: id })
        res.status(201).json({detail})
    }
}


module.exports = ControllerApi