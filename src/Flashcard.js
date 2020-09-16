import React from "react";

const FlashCard =({question, answer, id, remove}) => (
  
  <tr>
  <td>{question}</td>
  <td>{answer}</td>
  <td>
    <button onClick={() => remove(id)}>
      Delete
    </button>
  </td>
</tr> 
);


export default FlashCard;


