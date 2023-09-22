const Moralis = require("moralis").default;
const fs = require("fs");

async function uploadToIpfs() {
  await Moralis.start({
    apiKey: "0wHBHKM8cglyitH7wMPXle5DRpg45FYMlNPUuGVqrESDpW8SZKrtUfkxwXVdox9i",
  });
  const uploadArray = [
    {
      path: "test.json",
      content: {
        one: "abc",
        two: "def",
      },
    },
  ];
  const response = await Moralis.EvmApi.ipfs.uploadFolder({
    abi: uploadArray,
  });
  console.log(response.result);
}

uploadToIpfs();
