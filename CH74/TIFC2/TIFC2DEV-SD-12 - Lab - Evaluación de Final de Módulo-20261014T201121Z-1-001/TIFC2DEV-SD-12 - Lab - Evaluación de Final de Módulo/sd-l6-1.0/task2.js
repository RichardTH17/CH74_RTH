// Task 2: listUsers()
import * as task1 from "./task1.js";

export function listUsers(){
    fetch(task1.getServerURL() + "/users").then(response => response.json()).then(data => console.log(data.slice(0,data.length-1)));
}
