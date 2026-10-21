// Task 4: delUser(number)
import * as task1 from "./task1.js";

export function delUser(id){
fetch(getServerURL() + "/users/" + id, {
    method: 'DELETE'
  })
    .then(response => response.json())
    .then(data => console.log('Deleted:', data));
}

