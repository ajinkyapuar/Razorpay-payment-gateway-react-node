const express = require("express");
const Razorpay = require("razorpay");

const router = express.Router();

router.post("/orders", async (req, res) => {
    try {
        const instance = new Razorpay({
            key_id: "rzp_test_r6FiJfddJh76SI",
            key_secret: "w2lBtgmeuDUfnJVp43UpcaiT",
        });

        const options = {
            amount: 50000,
            currency: "INR",
            receipt: "receipt_order_74394",
        };

        const order = await instance.orders.create(options);

        if (!order) return res.status(500).send("Some error occured");

        res.json(order);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.post("/success", async (req, res) => {
    try {
        const { paymentId, orderId, signature } = req.body;

        res.json({ msg: "success" });
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;
