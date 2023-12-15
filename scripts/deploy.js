const hre = require("hardhat");

async function main() {
  const insertWallet = await hre.ethers.deployContract("InsertWallet");

  await insertWallet.waitForDeployment();

  console.log(
    `InsertWallet contract deployed to ${insertWallet.target}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});