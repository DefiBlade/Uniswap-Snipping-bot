# Snipping  bot

BSCTokenSniper is a bot written in Python or Javascript to detect new PairCreated events in the Binance Smart Chain (when a liquidity pair has been created) and buy the token. It is quite reliable and works well.

## IMPORTANT NOTES BEFORE RUNNING THE BOT !!!

1) The bot uses a wallet address and private key
    - if this is **NOT** configured correctly you will get an error that says "(node:45320) UnhandledPromiseRejectionWarning: Error: insufficient funds for intrinsic transaction cost"

2) Make **sure** you have the following assets in your MetaMask wallet **FOR THE ACCOUNT ADDRESS WITH WHICH YOU ARE USING THE BOT**
    - **BNB** (this is needed for gas)
    - **WBNB** (this is used to purchase the desired token)


# BOT SETUP & CONFIGURATION INSTRUCTIONS

1) Download & Install Node.js and git bash 
- https://nodejs.org/en/ 
- https://git-scm.com/downloads


2) Extract the bot zip / download contents to a folder, example 
C:\users\username\Downloads\BHG--snipping-bot

3) open the command prompt (or git bash) to install the necessary modules for the bot (it should be in the same directory it was earlier when you copy the bot)

```
$ npm install
```

4) After installing modules, type 'npm start' and hit ENTER to run the bot.

```
$ npm start

```
# Usage


1. You have to input the information to run the snipping.

```
- wallet address, 
- private key, 
- token address you want to snipe (e.g: 0xe9e7cea3dedca5984780bafc599bd69add087d56),
- Node wss url (wss://dawn-shy-voice.bsc.quiknode.pro/f929e892df..., ws://localhost:8546 in the case of full node)
- BNB amount to buy tokens
- Slippage (10 ~ 100 %)
- GAS (10 ~ 50 GWEI)
- GASLimit (160000 ~ 400000)

 ```

2. if you complete the setting of snipping,  you can click the "Start snipping" to run the snipping bot 


*** setting ***

Reset or clear the bot's data if you want.

# Test

1) IF you want to TEST the bot using BNB / BUSD, then ADD the BUSD custom token to your MetaMask (0xe9e7cea3dedca5984780bafc599bd69add087d56)

2) Run the bot using the to_Purchase value of the BUSD token contract. This works because liquidity is frequently added to this pool.
