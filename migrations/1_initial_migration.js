var Migrations = artifacts.require("./Migrations.sol");
var EPRX = artifacts.require("./EPRX.sol");

module.exports = function (deployer) {
    deployer.deploy(Migrations);
    deployer.deploy(EPRX);
};
