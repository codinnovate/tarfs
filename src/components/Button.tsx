'use client';

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";

export default function PaystackButton({ title }: { title: string }) {
  const [amount, setAmount] = useState<number | "">("");
  const [showModal, setShowModal] = useState(false);

  const handlePaystackPayment = () => {
    if (!amount || amount <= 0) {
      alert("Please enter a valid amount.");
      return;
    }

    const paystack = (window as any).PaystackPop.setup({
      key: "your-public-key-here",
      email: "user@example.com",
      amount: amount * 100,
      currency: "NGN",
      ref: `txn-${Date.now()}`,
      callback: function (response: any) {
        alert(`Payment Successful! Reference: ${response.reference}`);
      },
      onClose: function () {
        alert("Transaction was not completed, window closed.");
      },
    });

    paystack.openIframe();
  };

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Animated Input Field */}
      <motion.input
        type="number"
        placeholder="Enter amount"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
        className="p-2 border border-gray-300 rounded-md w-[10em] text-center focus:outline-none"
        whileFocus={{ scale: 1.05, borderColor: "#ff007f" }} // Slight scale + border color change on focus
      />

      {/* Animated Button */}
      <motion.button
        onClick={handlePaystackPayment}
        className="bg-pink font-semibold rounded-2xl text-white p-3 w-[10em]"
        whileHover={{ scale: 1.1, backgroundColor: "#000" }} // Scale and color change on hover
        whileTap={{ scale: 0.95 }} // Slight shrink when clicked
        transition={{ type: "spring", stiffness: 200 }}
      >
        {title}
      </motion.button>
      <Button 
      onClick={() => setShowModal(true)} 
      title={title}
       />
    </div>
  );
}
