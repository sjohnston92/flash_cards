import React from "react";

const FlashCard =({question, answer}) => (
  
  <tr>
  <td>{question}</td>
  <td>{answer}</td>
  <td>
    <button>
      Delete
    </button>
  </td>
</tr> 
);


export default FlashCard;


