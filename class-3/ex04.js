let [n1, n2] = prompt("Two numbers: ").trim().split(" ");
let msg;
n1 = Number(n1);
n2 = Number(n2);
if (n1==n2) msg="Equals";
else if (n1>n2) msg=`${n1} is greather`;
else msg=`${n2} is greather`;
alert(msg)