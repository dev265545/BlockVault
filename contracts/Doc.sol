// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

contract Doc {
    struct Contract {
        uint id;
        string desc;
    }

    Contract[] public contracts;
    uint public count = 0;
    address public manager;

    constructor() {
        manager = msg.sender;
    }

    modifier onlyManager() {
        require(manager == msg.sender, "You are not the manager");
        _;
    }

    function createContract(string calldata _desc) external {
        contracts.push(Contract(count, _desc));
        count++;
    }

    function allContracts() external view returns (Contract[] memory) {
        return contracts;
    }
}
