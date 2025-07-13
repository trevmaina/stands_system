import React from 'react';
import { PaystackButton } from 'react-paystack';

interface PayWithPaystackProps {
  email: string;
  amount: number;
  onSuccess: (reference: any) => void;
  onClose: () => void;
}

const PayWithPaystack: React.FC<PayWithPaystackProps> = ({
  email,
  amount,
  onSuccess,
  onClose,
}) => {
  const publicKey = import.meta.env.VITE_PAYSTACK_PUBLIC_KEY;

  const config = {
    reference: new Date().getTime().toString(),
    email,
    amount,
    publicKey,
  };

  return (
    <PaystackButton
      {...config}
      text="Pay Now"
      onSuccess={onSuccess}
      onClose={onClose}
      className="px-4 py-2 bg-green-600 text-white rounded"
    />
  );
};

export default PayWithPaystack;
