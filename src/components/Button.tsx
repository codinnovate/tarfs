'use client';

import { motion } from "framer-motion";

// Extend window interface to properly type PaystackPop
declare global {
  interface Window {
    PaystackPop: {
      setup: (options: {
        key: string;
        email: string;
        amount: number;
        currency: string;
        ref: string;
        callback: (response: { reference: string; status: "success" | "failed" }) => void;
        onClose: () => void;
      }) => { openIframe: () => void };
    };
  }
}

export default function PaystackButton({ title }: { title: string }) {
(
    <div className="flex flex-col items-center gap-4">
      {/* Animated Input Field */}
      {/* <motion.input
        type="number"
        placeholder="Enter amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="p-2 border border-gray-300 rounded-md w-[10em] text-center focus:outline-none"
        whileFocus={{ scale: 1.05, borderColor: "#ff007f" }}
      /> */}

      {/* Animated Button */}
      <motion.button
        className="bg-pink font-semibold rounded-2xl text-white p-3 w-[10em]"
        whileHover={{ scale: 1.1, backgroundColor: "#000" }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        {title}
      </motion.button>

      {/* Show Modal Button */}
      {/* <Button onClick={() => setShowModal(true)}>{title}</Button> */}

      {/* Modal */}
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h1 className="text-lg font-bold">Modal Content</h1>
          </div>
        </div>
    </div>
  );
}
