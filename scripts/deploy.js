const hre = require("hardhat");

async function main() {
  const Contract = await ethers.deployContract("Contract");

  await Contract.waitForDeployment();

  console.log("SimpleStorage Contract Address:", Contract.target);
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
