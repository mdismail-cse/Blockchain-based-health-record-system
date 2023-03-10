import Web3 from "web3";

let web3;

if (typeof window !== "undefined" && window.web3 !== "undefined") {
  //We are in the browser AND metamask is running
  (async () => {
    await window.web3.currentProvider.enable();
  })();
  web3 = new Web3(window.web3.currentProvider);
} else {
  //We are on the server OR the user is not running metamask
  const provider = new Web3.providers.HttpProvider(
    "https://goerli.infura.io/v3/3fe30bb18f604689ba6dc38997c561e5"
  );
  web3 = new Web3(provider);
}

export default web3;
