export const BridgeAbi = [
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_endpoint",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "_delegate",
                "type": "address"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "inputs": [],
        "name": "InvalidDelegate",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "InvalidEndpointCall",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "LzTokenUnavailable",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "uint32",
                "name": "eid",
                "type": "uint32"
            }
        ],
        "name": "NoPeer",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "msgValue",
                "type": "uint256"
            }
        ],
        "name": "NotEnoughNative",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "addr",
                "type": "address"
            }
        ],
        "name": "OnlyEndpoint",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "uint32",
                "name": "eid",
                "type": "uint32"
            },
            {
                "internalType": "bytes32",
                "name": "sender",
                "type": "bytes32"
            }
        ],
        "name": "OnlyPeer",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            }
        ],
        "name": "OwnableInvalidOwner",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "OwnableUnauthorizedAccount",
        "type": "error"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "previousOwner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint32",
                "name": "eid",
                "type": "uint32"
            },
            {
                "indexed": false,
                "internalType": "bytes32",
                "name": "peer",
                "type": "bytes32"
            }
        ],
        "name": "PeerSet",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "recvAmount",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "recvAddress",
                "type": "address"
            }
        ],
        "name": "ReceiveEvent",
        "type": "event"
    },
    {
        "stateMutability": "payable",
        "type": "fallback"
    },
    {
        "inputs": [
            {
                "components": [
                    {
                        "internalType": "uint32",
                        "name": "srcEid",
                        "type": "uint32"
                    },
                    {
                        "internalType": "bytes32",
                        "name": "sender",
                        "type": "bytes32"
                    },
                    {
                        "internalType": "uint64",
                        "name": "nonce",
                        "type": "uint64"
                    }
                ],
                "internalType": "struct Origin",
                "name": "origin",
                "type": "tuple"
            }
        ],
        "name": "allowInitializePath",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "endpoint",
        "outputs": [
            {
                "internalType": "contract ILayerZeroEndpointV2",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "ethVault",
        "outputs": [
            {
                "internalType": "contract iStaking",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "components": [
                    {
                        "internalType": "uint32",
                        "name": "srcEid",
                        "type": "uint32"
                    },
                    {
                        "internalType": "bytes32",
                        "name": "sender",
                        "type": "bytes32"
                    },
                    {
                        "internalType": "uint64",
                        "name": "nonce",
                        "type": "uint64"
                    }
                ],
                "internalType": "struct Origin",
                "name": "",
                "type": "tuple"
            },
            {
                "internalType": "bytes",
                "name": "",
                "type": "bytes"
            },
            {
                "internalType": "address",
                "name": "_sender",
                "type": "address"
            }
        ],
        "name": "isComposeMsgSender",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "components": [
                    {
                        "internalType": "uint32",
                        "name": "srcEid",
                        "type": "uint32"
                    },
                    {
                        "internalType": "bytes32",
                        "name": "sender",
                        "type": "bytes32"
                    },
                    {
                        "internalType": "uint64",
                        "name": "nonce",
                        "type": "uint64"
                    }
                ],
                "internalType": "struct Origin",
                "name": "_origin",
                "type": "tuple"
            },
            {
                "internalType": "bytes32",
                "name": "_guid",
                "type": "bytes32"
            },
            {
                "internalType": "bytes",
                "name": "_message",
                "type": "bytes"
            },
            {
                "internalType": "address",
                "name": "_executor",
                "type": "address"
            },
            {
                "internalType": "bytes",
                "name": "_extraData",
                "type": "bytes"
            }
        ],
        "name": "lzReceive",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint32",
                "name": "",
                "type": "uint32"
            },
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            }
        ],
        "name": "nextNonce",
        "outputs": [
            {
                "internalType": "uint64",
                "name": "nonce",
                "type": "uint64"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "oAppVersion",
        "outputs": [
            {
                "internalType": "uint64",
                "name": "senderVersion",
                "type": "uint64"
            },
            {
                "internalType": "uint64",
                "name": "receiverVersion",
                "type": "uint64"
            }
        ],
        "stateMutability": "pure",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint32",
                "name": "eid",
                "type": "uint32"
            }
        ],
        "name": "peers",
        "outputs": [
            {
                "internalType": "bytes32",
                "name": "peer",
                "type": "bytes32"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint32",
                "name": "_dstEid",
                "type": "uint32"
            },
            {
                "internalType": "bytes",
                "name": "_options",
                "type": "bytes"
            },
            {
                "internalType": "bool",
                "name": "_payInLzToken",
                "type": "bool"
            }
        ],
        "name": "quote",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "uint256",
                        "name": "nativeFee",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "lzTokenFee",
                        "type": "uint256"
                    }
                ],
                "internalType": "struct MessagingFee",
                "name": "fee",
                "type": "tuple"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint32",
                "name": "_dstEid",
                "type": "uint32"
            },
            {
                "internalType": "uint256",
                "name": "fee",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "recvAddress",
                "type": "address"
            },
            {
                "internalType": "bytes",
                "name": "_options",
                "type": "bytes"
            }
        ],
        "name": "send",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "bytes32",
                        "name": "guid",
                        "type": "bytes32"
                    },
                    {
                        "internalType": "uint64",
                        "name": "nonce",
                        "type": "uint64"
                    },
                    {
                        "components": [
                            {
                                "internalType": "uint256",
                                "name": "nativeFee",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint256",
                                "name": "lzTokenFee",
                                "type": "uint256"
                            }
                        ],
                        "internalType": "struct MessagingFee",
                        "name": "fee",
                        "type": "tuple"
                    }
                ],
                "internalType": "struct MessagingReceipt",
                "name": "receipt",
                "type": "tuple"
            }
        ],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_delegate",
                "type": "address"
            }
        ],
        "name": "setDelegate",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_ethVaultAddress",
                "type": "address"
            }
        ],
        "name": "setEthVaultAddress",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint32",
                "name": "_eid",
                "type": "uint32"
            },
            {
                "internalType": "bytes32",
                "name": "_peer",
                "type": "bytes32"
            }
        ],
        "name": "setPeer",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "stateMutability": "payable",
        "type": "receive"
    }
] as const