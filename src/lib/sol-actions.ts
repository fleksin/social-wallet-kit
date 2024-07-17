export const sendSol = async (provider: any, to: string, amount: number) => {
  const sig = await provider.sendBitcoin(to, amount)
  console.log('sig:', sig)
}


export const signBtcMessage = async (provider: any, message: string) => {
  const sig = await provider.signMessageBIP322(message)
  console.log('sig:', sig)
}

export const signPsbt = async (provider: any, psbtHex: string) => {
  const sig = await provider.signPsbt(psbtHex)
  console.log('sig:', sig)
}

export const getBtcAddress = async (provider) => {
  const address = await provider.getAddress()
  console.log('address:', address)
}