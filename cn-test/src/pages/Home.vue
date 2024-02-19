<template>

  <div class="wrapper">

    <div class="app-wrapper">

      <content class="transactions-wrapper">

        <h2>Current Balance<span class="total-balance"></span></h2>
        <div class="transactions"></div>

      </content>

    </div>

  </div>

</template>

<script>

export default {
  name: "MPage",
};

</script>

<style>

* {
  box-sizing: border-box;
}

h2 {
  margin: 0px;
  font-weight: 400;
  color: #c1121f;
  font: 24px/24px ;
}

h3 {
  margin: 0px 0px 5px;
  font-weight: 600;
  font-size: 18px;
  line-height: 18px;
}

.wrapper {
  padding: 50px 10px;
}

.app-wrapper {
  background-color: #fff;
  height: 500px;
  max-width: 880px;
  margin: 0 auto;
  border-radius: 8px;
  display: flex;
  box-shadow: 10px 10px #e63946;
}

.transactions-wrapper {
  width: 520px;
  padding: 50px;
}

.total-balance {
  display: inline-block;
  float: right;
  font-weight: 600;
  font-size: 32px;
  color: #444750;
}
.total-balance::before {
  content: "$";
}

.transactions {
  margin-top: 60px;
  border-top: 1px solid #e5e5e5;
  padding-top: 50px;
  height: 330px;
  overflow: scroll;
}

.transactions.show {
  animation: fade-in 0.3s 1;
}

.transactions::-webkit-scrollbar {
  display: none;
}

.transaction-item {
  margin-bottom: 45px;
}

.transaction-item {
  padding-left: 40px;
  position: relative;
  display: flex;
}
.transaction-item::before {
  position: absolute;
  content: "";
  border: 2px solid #e1e1e1;
  border-radius: 50%;
  height: 25px;
  width: 25px;
  left: 0px;
  top: 10px;
  box-sizing: border-box;
  box-sizing: border-box;
  vertical-align: middle;
  color: #666666;
}

.transaction-item.credit::before {
  content: "\002B";
  font-size: 25px;
  line-height: 19px;
  padding: 0px 4px 0px;
}

.transaction-item.credit .transaction-item_amount .amount,
.transaction-item.credit .transaction-item_amount span {
  color: #66cc33;
}

.transaction-item.debit::before {
  content: "\2212";
  font-size: 20px;
  line-height: 21px;
  padding: 0px 5px;
}

.transaction-item.debit .transaction-item_amount .amount,
.transaction-item.debit .transaction-item_amount span {
  color: #8393ca;
}

.transaction-item span.details {
  font-size: 14px;
  line-height: 14px;
  color: #999;
}

.transaction-item_details {
  width: 270px;
}

.transaction-item_amount {
  width: 110px;
  text-align: right;
}
.transaction-item_amount span {
  font-weight: 600;
  font-size: 18px;
  line-height: 45px;
}

.transaction-item_amount .amount {
  font-weight: 600;
  font-size: 18px;
  line-height: 45px;
  position: relative;
  margin: 0px;
  display: inline-block;
  text-indent: -15px;
}

/* media queries */
@media (max-width: 810px) {
  .wrapper {
    border-radius: 8px;
  }
  .app-wrapper {
    -webkit-flex-direction: column;
    flex-direction: column;
    width: 100%;
    border-top-right-radius: inherit;
    height: initial;
  }
  .transactions {
    height: initial;
  }
  .transactions-wrapper {
    width: 100%;
  }
  .transaction-item_amount {
    width: calc(100% - 270px);
  }
}

@media (max-width: 530px) {
  h3 {
    line-height: 24px;
  }
  .total-balance {
    font-size: 22px;
  }
  .transaction-item_amount {
    width: 110px;
  }
}

@media (max-width: 390px) {
  .transactions-wrapper {
    padding: 50px 25px;
  }
  h2 {
    font: 18px/24px;
  }
}
</style>
