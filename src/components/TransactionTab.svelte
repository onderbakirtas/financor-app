<div class="transaction-tab">
  <button class="plus">+</button>
  <button class="minus">-</button>
</div>

<style>
  .transaction-tab {
    display: flex;
    align-items: center;
    background: #fff;
    border-radius: 100px;
    padding: 8px;
    position: fixed;
    bottom: 16px;
    left: 50%;
    transform: translateX(-50%);
    box-shadow: 0 5px 25px rgba(20, 30, 40, 0.15);
  }

  button {
    background-color: transparent;
    border: none;
    height: 50px;
    padding-top: 10px;
    text-transform: uppercase;
    font-size: 50px;
    line-height: 1;
    width: 70px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: inherit;
    margin: 0;
  }

  button.plus {
    color: green;
  }

  button.minus {
    color: crimson;
  }

  button:hover {
    color: #fff;
  }

  button.plus:hover {
    background: green;
  }

  button.minus:hover {
    background: crimson;
  }

  button:active {
    background: #bbb;
  }
</style>
