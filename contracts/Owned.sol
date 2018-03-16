pragma solidity ^0.4.18;

contract Owned {
    /// @notice The address of the owner is the only address that can call
    ///  a function with this modifier
    modifier onlyOwner { require(msg.sender == owner); _; }

    address public owner;

    function Owned() public { owner = msg.sender;}

    /// @notice Changes the owner of the contract
    /// @param _newOwner The new owner of the contract
    function changeOwner(address _newOwner) onlyOwner public {
        owner = _newOwner;
    }
}
