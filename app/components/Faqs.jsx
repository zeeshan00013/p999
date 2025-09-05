import React from "react";

const Faqs = () => {
  return (
    <section className=" mb-20 w-full text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="md:text-4xl text-3xl text-green-500 font-bold   text-center mb-12">
          Frequently Asked Questions (FAQs)
        </h2>
        <div className="space-y-4">
          <details className="bg-[#0e893b] p-4 rounded-lg shadow-md">
            <summary className="text-lg font-semibold  cursor-pointer">
              What is the minimum deposit amount P999 Game App?
            </summary>
            <p className=" mt-2">
              The minimum deposit amount depends on the payment method you
              choose, but it is usually very affordable for beginners.
            </p>
          </details>
          <details className="bg-[#0e893b] p-4 rounded-lg shadow-md">
            <summary className="text-lg font-semibold  cursor-pointer">
              Can I play the games for free?
            </summary>
            <p className=" mt-2">
              Yes, some games allow free play, especially when using welcome
              bonuses or daily rewards.{" "}
            </p>
          </details>
          <details className="bg-[#0e893b] p-4 rounded-lg shadow-md">
            <summary className="text-lg font-semibold  cursor-pointer">
              Is the app compatible with all devices?
            </summary>
            <p className=" mt-2">
              Yes, the app works smoothly on most Android and iOS devices.
            </p>
          </details>
          <details className="bg-[#0e893b] p-4 rounded-lg shadow-md">
            <summary className="text-lg font-semibold  cursor-pointer">
              How do I withdraw my winnings?
            </summary>
            <p className=" mt-2">
              Simply go to the “Wallet” section, select “Withdraw,” choose your
              method, and confirm the amount.
            </p>
          </details>
          <details className="bg-[#0e893b] p-4 rounded-lg shadow-md">
            <summary className="text-lg font-semibold  cursor-pointer">
              Are the games fair and trustworthy?
            </summary>
            <p className=" mt-2">
              Yes, the games are based on transparent systems to ensure fairness
              and give every player an equal chance.{" "}
            </p>
          </details>
        </div>
      </div>
    </section>
  );
};

export default Faqs;
