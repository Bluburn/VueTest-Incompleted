<template>
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.4.2/css/all.css"
    />

    <div class="wrapper">
      <div class="payment">
        <div class="payment-logo">
          <p>V</p>
        </div>

        <h2>Payment Gateway</h2>
        <div class="Payform">
          <div class="card space icon-relative">
            <label class="label">Account ID:</label>
            <input type="text" class="input" placeholder="Coding Market" />
            <i class="fas fa-user"></i>
          </div>
          <div class="card space icon-relative">
            <label class="label">Money Amount:</label>
            <input
              type="text"
              class="input"
              data-mask="0000 0000 0000 0000"
              placeholder="Card Number"
            />
            <i class="far fa-credit-card"></i>
          </div>
        </div>
        <div id="Cbtn">
          <button class="Cbtn">Confirm Payment</button>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "TransAc",
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.wrapper {
  background: #669bbc;
}

.payment {
  top: 40px;
  box-shadow: 10px 10px #e63946;
  background: #fdf0d5;
  max-width: 360px;
  margin: 80px auto;
  height: auto;
  padding: 35px;
  padding-top: 70px;
  border-radius: 5px;
  position: relative;
}

.payment h2 {
  text-align: center;
  letter-spacing: 2px;
  margin-bottom: 40px;
  color: #0d3c61;
}

.Payform .label {
  display: block;
  color: #555555;
  margin-bottom: 6px;
}

.input {
  padding: 13px 0px 13px 25px;
  width: 100%;
  text-align: center;
  border: 2px solid #dddddd;
  border-radius: 5px;
  letter-spacing: 1px;
  word-spacing: 3px;
  outline: none;
  font-size: 16px;
  color: #555555;
}

.card-grp {
  display: flex;
  justify-content: space-between;
}

.card-item {
  width: 48%;
}

.space {
  margin-bottom: 20px;
}

.icon-relative {
  position: relative;
}

.icon-relative .fas,
.icon-relative .far {
  position: absolute;
  bottom: 12px;
  left: 15px;
  font-size: 20px;
  color: #555555;
}
#Cbtn{
  text-align: center;
}
.Cbtn{
  margin-top: 40px;
  padding: 12px;
  border-radius: 5px;
  text-align: center;
  background: #2196F3;
  color: #f8f8f8;
}

.payment-logo {
  position: absolute;
  top: -50px;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 100px;
  background: #1d3557;
  border-radius: 50%;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  text-align: center;
  line-height: 85px;
}

.payment-logo:before {
  content: "";
  position: absolute;
  top: 5px;
  left: 5px;
  width: 90px;
  height: 90px;
  background: #f1faee;
  border-radius: 50%;
}

.payment-logo p {
  position: relative;
  color: #e63946;
  font-size: 58px;
}

</style>
