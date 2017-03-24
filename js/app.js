/*Use the Document Object Model (DOM) to complete the following exercises below:*/

/*1. Replace the n/a with the following:

Tay-Tay*/

var taytayName = document.getElementById('name1');

taytayName.innerHTML = "Tay-Tay";


/*2. Replace the n/a with the following: 

Project Manager*/

var khaledJob = document.getElementById('position2');
khaledJob.innerHTML = "Project Manager";


/*3. Replace the n/a with the following:

Concatenation*/

var pikoTaroSkill = document.getElementById('alias3');
pikoTaroSkill.innerHTML = "Concatenation";


/*4. Replace the n/a for Snoop with the gangsta lorem ipsum*/

var snoopTalks = document.getElementsByClassName("profile");
snoopTalks[0].innerHTML = "Lorizzle i'm in the shizzle shiznit sit things, pimpin' adipiscing fo shizzle. Nullizzle sapien velizzle, bow wow wow volutpizzle, suscipizzle quis, gravida vizzle, arcu. Break yo neck, yall eget sheezy. Shut the shizzle up erizzle. Fusce izzle dolizzle dapibizzle i'm in the shizzle tempus crunk. Mauris boofron nibh izzle turpis. My shizz in fo shizzle my nizzle. For sure eleifend rhoncizzle tellivizzle. In pot check out this fo shizzle dictumst. Crazy dapibizzle. Curabitur tellus urna, pretium crazy, mattizzle ac, eleifend vitae, nunc. Gangster suscipizzle. That's the shizzle semper velit sizzle i saw beyonces tizzles and my pizzle went crizzle."

/*5. Relace the n/a for Samuel L Jackson with his lorem ipsum*/

var jacksonSays = document.getElementsByClassName("profile");
jacksonSays[2].innerHTML = "Normally, both your asses would be dead as fucking fried chicken, but you happen to pull this shit while I'm in a transitional period so I don't wanna kill you, I wanna help you. But I can't give you this case, it don't belong to me. Besides, I've already been through too much shit this morning over this case to hand it over to your dumb ass.";


/*6. Create a div element for Chuck Norris and give it an id of "name7". Inside this div element, give it the contents of "Chuck Norris".

Append this div element to the nameBox div*/

 var chuckName = document.createElement("div");
 chuckName.id = "name7";
 chuckName.innerHTML = "Chuck Norris";
 nameBox.appendChild(chuckName);


/*7. Create a div element for Grimmace and give it an id of "alias8". Inside this div element, give it the contents of "The Purple Monster".

Append this div element to the aliasBox div.*/




//Final Boss
/*8. Create your own profile.*/


/*document.createElement("p");
newPara.id = "newSpecials";
newPara.innerHTML = wed;
main.appendChild(newPara);*/

/*for(var i = 0; i<list.length; i++){
  //console.log(list[i]);
  var liElements = document.createElement("li"); //make a box/container to store data
  liElements.className = "items"; //labeling the box/container
  liElements.innerHTML = list[i]; //putting data in the box/container
  buy.appendChild(liElements); //storing the box/container in the HTML document*/