import React from 'react';
import { PaystackButton } from 'react-paystack';

const PayWithPaystack = ({ email, amount, onSuccess, onClose }) => {
  const publicKey = import.meta.env.VITE_PAYSTACK_PUBLIC_KEY;

  const config = {
    reference: new Date().getTime().toString(),
    email,
    amount, // amount in kobo/lowest currency unit
    publicKey,
  };

  const handleSuccess = (ref) => {
    onSuccess(ref);
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <PaystackButton
      {...config}
      text="Pay Now"
      onSuccess={handleSuccess}
      onClose={handleClose}
      className="px-6 py-3 rounded bg-green-500 text-white"
    />
  );
};

export default PayWithPaystack;
