let turno = Number(prompt("Turnos:\n1 - Manhã\n2 - Tarde\n3 - Noite"));
switch(turno){
    case 1:
        alert("Turno: Manhã");
        break;
    case 2:
        alert("Turno: Tarde");
        break;
    case 3:
        alert("Turno: Noite");
        break;
    default:
        alert("Turno inválido");
}