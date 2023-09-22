import React from "react";

const Wallet = ({ currentAccount, connectWallet }) => {
  return (
    <div>
      {!currentAccount ? (
        <button
          onClick={() => connectWallet()}
          className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-red-400 hover:bg-red-700 focus:shadow-outline focus:outling-none background"
          title="Connect your Metamask wallet"
        >
          Connect Wallet
        </button>
      ) : (
        <button
          disabled
          className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-green-400 hover:bg-green-700 focus:shadow-outline focus:outling-none background"
          title="Connect your Metamask wallet"
        >
          Connected
        </button>
      )}
    </div>
  );
};

export default Wallet;
