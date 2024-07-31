// SPDX-License-Identifier: MIT LICENSE
pragma solidity ^0.8.0;

interface IEntropy {
    function random(uint256 seed) external view returns (uint256);
}