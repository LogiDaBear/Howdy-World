
alert("Hello Weary Traveler!");

let usersName = prompt("What be thy name?");

if (usersName){
    console.log("Et tu," + usersName + "?");
    document.write("Welcome ",usersName,", you look parched!");
} else {
    console.log("Weary one.. Name please...");
    usersName = prompt("I SAY! BY THE BEARD OF ZEUS AND LEG HAIR OF HADES!! TELL ME THY NAME! ");
}

let ageOfman = +prompt("How old do thy bones smell to thee? AHEM how old am I?... me. It's Logan.");

while (ageOfman !== 30){
    ageOfman = +prompt("Nuh uh UH. Youd didn't say the magic wor...number.");
}


//This isn't working and im going to die trying.
//This TOOK FOREVER and it took 2 TAs and the issue was line 29 there was no '' around the img so it was thinking it was a < and throwing it out.... MAGIC

let waterNumber = +prompt("Thy fair noble human, how much quench do you desire?");
console.log(typeof waterNumber);
name: while (waterNumber <= 5){
    for (let i = 0; i<= 3; i++){
        console.log("hi");
        document.write('<img src="quench.jpg"/>');
    }
    waterNumber = +prompt("MORE WATERS! PRAISE THE WATER!");
    

  
}







