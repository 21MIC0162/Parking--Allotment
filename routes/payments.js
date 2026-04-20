import dotenv from "dotenv";
dotenv.config();
import express from "express";
import { verifyToken } from "../middleware/auth.js";
import Booking from "../models/Booking.js";
import Payment from "../models/Payment.js";

const router = express.Router();

// Simple test payment endpoint
router.post("/test-payment", verifyToken, async (req, res) => {
  try {
    console.log("Test payment request:", req.body);
    console.log("User:", req.user._id);
    
    const { bookingId, amount } = req.body;
    
    if (!bookingId) {
      return res.status(400).json({ success: false, message: "Booking ID required" });
    }
    
    const booking = await Booking.findById(bookingId).populate('parkingLot');
    if (!booking) {
      return res.status(404).json({ success: false, message: "Booking not found" });
    }
    
    console.log("Found booking:", booking._id);
    
    // Create payment record
    const payment = new Payment({
      booking: booking._id,
      user: req.user._id,
      amount: booking.totalAmount,
      status: 'completed',
      paymentMethod: 'razorpay'
    });
    await payment.save();
    
    // Update booking
    booking.status = "confirmed";
    booking.paymentStatus = "paid";
    await booking.save();
    
    console.log("Payment and booking updated successfully");
    
    res.json({
      success: true,
      message: "Test payment completed successfully",
      booking: {
        id: booking._id,
        status: booking.status,
        paymentStatus: booking.paymentStatus,
        amount: booking.totalAmount
      },
      payment: {
        id: payment._id,
        amount: payment.amount,
        status: payment.status
      }
    });
    
  } catch (error) {
    console.error("Test payment failed:", error);
    res.status(500).json({
      success: false,
      message: "Test payment failed",
      error: error.message,
    });
  }
});

// Payment history endpoint
router.get("/history", verifyToken, async (req, res) => {
  try {
    const payments = await Payment.find({ user: req.user._id })
      .populate({
        path: 'booking',
        populate: {
          path: 'parkingLot',
          select: 'name'
        }
      })
      .sort({ createdAt: -1 });
    
    res.json({ success: true, payments });
  } catch (error) {
    console.error("Error loading payment history:", error);
    res.status(500).json({ message: "Failed to load payment history", error: error.message });
  }
});

export default router;