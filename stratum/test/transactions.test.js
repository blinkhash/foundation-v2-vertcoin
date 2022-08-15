const Transactions = require('../main/transactions');
const config = require('../../configs/example');
const testdata = require('../../daemon/test/daemon.mock');

config.primary.address = 'VqspNKCc3ufsUSJb6Vq2TcEVX1Wn9EdHjP';
config.primary.recipients = [];

const auxiliaryConfig = {
  'enabled': false,
  'coin': {
    'header': 'fabe6d6d',
  }
};

const auxiliaryData = {
  'chainid': 1,
  'hash': '17a35a38e70cd01488e0d5ece6ded04a9bc8125865471d36b9d5c47a08a5907c',
};

const extraNonce = Buffer.from('f000000ff111111f', 'hex');

////////////////////////////////////////////////////////////////////////////////

describe('Test transactions functionality', () => {

  let configCopy, rpcDataCopy;
  beforeEach(() => {
    configCopy = JSON.parse(JSON.stringify(config));
    rpcDataCopy = JSON.parse(JSON.stringify(testdata.getBlockTemplate()));
  });

  test('Test main transaction builder [1]', () => {
    const transaction = new Transactions(configCopy, rpcDataCopy).handleGeneration(extraNonce);
    expect(transaction[0].slice(0, -5)).toStrictEqual(Buffer.from('01000000010000000000000000000000000000000000000000000000000000000000000000ffffffff0f5104', 'hex'));
    expect(transaction[1]).toStrictEqual(Buffer.from('000000000200f2052a010000001976a914ae2ea621540e8199ec6a07aa5280c1c1849cdb1e88ac0000000000000000266a24aa21a9ede2f61c3f71d1defd3fa999dfa36953755c690689799962b48bebd836974e8cf900000000', 'hex'));
  });

  test('Test main transaction builder [2]', () => {
    rpcDataCopy.coinbasetxn = {};
    rpcDataCopy.coinbasetxn.data = '0500008085202';
    const transaction = new Transactions(configCopy, rpcDataCopy).handleGeneration(extraNonce);
    expect(transaction[0].slice(0, -5)).toStrictEqual(Buffer.from('05000080010000000000000000000000000000000000000000000000000000000000000000ffffffff0f5104', 'hex'));
    expect(transaction[1]).toStrictEqual(Buffer.from('000000000200f2052a010000001976a914ae2ea621540e8199ec6a07aa5280c1c1849cdb1e88ac0000000000000000266a24aa21a9ede2f61c3f71d1defd3fa999dfa36953755c690689799962b48bebd836974e8cf900000000', 'hex'));
  });

  test('Test main transaction builder [3]', () => {
    configCopy.primary.recipients.push({ address: 'VqspNKCc3ufsUSJb6Vq2TcEVX1Wn9EdHjP', percentage: 0.05 });
    const transaction = new Transactions(configCopy, rpcDataCopy).handleGeneration(extraNonce);
    expect(transaction[0].slice(0, -5)).toStrictEqual(Buffer.from('01000000010000000000000000000000000000000000000000000000000000000000000000ffffffff0f5104', 'hex'));
    expect(transaction[1]).toStrictEqual(Buffer.from('0000000003803f1f1b010000001976a914ae2ea621540e8199ec6a07aa5280c1c1849cdb1e88ac80b2e60e000000001976a914ae2ea621540e8199ec6a07aa5280c1c1849cdb1e88ac0000000000000000266a24aa21a9ede2f61c3f71d1defd3fa999dfa36953755c690689799962b48bebd836974e8cf900000000', 'hex'));
  });

  test('Test main transaction builder [4]', () => {
    configCopy.primary.recipients.push({ address: 'VqspNKCc3ufsUSJb6Vq2TcEVX1Wn9EdHjP', percentage: 0.05 });
    configCopy.primary.recipients.push({ address: 'VqspNKCc3ufsUSJb6Vq2TcEVX1Wn9EdHjP', percentage: 0.05 });
    const transaction = new Transactions(configCopy, rpcDataCopy).handleGeneration(extraNonce);
    expect(transaction[0].slice(0, -5)).toStrictEqual(Buffer.from('01000000010000000000000000000000000000000000000000000000000000000000000000ffffffff0f5104', 'hex'));
    expect(transaction[1]).toStrictEqual(Buffer.from('0000000004008d380c010000001976a914ae2ea621540e8199ec6a07aa5280c1c1849cdb1e88ac80b2e60e000000001976a914ae2ea621540e8199ec6a07aa5280c1c1849cdb1e88ac80b2e60e000000001976a914ae2ea621540e8199ec6a07aa5280c1c1849cdb1e88ac0000000000000000266a24aa21a9ede2f61c3f71d1defd3fa999dfa36953755c690689799962b48bebd836974e8cf900000000', 'hex'));
  });

  test('Test main transaction builder [5]', () => {
    rpcDataCopy.coinbaseaux.flags = 'test';
    const transaction = new Transactions(configCopy, rpcDataCopy).handleGeneration(extraNonce);
    expect(transaction[0].slice(0, -5)).toStrictEqual(Buffer.from('01000000010000000000000000000000000000000000000000000000000000000000000000ffffffff0f5104', 'hex'));
    expect(transaction[1]).toStrictEqual(Buffer.from('000000000200f2052a010000001976a914ae2ea621540e8199ec6a07aa5280c1c1849cdb1e88ac0000000000000000266a24aa21a9ede2f61c3f71d1defd3fa999dfa36953755c690689799962b48bebd836974e8cf900000000', 'hex'));
  });

  test('Test main transaction builder [6]', () => {
    delete rpcDataCopy.default_witness_commitment;
    const transaction = new Transactions(configCopy, rpcDataCopy).handleGeneration(extraNonce);
    expect(transaction[0].slice(0, -5)).toStrictEqual(Buffer.from('01000000010000000000000000000000000000000000000000000000000000000000000000ffffffff0f5104', 'hex'));
    expect(transaction[1]).toStrictEqual(Buffer.from('000000000100f2052a010000001976a914ae2ea621540e8199ec6a07aa5280c1c1849cdb1e88ac00000000', 'hex'));
  });

  test('Test main transaction builder [7]', () => {
    rpcDataCopy.auxData = auxiliaryData;
    configCopy.auxiliary = auxiliaryConfig;
    configCopy.auxiliary.enabled = true;
    const transaction = new Transactions(configCopy, rpcDataCopy).handleGeneration(extraNonce);
    expect(transaction[0].slice(0, 44)).toStrictEqual(Buffer.from('01000000010000000000000000000000000000000000000000000000000000000000000000ffffffff3b5104', 'hex'));
    expect(transaction[0].slice(49, 53)).toStrictEqual(Buffer.from('fabe6d6d', 'hex'));
    expect(transaction[0].slice(53)).toStrictEqual(Buffer.from('17a35a38e70cd01488e0d5ece6ded04a9bc8125865471d36b9d5c47a08a5907c0100000000000000', 'hex'));
    expect(transaction[1]).toStrictEqual(Buffer.from('000000000200f2052a010000001976a914ae2ea621540e8199ec6a07aa5280c1c1849cdb1e88ac0000000000000000266a24aa21a9ede2f61c3f71d1defd3fa999dfa36953755c690689799962b48bebd836974e8cf900000000', 'hex'));
  });

  test('Test main transaction builder [8]', () => {
    configCopy.settings.testnet = true;
    configCopy.primary.address = 'tvtc1q4xmza5k0exq5t6h3d2jup772q0hz5xzev7jc63';
    const transaction = new Transactions(configCopy, rpcDataCopy).handleGeneration(extraNonce);
    expect(transaction[0].slice(0, -5)).toStrictEqual(Buffer.from('01000000010000000000000000000000000000000000000000000000000000000000000000ffffffff0f5104', 'hex'));
    expect(transaction[1]).toStrictEqual(Buffer.from('000000000200f2052a01000000160014a9b62ed2cfc98145eaf16aa5c0fbca03ee2a18590000000000000000266a24aa21a9ede2f61c3f71d1defd3fa999dfa36953755c690689799962b48bebd836974e8cf900000000', 'hex'));
  });
});
