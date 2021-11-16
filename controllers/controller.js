const { Account, User, TourPackage, BookTrip } = require("../models");
const env = require("dotenv").config();
const axios = require("axios");
const jwt = require("jsonwebtoken");
const { passHelper, jwtHelper } = require("../helper/helper");
const { weather, currency } = require("../apis/weatherApi");

class Controller {
  static async currencyApi(req, res, next) {
    try {
      console.log("CURRECY");
      let getCurency = await currency();
      let curr = +getCurency.data.data.IDR.toString().split(".")[0];
      res.status(200).json(curr);
      console.log();
    } catch (err) {
      next(err);
    }
  }

  static async register(req, res, next) {
    try {
      //   console.log(req);
      const { name, email, password, alamat, telephone } = req.body;
      console.log(name);
      let obj = {
        name,
        alamat,
        telephone,
      };
      let response = await Account.create(obj);
      let obj1 = {
        name,
        email,
        password: passHelper.hashPassword(password),
        role: "customer",
        AccountId: response.id,
      };
      let response1 = await User.create(obj1);
      console.log(response1, "responsenya ini");
      if (response1) {
        res.status(201).json({
          id: response1.id,
          name: response1.name,
          email: response1.email,
          role: "customer",
        });
      }
    } catch (err) {
      if (err.name === "SequelizeUniqueConstraintError") {
        res.status(400).json({
          statusCode: 400,
          error: `Email dan username sudah terdaftar`,
        });
      } else if (err.name === "SequelizeValidationError") {
        const error = err.errors.map((el) => el.message);
        res.status(400).json({ statusCode: 400, error: error[0] });
      } else {
        res.status(500).json({ message: err });
      }
    }
  }

  static async login(req, res, next) {
    try {
      const { email, password } = req.body;
      let user = await User.findOne({
        where: {
          email: email,
        },
      });

      if (user && passHelper.checkPass(password, user.password)) {
        let tokenPayload = { id: user.id, email: user.email, role: user.role };
        let access_token = jwtHelper.signPl(tokenPayload);

        res.status(200).json({
          id: user.id,
          email: user.email,
          role: user.role,
          access_token: access_token,
        });
      } else {
        throw { name: "unauthorized", message: "You dont have an access" };
      }
    } catch (err) {
      console.log(err);
      next(error);
    }
  }

  static async data(req, res, next) {
    try {
      const response = await TourPackage.findAll({
        order: [["id", "ASC"]],
      });
      if (!response) {
        throw { name: "notFound", message: "Not Found Item" };
      } else {
        for await (let e of response) {
          let wet = await weather(e.destinationName);
          let temp = wet.data.main.temp - 273;
          let slice = +temp.toString().split(".")[0];
          response[e.id - 1].temperature = slice;
        }
        res.status(200).json(response);
      }
    } catch (err) {
      console.log(err);
      next(error);
    }
  }

  static async dataById(req, res, next) {
    try {
      const response = await TourPackage.findAll({
        where: {
          id: req.params.id,
        },
      });
      if (!response) {
        throw { name: "notFound", message: "Not Found Item" };
      }
      const responseWeather = await weather(response[0].destinationName);
      let temp = responseWeather.data.main.temp - 273;
      let slice = +temp.toString().split(".")[0];
      response[0].temperature = slice;

      res.status(200).json(response);
    } catch (err) {
      console.log(err);
      next(error);
    }
  }

  static async deleteCart(req, res, next) {
    try {
      const response = await BookTrip.destroy({
        where: {
          UserId: req.user.id,
          TourPackageId: req.body.MovieId,
        },
      });
      if (!response) {
        throw { name: "notFound", message: "Not Found Item" };
      } else {
        res.status(200).json(response);
      }
    } catch (err) {
      console.log(err);
      next(error);
    }
  }

  static async addbook(req, res, next) {
    try {
      // console.log(req, "DI CONTROLER NYA ADD BOOK");
      const response0 = await BookTrip.findAll({
        where: {
          UserId: req.user.id,
          TourPackageId: req.body.TourPackageId,
        },
      });
      // console.log(response0[0], "RSPON ZEROs");
      if (response0.length != 0) {
        let seatBefore = response0[0].pax;
        let seatAfter = seatBefore + Number(req.body.pax);
        let addSeat = await BookTrip.update(
          { pax: seatAfter },
          {
            where: {
              UserId: req.user.id,
              TourPackageId: req.body.TourPackageId,
            },
          }
        );
        console.log(addSeat);
        console.log("EHEHEH");
      } else {
        let obj = {
          TourPackageId: req.body.TourPackageId,
          UserId: req.user.id,
          pax: req.body.pax,
        };
        const response = await BookTrip.create(obj);
        if (!response) {
          throw { name: "notFound", message: "Not Found Item" };
        } else {
          res.status(200).json(response);
        }
      }
    } catch (err) {
      console.log(err);
      next(error);
    }
  }

  static async dataByUser(req, res, next) {
    try {
      const response = await BookTrip.findAll({
        include: [
          {
            model: User,
          },
          {
            model: TourPackage,
          },
        ],
        where: {
          UserId: req.user.id,
        },
      });

      if (!response) {
        throw { name: "notFound", message: "Not Found Item" };
      } else {
        // console.log(response[0]);
        for await (let e of response) {
          let wet = await weather(e.TourPackage.destinationName);
          // console.log(e.TourPackage);
          let temp = wet.data.main.temp - 273;
          let slice = +temp.toString().split(".")[0];
          e.TourPackage.temperature = slice;
        }

        res.status(200).json(response);
      }
    } catch (err) {
      console.log(err);
      next(error);
    }
  }

  static async addSeat(req, res, next) {
    try {
      const { id, seatBook } = req.body;
      let tour = await TourPackage.findOne({
        where: {
          id,
        },
      });
      console.log(tour);
      if (!tour) {
        throw { name: "notFound", message: "cant fidn the tour" };
      }

      // console.log(tour.availableSeat, "INI SEAT SKRG");
      // console.log(seatBook, "DATA YANG DITAMBAH");
      let addingSeat = tour.availableSeat + Number(seatBook);
      //tambahin seatnya

      let addSeat = await TourPackage.update(
        { availableSeat: addingSeat },
        { where: { id } }
      );

      // res.status(200).json(addSeat);

      if (addingSeat.length != 0) {
        res.status(200).json({
          tourId: id,
          message: "successfuly adding seat",
          availableSeat: addingSeat,
        });
      } else {
        throw { name: "badRequest", message: "failed on adding seat" };
      }
    } catch (err) {
      next(error);
    }
  }

  static async reduceSeat(req, res, next) {
    try {
      console.log(req, "ini 249");
      const { id, seatBook } = req.body;
      console.log(id, seatBook, "INI DI 250");
      let tour = await TourPackage.findOne({
        where: {
          id,
        },
      });

      if (!tour) {
        throw { name: "notFound", message: "cant fidn the tour" };
      } else if (tour.availableSeat == 0) {
        throw { name: "badRequest", message: "Seat is already Empty" };
      }

      let addingSeat = tour.availableSeat - Number(seatBook);

      //tambahin seatnya
      let addSeat = await TourPackage.update(
        { availableSeat: addingSeat },
        { where: { id } }
      );
      console.log(addSeat, "INI SETELAH REDUCING");
      // res.status(200).json(addSeat);

      if (addingSeat.length != 0) {
        res.status(200).json({
          tourId: id,
          message: "successfuly reduce seat",
          availableSeat: addingSeat,
        });
      } else {
        throw { name: "badRequest", message: "failed on reduce seat" };
      }
    } catch (err) {
      next(error);
    }
  }
  static async currency(req, res, next) {
    try {
      console.log(req, "ini 249");
      const { id, seatBook } = req.body;
      console.log(id, seatBook, "INI DI 250");
      let tour = await TourPackage.findOne({
        where: {
          id,
        },
      });

      if (!tour) {
        throw { name: "notFound", message: "cant fidn the tour" };
      } else if (tour.availableSeat == 0) {
        throw { name: "badRequest", message: "Seat is already Empty" };
      }

      let addingSeat = tour.availableSeat - Number(seatBook);

      //tambahin seatnya
      let addSeat = await TourPackage.update(
        { availableSeat: addingSeat },
        { where: { id } }
      );
      console.log(addSeat, "INI SETELAH REDUCING");
      // res.status(200).json(addSeat);

      if (addingSeat.length != 0) {
        res.status(200).json({
          tourId: id,
          message: "successfuly reduce seat",
          availableSeat: addingSeat,
        });
      } else {
        throw { name: "badRequest", message: "failed on reduce seat" };
      }
    } catch (err) {
      next(error);
    }
  }
}

module.exports = Controller;
