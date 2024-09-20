import React, { useState } from "react";
import {Principal} from '@dfinity/principal';
import {token} from '../../../declarations/token'

function Transfer() {
  const [recipicentsID,setId]=useState("");
  const [Amount,setAmount]=useState("");
  const [isDisabled,setDisabled]=useState(false);
  const [feedback,setFeedback]=useState("");
  const [isHidden,setHidden]=useState(true);
  async function handleClick() {
    setHidden(true);
    setDisabled(true);
    const recipient=Principal.fromText(recipicentsID);
    const amounttoTransfer=Number(Amount);
    const result=await token.transfer(recipient,amounttoTransfer);
    setFeedback(result);
    setHidden(false);
    setDisabled(false);
    
  }

  return (
    <div className="window white">
      <div className="transfer">
        <fieldset>
          <legend>To Account:</legend>
          <ul>
            <li>
              <input
                type="text"
                id="transfer-to-id"
                value={recipicentsID}
                onChange={(e)=>setId(e.target.value)}
              />
            </li>
          </ul>
        </fieldset>
        <fieldset>
          <legend>Amount:</legend>
          <ul>
            <li>
              <input
                type="number"
                id="amount"
                value={Amount}
                onChange={(e)=>setAmount(e.target.value)}
              />
            </li>
          </ul>
        </fieldset>
        <p className="trade-buttons">
          <button id="btn-transfer" onClick={handleClick} disabled={isDisabled}>
            Transfer
          </button>
        </p>
        < p hidden={isHidden}>{feedback}</p>
      </div>
    </div>
  );
}

export default Transfer;
