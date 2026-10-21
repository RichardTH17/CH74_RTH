// Task 3: addUser(first_name, last_name, email)
import * as task1 from "./task1.js";

export function addUser(first_name, last_name, email){
var users = fetch(task1.getServerURL() + "/users").then(response => response.json()).then(data => console.log(data));
const data = { id: users.length+1, first_name: first_name, last_name: last_name, email: email };
fetch(getServerURL()+'/users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
})
    .then(response => response.json())
    .then(result => console.log(result));
}
