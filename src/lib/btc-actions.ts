export const sendBitcoin = async (
  provider: any,
  to: string,
  amount: number
) => {
  const sig = await provider.sendBitcoin(to, amount);
  console.log("sig:", sig);
};

export const signBtcMessage = async (provider: any, message: string) => {
  const sig = await provider.signMessageBIP322(message);
  console.log("sig:", sig);
};

export const signPsbt = async (provider: any, psbtHex: string) => {
  const sig = await provider.signPsbt(psbtHex);
  console.log("sig:", sig);
};

export const getBtcInfos = async (provider: any) => {
  const allAddresses = await provider.getAllAddresses();
  console.log("all:", allAddresses);
  const network = await provider.getNetwork();
  console.log("network:", network);
  const address = await provider.getAddress();
  console.log("address:", address);
  const balance = await provider.getBalance();
  console.log("balance:", balance);
  const pubkey = await provider.getPublicKeyHex();
  console.log("pbukey:", pubkey);
  await provider.switchNetwork("signet");
  const network1 = await provider.getNetwork();
  console.log("network:", network1);
  provider.changeAddressType("P2SH");
  const address1 = await provider.getAddress();
  console.log("address:", address1);
  const feeRate = await provider.getFeeRate();
  console.log("feeRate:", feeRate);
};

export const btcChangeAddressType = async (provider: any, type: string) => {
  const curAddressType = await provider.getAddressType();
  console.log("btc curAddressType:", curAddressType);
  const addressType = await provider.changeAddressType(type);
  const newAddressType = await provider.getAddressType();
  console.log("btc newAddressType:", newAddressType);
};

export const getBtcSwitch = async (provider: any) => {
  provider.on('networkChanged', (network: any) => {
    console.log('network:', network)
  })

  provider.on('addressTypeChanged', (addressType: any) => {
    console.log('addressTypeChanged:', addressType)
  })
  await provider.switchNetwork('signet')
  provider.changeAddressType('P2SH')
}
