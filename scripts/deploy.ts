import hre from "hardhat";

export async function main() {
    console.log('Deploying AnyFlowERC20...')

    const args = [
        '0x427d5cf7ec5f67ab91aee156b249b71b57b80cef',   // _initialOwner
        1 * 10 ** 18,   // _initialSupply
        'HotmanMuda', // _name
        'HTMN',           // _symbol
    ] as const;

    const contract = await hre.viem.deployContract("AnyFlowERC20", args);

    console.log(`Contract AnyFlowERC20 deployed to: ${contract.address}`);
}

main()
    .then(() => process.exit(0));
