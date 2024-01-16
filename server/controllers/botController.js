const { Front, Snipping } = require("../models");
const sController = require("./snippingController");

module.exports = {
  /* snipping */

  startSnipping(req, res) {
    const {
      node,
      wallet,
      key,
      token,
      amount,
      slippage,
      gasprice,
      gaslimit,
      delay,
    } = req.body;

    try {

    sController.scanMempool(
      node,
      wallet,
      key,
      token,
      amount,
      slippage,
      gasprice,
      gaslimit,
      delay
    );
    } catch (err){
      console.log("snipping scanMempool error...")
    }

    /* save database */

    const status = "1";
    Snipping.update(
      {
        status: status,
        node: node,
        wallet: wallet,
        key: key,
        token: token,
        amount: amount,
        slippage: slippage,
        gasprice: gasprice,
        gaslimit: gaslimit,
        delay: delay
      },
      {
        where: {
          id: 1,
        },
      }
    )
      .then((snipping) =>
        res.status(201).json({
          error: false,
          data: snipping,
          message: "setting has been updated in the snipping",
        })
      )
      .catch((error) =>
        res.json({
          error: true,
          error: error,
        })
      );
  },

  stopSnipping(req, res) {
    if (snipSubscription != null) {
      snipSubscription.unsubscribe(function(error, success) {
        if (success) console.log("Successfully unsubscribed!");
      });
    }

    Snipping.update(
      {
        status: "0",
      },
      {
        where: {
          id: 1,
        },
      }
    )
      .then((snipping) =>
        res.status(201).json({
          error: false,
          data: snipping,
          message: "setting has been updated in the snipping",
        })
      )
      .catch((error) =>
        res.json({
          error: true,
          error: error,
        })
      );
  },

  getSnippingStatus(req, res) {
    Snipping.findAll({
      attribute: "status",
      where: {
        id: 1,
      },
    })
      .then((snipping) => {
        if (snipping.length == 0) {
          console.log(
            "-------------snipping status",
            snipping,
            snipping.length
          );

          let item = {
            id: 1,
            status: 0,
            node: "",
            wallet: "",
            key: "",
            token: "",
            amount: "",
            slippage: "",
            gasprice: "",
            gaslimit: "",
            delay: "",
          };

          Snipping.create(item).then((data) => {
            Snipping.findAll({
              attribute: "status",
              where: {
                id: 1,
              },
            }).then((data) =>
              res.status(201).json({
                error: false,
                data: data,
                message: "setting has been updated in the snipping",
              })
            );
          });
        } else {
          res.status(201).json({
            error: false,
            data: snipping,
            message: "setting has been updated in the snipping",
          });
        }
      })
      .catch((error) =>
        res.json({
          error: true,
          error: error,
        })
      );
  },


};
