const musicians = 3;

if (musicians ===1) {
    console.log("solo");
}
else if (musicians ===2){
    console.log("duet");
}

else if (musicians ===3){
    console.log("trio");
}
else if (musicians ===4) {
    console.log("quartet");
}
else if (musicians<=0) {

    console.log("not a musical group");
}
else {
    console.log("this is a large group");
}