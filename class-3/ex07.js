let [name, age, degree] = prompt("Name, age, degree").trim().split(" ");
let confirmed = confirm("Do you want confirm this?");
if (confirmed) alert(`Name: ${name}\nAge: ${age}\nDegree: ${degree}\n`);
else alert("Ok")