$(function() {
    "use strict";

    // jQuery-based Object for the various <div>s and <button>
    var $elBtnGetChar = $("#btnGetChar"),
        $elDivLeftCol = $("#divLeftCol"),
        $elDivRightCol = $("#divRightCol");

    // Create Request object
    var xhr = new XMLHttpRequest();

    // Function to get a random character after a button click
    function fnGetChar() {
        console.log("fnGetChar() STARTS");

        // Prepare to open the data from the JSON file, asynchronously
        xhr.open("GET", "characters.json", true);
        // Send the request (without extra data)
        xhr.send(null);

        // After loading data, process it via Anonymous Function
        xhr.onload = function() {
            // Convert the JSON data ta a JavaScript Object
            var charObj = JSON.parse(xhr.responseText);
            // Create a variable for a random character
            var randomChar = Math.floor(Math.random() * charObj.allChars.length);
            // String for the Character picture/name and stats
            var strName = "",
                strStats = "";

            console.log(charObj);

            // Add one(random) instance of a Character to the string
            // strName += `<p><img src='./img/${charObj.allChars[randomChar].graphic}'></p>`;
            strName += `<p><img src='./img/${charObj.allChars[randomChar].graphic}' width="55%" height="55%"></p>`;
            strName += `<p>${charObj.allChars[randomChar].name}</p>`;
            // Show Character on-screen, fade it in, in 2 seconds
            $elDivLeftCol.html(strName).hide().fadeIn(2000);

            // Add the Stats of the random Character to its own string
            strStats += `<p>Origin: ${charObj.allChars[randomChar].origin}</p>`;
            strStats += `<p>Powers:<br>
                        <ul>
                        <li>${charObj.allChars[randomChar].powers[0].p1}</li>
                        <li>${charObj.allChars[randomChar].powers[0].p2}</li>
                        </ul>
                        </p>`;
            // Show Character's Stats on-screen, after 250ms delay
            $elDivRightCol.html(strStats).hide().delay(250).fadeIn(1750);
        }; // END onload (after successful connection to the file)
    } // END fnGetChar()

    // Make the on-screen button active
    $elBtnGetChar.on("click", fnGetChar);
});