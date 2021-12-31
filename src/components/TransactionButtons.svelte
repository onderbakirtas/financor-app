<div class="transaction-buttons">
  <button class="plus">+</button>
  <button class="minus">-</button>
</div>

<style>
  .transaction-buttons {
    display: flex;
    align-items: center;
    background: #fff;
    padding: 8px;
  }

  button {
    background-color: transparent;
    border: none;
    height: 50px;
    padding-top: 10px;
    text-transform: uppercase;
    font-size: 50px;
    line-height: 1;
    width: 50px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: inherit;
    margin: 0;
    border-radius: 8px;
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

  button.plus:active {
    background: darkgreen;
  }

  button.minus:hover {
    background: crimson;
  }

  button.minus:active {
    background: darkred;
  }

  button:active {
    background: #bbb;
  }
</style>
