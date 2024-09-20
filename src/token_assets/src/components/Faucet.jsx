import React, { useState } from "react";
import {token} from '../../../declarations/token'

function Faucet() {

  const[isDisabled,setDisables]=useState(false);
  const [ButtonText,setButton]=useState("Claim 10,000");
  async function handleClick(event) {
    setDisables(true);
    const result =await token.payOut();
    setButton(result);
    //setDisables(false);


  }

  return (
    <div className="blue window">
      <h2>
        <span role="img" aria-label="tap emoji">
          🚰
        </span>
        Faucet
      </h2>
      <label>Get your free DAngela tokens here! Claim 10,000 DANG coins to your account.</label>
      <p className="trade-buttons">
        <button id="btn-payout" onClick={handleClick} disabled={isDisabled}>
          {ButtonText}
        </button>
      </p>
    </div>
  );
}

export default Faucet;
