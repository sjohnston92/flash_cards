import React from "react";

const FlashCard =({question, answer, id, remove, toggle}) => (
  
  <tr>
  <td>{question}</td>
  <td>{answer}</td>
  <td>
    <button onClick={() => remove(id)}>
      Delete
    </button>
  </td>
  <td>
    <button onClick={() => toggle(answer)}>
      Show Answer
    </button>
  </td>
</tr> 
);


export default FlashCard;


