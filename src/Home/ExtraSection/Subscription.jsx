import React, { useState } from 'react';

const Subscription = () => {
  const [subscriptionValue, setSubscriptionValue] = useState('');

  const handleSubscription = () => {
    setSubscriptionValue('');
  };

  return (
    <div className='my-5'>
      <div
        className="w-10/12 mx-auto hero"
        style={{
          backgroundImage: `url("https://img.freepik.com/premium-vector/special-offer-sale-discount-banner_180786-46.jpg")`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="bg-opacity-90 hero-overlay"></div>
        <div className="hero-content text-neutral-content ">
          <div className="max-w-md">
            <h1 className="mb-5 text-4xl font-bold text-red-600">Special Discount</h1>
            <p className="mb-5">GET 10% OFFER!!</p>
            <p>Subscribe now and receive a discount on your first order</p>

            <div className="flex items-center justify-center my-5 ">
              <input
                type="text"
                placeholder="Enter your subscription"
                className="w-full h-10 max-w-xs p-4 text-black border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                value={subscriptionValue}
                onChange={(event) => setSubscriptionValue(event.target.value)}
              />
              <button
                onClick={handleSubscription}
                className="h-10 px-4 py-2 ml-2 text-white bg-indigo-500 rounded-md shadow-sm hover:bg-indigo-600 focus:outline-none focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-indigo-200"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
