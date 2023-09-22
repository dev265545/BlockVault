const { ethers } = require("hardhat");

async function main() {
  const Doc = await ethers.deployContract("Doc");

  await Doc.waitForDeployment();

  console.log("SimpleStorage Contract Address:", Doc.target);
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
