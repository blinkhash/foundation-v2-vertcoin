// Mock Daemon GetBlockTemplate Data
exports.getBlockTemplate = function() {
  return {
    'capabilities': [
      'proposal'
    ],
    'version': 536870912,
    'rules': [],
    'vbavailable': {},
    'vbrequired': 0,
    'previousblockhash': '9719aefb83ef6583bd4c808bbe7d49b629a60b375fc6e36bee039530bc7727e2',
    'transactions': [],
    'coinbaseaux': {
      'flags': ''
    },
    'coinbasevalue': 5000000000,
    'longpollid': '9719aefb83ef6583bd4c808bbe7d49b629a60b375fc6e36bee039530bc7727e22',
    'target': '00000ffff0000000000000000000000000000000000000000000000000000000',
    'mintime': 1614044921,
    'mutable': [
      'time',
      'transactions',
      'prevblock'
    ],
    'noncerange': '00000000ffffffff',
    'sigoplimit': 20000,
    'sizelimit': 1000000,
    'curtime': 1614201893,
    'bits': '1e0ffff0',
    'height': 1,
    'default_witness_commitment': '6a24aa21a9ede2f61c3f71d1defd3fa999dfa36953755c690689799962b48bebd836974e8cf9'
  };
};

// Mock Daemon GetAuxBlock Data
exports.getAuxBlock = function() {
  return {
    'chainid': 1,
    'height': 1,
    'hash': '8719aefb83ef6583bd4c808bbe7d49b629a60b375fc6e36bee039530bc7727e2',
    'target': Buffer.from('00000ffff0000000000000000000000000000000000000000000000000000000', 'hex'),
  };
};

// Mock Daemon GetBlockchainInfo Data
exports.getBlockchainInfo = function() {
  return {
    'chain': 'main',
    'blocks': 1,
    'headers': 1,
    'bestblockhash': '1d5af7e2ad9aeccb110401761938c07a5895d85711c9c5646661a10407c82769',
    'difficulty': 0.000244140625,
    'mediantime': 1614202191,
    'verificationprogress': 3.580678270509504e-08,
    'initialblockdownload': false,
    'chainwork': '0000000000000000000000000000000000000000000000000000000000200020',
    'size_on_disk': 472,
    'pruned': false,
    'softforks': [
      {
        'id': 'bip34',
        'version': 2,
        'reject': {
          'status': false
        }
      },
      {
        'id': 'bip66',
        'version': 3,
        'reject': {
          'status': false
        }
      },
      {
        'id': 'bip65',
        'version': 4,
        'reject': {
          'status': false
        }
      }
    ],
    'bip9_softforks': {
      'csv': {
        'status': 'defined',
        'startTime': 1485561600,
        'timeout': 1517356801,
        'since': 0
      },
      'segwit': {
        'status': 'defined',
        'startTime': 1485561600,
        'timeout': 1517356801,
        'since': 0
      }
    },
    'warnings': ''
  };
};

// Mock Daemon GetInfo Data
exports.getInfo = function() {
  return {
    'version' : 89900,
    'protocolversion' : 70002,
    'walletversion' : 60000,
    'balance' : 0.00000000,
    'blocks' : 1,
    'timeoffset' : -2,
    'connections' : 8,
    'proxy' : '',
    'difficulty' : 510929738.01615179,
    'testnet' : false,
    'keypoololdest' : 1386220819,
    'keypoolsize' : 101,
    'paytxfee' : 0.00000000,
    'errors' : 'This is a pre-release test build - use at your own risk - do not use for mining or merchant applications'
  };
};

// Mock Daemon GetPeerInfo Data
exports.getPeerInfo = function() {
  return {
    'id': 20,
    'addr': '18.213.13.51:9333',
    'addrlocal': '173.73.155.96:61108',
    'addrbind': '192.168.1.155:61108',
    'services': '000000000000040d',
    'relaytxes': true,
    'lastsend': 1615676709,
    'lastrecv': 1615676709,
    'bytessent': 1793,
    'bytesrecv': 1782,
    'conntime': 1615674308,
    'timeoffset': 0,
    'pingtime': 0.007751,
    'minping': 0.00522,
    'version': 70015,
    'subver': '/LitecoinCore:0.18.1/',
    'inbound': false,
    'addnode': false,
    'startingheight': 1,
    'banscore': 0,
    'synced_headers': 1,
    'synced_blocks': 1,
    'inflight': [],
    'whitelisted': false,
    'minfeefilter': 0.00001000,
    'bytessent_per_msg': {
      'addr': 55,
      'feefilter': 32,
      'getaddr': 24,
      'getheaders': 93,
      'ping': 672,
      'pong': 672,
      'sendcmpct': 66,
      'sendheaders': 24,
      'verack': 24,
      'version': 131
    },
    'bytesrecv_per_msg': {
      'addr': 55,
      'feefilter': 32,
      'headers': 106,
      'ping': 672,
      'pong': 672,
      'sendcmpct': 66,
      'sendheaders': 24,
      'verack': 24,
      'version': 131
    }
  };
};

// Mock Daemon GetTransaction Data
exports.getTransaction = function() {
  return {
    'amount': 0,
    'confirmations': 39,
    'generated': true,
    'blockhash': '822f516a36e38a462c12dce195d2a47bb21ebec80df7730db534aad7862b831f',
    'blockindex': 0,
    'blocktime': 1662756646,
    'txid': '209f1068e8a742bb54d6cbb15670f35901589169bb0fbf147bb148a9ac0c1b3d',
    'walletconflicts': [],
    'time': 1662756646,
    'timereceived': 1662756678,
    'bip125-replaceable': 'no',
    'details': [
      {
        'involvesWatchonly': false,
        'address': 'tltc1q55af62wuz6ng6q9p0s7k7sle4u23j393evy9mp',
        'category': 'immature',
        'amount': 10000,
        'vout': 10000,
      }
    ],
    'hex': '01000000010000000000000000000000000000000000000000000000000000000000000000ffffffff06033d6b3d0101ffffffff010010a5d4e8000000232103729ae92c9d1b6f73bf9fbaf5571e028209f28c4d985fa2891d7bc1d865c3ee36ac00000000'
  };
};

// Mock Daemon ListUnspent Data
exports.listUnspent = function() {
  return [{
    'txid': 'ef14b7dbcb4ff218323be32e2f671a6767d049c18cb7877ea958a10c66b48d0c',
    'amount': 11.87500000,
    'confirmations': 61278,
    'spendable': true,
    'address': 'tltc1q55af62wuz6ng6q9p0s7k7sle4u23j393evy9mp',
    'label': '',
    'vout': 0,
    'scriptPubKey': '0014a53a9d29dc16a68d00a17c3d6f43f9af151944b1',
    'solvable': true,
    'desc': 'wpkh([d2cd2cd8/0\'/0\'/0\']03be30ab85f0431452bac225378cd1f8680f307f35adbf66007eb1a90cb4e95be2)#x6r4s3da',
    'safe': true
  },
  {
    'txid': 'ef14b7dbcb4ff218323be32e2f671a6767d049c18cb7877ea958a10c66b48d0c',
    'amount': 0.62500000,
    'confirmations': 61278,
    'spendable': true,
    'address': 'tltc1q55af62wuz6ng6q9p0s7k7sle4u23j393evy9mp',
    'label': '',
    'vout': 1,
    'scriptPubKey': '0014a53a9d29dc16a68d00a17c3d6f43f9af151944b1',
    'solvable': true,
    'desc': 'wpkh([d2cd2cd8/0\'/0\'/0\']03be30ab85f0431452bac225378cd1f8680f307f35adbf66007eb1a90cb4e95be2)#x6r4s3da',
    'safe': true
  }];
};
