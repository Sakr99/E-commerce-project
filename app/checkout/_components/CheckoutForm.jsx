"use client";
import { useStripe, PaymentElement } from "@stripe/react-stripe-js";
import { useRouter } from "next/navigation";

const CheckoutForm = () => {
  const stripe = useStripe();
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();


    router.push("/payment-confirm");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mx-6 md:mx-[320px] mt-12">
        <PaymentElement />

        <button
          type="submit"
          className="w-full p-2 mt-4 text-white rounded-md bg-primary"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default CheckoutForm;
