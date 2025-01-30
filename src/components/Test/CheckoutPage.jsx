import React, { useState } from "react";
import { IoChevronDown } from "react-icons/io5";

const CheckoutPage = () => {
  const [selectedPayment, setSelectedPayment] = useState("credit-card");
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const countries = [
    "United States",
    "Canada",
    "India",
    "Australia",
    "United Kingdom",
  ];
  const regions = [
    "California",
    "Ontario",
    "Maharashtra",
    "New South Wales",
    "England",
  ];
  const cities = ["Los Angeles", "Toronto", "Mumbai", "Sydney", "London"];

  return (
    <div className="grid w-full grid-cols-1 gap-8 lg:grid-cols-3">
      <div className="w-full space-y-8 lg:col-span-2">
        <BillingInformation
          handleCheckboxChange={handleCheckboxChange}
          isChecked={isChecked}
          countries={countries}
          regions={regions}
          cities={cities}
        />
        <PaymentOptions
          selectedPayment={selectedPayment}
          setSelectedPayment={setSelectedPayment}
        />
        <AdditionalInformation />
      </div>
      <OrderSummary />
    </div>
  );
};

const BillingInformation = ({
  handleCheckboxChange,
  isChecked,
  countries,
  regions,
  cities,
}) => {
  const inputStyles =
    "border w-full py-2 px-4 rounded-md mt-1 outline-none focus:border-[#0FABCA] dark:border-gray-700 dark:bg-gray-800 dark:text-white";
  const labelStyles = "text-[14px] font-[400] text-gray-700 dark:text-gray-300";

  return (
    <div className="w-full">
      <h2 className="mb-6 text-[1.5rem] font-medium text-gray-700 dark:text-gray-300">
        Billing Information
      </h2>
      Order Summary
      <div className="grid grid-cols-1 gap-[16px]">
        <div className="flex flex-col gap-4 lg:flex-row">
          <InputField
            label="First name"
            id="firstName"
            placeholder="First name"
            inputStyles={inputStyles}
            labelStyles={labelStyles}
          />
          <InputField
            label="Last name"
            id="lastName"
            placeholder="Last name"
            inputStyles={inputStyles}
            labelStyles={labelStyles}
          />
        </div>
        <InputField
          label="Company Name (Optional)"
          id="company"
          placeholder="Company name"
          inputStyles={inputStyles}
          labelStyles={labelStyles}
        />
        <InputField
          label="Address"
          id="address"
          placeholder="Address"
          inputStyles={inputStyles}
          labelStyles={labelStyles}
        />
        <div className="flex flex-col gap-4 lg:flex-row">
          <InputSelect
            label="Country"
            items={countries}
            inputStyles={inputStyles}
            labelStyles={labelStyles}
          />
          <InputSelect
            label="Region/State"
            items={regions}
            inputStyles={inputStyles}
            labelStyles={labelStyles}
          />
        </div>
        <div className="flex flex-col gap-4 lg:flex-row">
          <InputSelect
            label="City"
            items={cities}
            inputStyles={inputStyles}
            labelStyles={labelStyles}
          />
          <InputField
            label="Zip Code"
            id="zipCode"
            placeholder="Zip code"
            inputStyles={inputStyles}
            labelStyles={labelStyles}
          />
        </div>
        <div className="flex flex-col gap-4 lg:flex-row">
          <InputField
            label="Email"
            id="email"
            placeholder="Email address"
            inputStyles={inputStyles}
            labelStyles={labelStyles}
          />
          <InputField
            label="Phone Number"
            id="phone"
            placeholder="Phone number"
            inputStyles={inputStyles}
            labelStyles={labelStyles}
          />
        </div>
      </div>
      <div className="mt-4">
        <label className="flex cursor-pointer items-center gap-[10px]">
          <input
            type="checkbox"
            className="hidden"
            onChange={handleCheckboxChange}
          />
          {isChecked ? <CheckedIcon /> : <UncheckedIcon />}
          <span className="text-[0.9rem] text-gray-700 dark:text-gray-300">
            Ship to a different address
          </span>
        </label>
      </div>
    </div>
  );
};

const PaymentOptions = ({ selectedPayment, setSelectedPayment }) => {
  const labelStyles = "text-[14px] font-[400] text-gray-700 dark:text-gray-300";
  const inputStyles =
    "border w-full py-2 px-4 rounded-md mt-1 outline-none focus:border-[#0FABCA] dark:border-gray-700 dark:bg-gray-800 dark:text-white";

  return (
    <div className="rounded-md border border-gray-200 dark:border-gray-700">
      <h2 className="border-b border-gray-200 px-5 py-3 text-[1.2rem] font-medium text-gray-700 dark:border-gray-700 dark:text-gray-300">
        Payment Option
      </h2>
      <div className="grid w-full grid-cols-1 gap-4 p-5 lg:grid-cols-2">
        <PaymentButton
          label="Cash on Delivery"
          icon="💵"
          selected={selectedPayment === "cash"}
          onClick={() => setSelectedPayment("cash")}
        />
        <PaymentButton
          label="Debit/Credit Card"
          icon="💳"
          selected={selectedPayment === "credit-card"}
          onClick={() => setSelectedPayment("credit-card")}
        />
      </div>
      {selectedPayment === "credit-card" && (
        <div className="space-y-[16px] px-5 pb-5">
          <InputField
            label="Name on Card"
            id="cardName"
            placeholder="Name on card"
            inputStyles={inputStyles}
            labelStyles={labelStyles}
          />
          <InputField
            label="Card Number"
            id="cardNumber"
            placeholder="Card number"
            inputStyles={inputStyles}
            labelStyles={labelStyles}
          />
          <div className="grid grid-cols-2 gap-4">
            <InputField
              label="Expire Date"
              id="expireDate"
              placeholder="MM/YY"
              inputStyles={inputStyles}
              labelStyles={labelStyles}
            />
            <InputField
              label="CVC"
              id="cvc"
              placeholder="CVC"
              inputStyles={inputStyles}
              labelStyles={labelStyles}
            />
          </div>
        </div>
      )}
    </div>
  );
};

const AdditionalInformation = () => {
  const inputStyles =
    "border w-full py-2 px-4 rounded-md mt-1 outline-none focus:border-[#0FABCA] dark:border-gray-700 dark:bg-gray-800 dark:text-white";
  const labelStyles = "text-[14px] font-[400] text-gray-700 dark:text-gray-300";

  return (
    <div>
      <h2 className="mb-4 text-[1.2rem] font-medium text-gray-700 dark:text-gray-300">
        Additional Information
      </h2>
      <div>
        <label htmlFor="notes" className={`${labelStyles}`}>
          Order Notes (Optional)
        </label>
        <textarea
          id="notes"
          rows={4}
          placeholder="Notes about your order e.g. special notes for delivery"
          className={`${inputStyles} py-3`}
        />
      </div>
    </div>
  );
};

const OrderSummary = () => {
  return (
    <div className="w-full">
      <div className="rounded-md border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
        <h2 className="mb-6 text-[1.2rem] font-medium text-gray-700 dark:text-gray-300">
          Order Summary
        </h2>
        <div className="space-y-4">
          <OrderItem
            imgSrc="https://i.ibb.co.com/VNM4dX6/Image-24.png"
            title="Canon EOS 1500D DSLR Camera Body+ 18"
            quantity="2"
            price="$570"
          />
          <OrderItem
            imgSrc="https://i.ibb.co.com/F0bn52F/Image-25.png"
            title="Wired Over-Ear Gaming Headphones with U"
            quantity="1"
            price="$100"
          />
          <OrderSummaryDetails />
          <button className="w-full rounded-lg bg-[#0FABCA] px-4 py-3 text-white transition-colors hover:bg-[#0FABCA]/90">
            PLACE ORDER
          </button>
        </div>
      </div>
    </div>
  );
};

const InputField = ({ label, id, placeholder, inputStyles, labelStyles }) => (
  <div className="w-full lg:w-[50%]">
    <label htmlFor={id} className={labelStyles}>
      {label}
    </label>
    <input
      placeholder={placeholder}
      type="text"
      id={id}
      className={inputStyles}
    />
  </div>
);

const InputSelect = ({ label, items, inputStyles, labelStyles }) => {
  const [isActive, setIsActive] = useState(false);
  const [content, setContent] = useState("Select Option");

  return (
    <div className="w-full lg:w-[50%]">
      <label className={labelStyles}>{label}</label>
      <button
        className={`dropdown relative mt-1 flex w-full cursor-pointer items-center justify-between gap-8 rounded-md border ${inputStyles}`}
        onClick={() => setIsActive(!isActive)}
      >
        <p className={`${content === "Select Option" && "text-gray-400"}`}>
          {content}
        </p>
        <IoChevronDown
          className={`${isActive ? "rotate-[180deg]" : "rotate-0"} text-[1.2rem] text-gray-600 transition-all duration-300 dark:text-gray-300`}
        />
        <div
          className={`${isActive ? "scale-[1] opacity-100" : "z-[-1] scale-[0.8] opacity-0"} absolute left-0 right-0 top-12 z-40 flex w-full flex-col overflow-hidden rounded-xl bg-[#fff] py-1 transition-all duration-200 ease-in-out dark:bg-gray-800`}
          style={{ boxShadow: "0 15px 40px -15px rgba(0, 0, 0, 0.2)" }}
        >
          {items?.map((option, index) => (
            <p
              className="px-4 py-2 text-left text-gray-800 transition-all duration-200 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700"
              key={index}
              onClick={(e) => setContent(e.target.textContent)}
            >
              {option}
            </p>
          ))}
        </div>
      </button>
    </div>
  );
};

const PaymentButton = ({ label, icon, selected, onClick }) => (
  <button
    onClick={onClick}
    className={`flex flex-col items-center justify-center rounded-lg border p-4 ${selected ? "border-[#0FABCA]" : "border-gray-200 dark:border-gray-700"}`}
  >
    <span className="text-2xl">{icon}</span>
    <span className="mt-2 text-[0.9rem] font-[500] text-gray-700 dark:text-gray-300">
      {label}
    </span>
  </button>
);

const OrderItem = ({ imgSrc, title, quantity, price }) => (
  <div className="flex items-center space-x-4">
    <div className="flex-shrink-0">
      <img
        src={imgSrc}
        alt="product/image"
        className="h-[50px] w-[50px] object-cover"
      />
    </div>
    <div className="min-w-0 flex-1">
      <p className="line-clamp-1 text-sm font-medium text-gray-900 dark:text-gray-300">
        {title}
      </p>
      <div className="mt-0.5 flex items-center gap-[5px]">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {quantity} x{" "}
        </p>
        <p className="text-sm font-[600] text-[#0FABCA]">{price}</p>
      </div>
    </div>
  </div>
);

const OrderSummaryDetails = () => (
  <div className="space-y-4 pt-4">
    <div className="flex justify-between text-sm">
      <span className="text-gray-600 dark:text-gray-400">Sub-total</span>
      <span className="font-medium text-gray-800 dark:text-gray-300">$670</span>
    </div>
    <div className="flex justify-between text-sm">
      <span className="text-gray-600 dark:text-gray-400">Shipping</span>
      <span className="font-medium text-green-500">Free</span>
    </div>
    <div className="flex justify-between text-sm">
      <span className="text-gray-600 dark:text-gray-400">Discount</span>
      <span className="font-medium text-gray-800 dark:text-gray-300">$20</span>
    </div>
    <div className="flex justify-between text-sm">
      <span className="text-gray-600 dark:text-gray-400">Tax</span>
      <span className="font-medium text-gray-800 dark:text-gray-300">$650</span>
    </div>
    <div className="border-t border-gray-200 pt-4 dark:border-gray-700">
      <div className="flex justify-between">
        <span className="text-base font-medium text-gray-800 dark:text-gray-300">
          Total
        </span>
        <span className="text-base font-medium text-gray-800 dark:text-gray-300">
          $357.99 USD
        </span>
      </div>
    </div>
  </div>
);

const CheckedIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="Group 335">
      <rect
        id="Rectangle 331"
        x="-0.00012207"
        y="6.10352e-05"
        width="20"
        height="20"
        rx="4"
        className="fill-[#0FABCA]"
        stroke="#0FABCA"
      ></rect>
      <path
        id="Vector"
        d="M8.19594 15.4948C8.0646 15.4949 7.93453 15.4681 7.81319 15.4157C7.69186 15.3633 7.58167 15.2865 7.48894 15.1896L4.28874 11.8566C4.10298 11.6609 3.99914 11.3965 3.99988 11.1213C4.00063 10.8461 4.10591 10.5824 4.29272 10.3878C4.47953 10.1932 4.73269 10.0835 4.99689 10.0827C5.26109 10.0819 5.51485 10.1901 5.70274 10.3836L8.19591 12.9801L14.2887 6.6335C14.4767 6.4402 14.7304 6.3322 14.9945 6.33307C15.2586 6.33395 15.5116 6.44362 15.6983 6.63815C15.8851 6.83268 15.9903 7.09627 15.9912 7.37137C15.992 7.64647 15.8883 7.91073 15.7027 8.10648L8.90294 15.1896C8.8102 15.2865 8.7 15.3633 8.57867 15.4157C8.45734 15.4681 8.32727 15.4949 8.19594 15.4948Z"
        fill="white"
      ></path>
    </g>
  </svg>
);

const UncheckedIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="Group 335">
      <rect
        id="Rectangle 331"
        x="-0.00012207"
        y="6.10352e-05"
        width="20"
        height="20"
        rx="4"
        className="fill-transparent"
        stroke="#ccc"
      ></rect>
    </g>
  </svg>
);

export default CheckoutPage;
