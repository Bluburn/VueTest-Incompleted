const User = require("../models/Users.js");
const Transaction = require("../models/Records.js");

//DEPOSIT
exports.deposit = async (req, res) => {
  try {
    const { accId, amount } = req.body;

    // UPDATE BALANCE
    const user = await User.findOne({ accId: accId });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    user.balance = Number(user.balance) + Number(amount);
    await user.save();

    // CREATE RECORD
    const depositTransaction = new Transaction({
      type: "deposit",
      userId: user._id,
      amount: amount,
    });
    await depositTransaction.save();

    // UPDATE USER RECORD 
    user.transactions.push(depositTransaction._id);
    await user.save();

    return res.status(201).send({
      message: "Deposit successful!",
      depositTransaction,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send({
      message: "Deposit fail!",
      error,
    });
  }
};

// WITHDRAW
exports.withdraw = async (req, res) => {
  try {
    const { accId, amount } = req.body;

    // FIND USER BY accId
    const user = await User.findOne({ accId: accId });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Check if user has sufficient balance
    if (user.balance < amount) {
      return res.status(400).json({ error: "Insufficient balance" });
    }

    // Update user's balance
    user.balance = Number(user.balance) - Number(amount);
    await user.save();

    // Create transaction record
    const withdrawTransaction = new Transaction({
      type: "withdraw",
      userId: user._id,
      amount: amount,
    });
    await withdrawTransaction.save();

    // Update user's transactions array
    user.transactions.push(withdrawTransaction._id);
    await user.save();

    return res.status(201).send({
      message: "Withdraw successful!",
      withdrawTransaction,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send({
      message: "Withdraw fail!",
      error,
    });
  }
};

//TRANSFER
exports.transfer = async (req, res) => {
  console.log(req.body);
  try {
    const { fromAccId, toAccId, amount } = req.body;
    // Check if fromAccId and toAccId are the same
    if (fromAccId === toAccId) {
      return res
        .status(400)
        .json({ error: "Cannot transfer to the same account" });
    }

    // FIND SENDER BY fromAccId
    const sender = await User.findOne({ accId: fromAccId });
    if (!sender) {
      return res.status(404).json({ error: "Sender not found" });
    }

    // CHECK USER HAS SUFFICIENT BALANCE
    if (sender.balance < amount) {
      return res.status(400).json({ error: "Insufficient balance" });
    }

    // FIND RECEIVER BY accId
    const receiver = await User.findOne({ accId: toAccId });
    if (!receiver) {
      return res.status(404).json({ error: "Receiver not found" });
    }

    // UPDATE SENDER BALANCE
    sender.balance = Number(sender.balance) - Number(amount);
    await sender.save();

    // UPDATE RECEIVER balance
    receiver.balance = Number(receiver.balance) + Number(amount);
    await receiver.save();

    // CREATE RECORD TO SENDER
    const senderTransaction = new Transaction({
      type: "transfer",
      userId: sender._id,
      toUserId: receiver._id,
      amount: amount,
    });
    await senderTransaction.save();

    // CREATE RECORD FOR RECEIVER
    const receiverTransaction = new Transaction({
      type: "transfer",
      userId: receiver._id,
      toUserId: sender._id,
      amount: amount,
    });
    await receiverTransaction.save();

    // UPDATE SENDER RECORD
    sender.transactions.push(senderTransaction._id);
    await sender.save();

    // UPDATE RECEIVER RECORD
    receiver.transactions.push(receiverTransaction._id);
    await receiver.save();

    return res.status(201).send({
      success: true,
      message: "Transfer successful!",
      senderTransaction,
      receiverTransaction,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send({
      message: "Transfer fail!",
      error,
    });
  }
};

//GET USER
exports.getUserTransactions = async (req, res) => {
  try {
    const userId = req.params.id;

    //Find user by userId
    const user = await User.findById(userId).populate("transactions");
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const transaction = user.transactions;
    return res.status(201).send({
      success: true,
      TransactionCount: transaction.length,
      message: "Get Transactions successful!",
      transaction,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send({
      success: false,
      message: "Get Transactions fail!",
      error,
    });
  }
};
