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

  const publicKey = process.env.REACT_APP_PAYSTACK_PUBLIC_KEY as string;

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