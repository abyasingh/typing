const testWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area");
var originalText = document.querySelector("#original-text p").innerHTML;
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");
const accuracyLabel = document.querySelector(".accuracy");
const wordspmLabel = document.querySelector(".wpm");

var timer = [0,0,0,0];
var interval;
var wpmInterval;
var timerRunning = false;
var errors = 0;
var timeElapsed = 0;
var para = 0;
var wpm;

function singledigit(time) {
    if (time <= 9) {
        time = "0" + time;
    }
    return time;
}

function runTimer() {
    let currentTime = singledigit(timer[0]) + ":" + singledigit(timer[1]) + ":" + singledigit(timer[2]);
    theTimer.innerHTML = currentTime;
    timer[3]++;

    timer[0] = Math.floor((timer[3]/100)/60);
    timer[1] = Math.floor((timer[3]/100) - (timer[0] * 60));
    timer[2] = Math.floor(timer[3] - (timer[1] * 100) - (timer[0] * 6000));

    timeElapsed = timer[0]*60 + timer[1];
}

function wordspm() {
  if (timeElapsed > 0) {
    var gw = Math.floor((testArea.value.length/5) / (timeElapsed/60));
    console.log(gw);
    wpm = Math.floor(((testArea.value.length/5) - errors)/(timeElapsed/60));
    console.log(wpm);
    if (wpm < 0) {
      wordspmLabel.innerHTML = 0 + " WPM";
    } else {
      wordspmLabel.innerHTML = wpm + " WPM";
    }
    accuracy(gw);
  }
}

function accuracy(gw) {
  let accuracy = Math.floor(wpm/grossWpm*100);
  if (accuracy < 0) {
    accuracyLabel.innerHTML = 0+"%";
  } else {
    accuracyLabel.innerHTML = accuracy+"%";
  }
  console.log(accuracy);
}

function spelling() {
    let textEntered = testArea.value;
    let originalTextMatch = originalText.substring(0,textEntered.length);


    if (textEntered == originalText) {
        clearInterval(interval);
        clearInterval(wpmInterval);
        testWrapper.style.borderColor = "#429890"; 
    } else {
        if (textEntered == originalTextMatch) {
            testWrapper.style.borderColor = "#65CCf3"; 
        } else {
            errors++;
            if (!(event.keyCode === 8)) {
              testWrapper.style.borderColor = "#E95D0F"; 
            } else {
              errors--;
            }
        }
    }
}


function start() {
    let textEnteredLength = testArea.value.length;
    if (textEnteredLength === 0 && !timerRunning) {
        timerRunning = true;
        interval = setInterval(runTimer, 10);
        wpmInterval = setInterval(wordspm, 100);
    }
}

function paragen() {
  
  let p1="Indian Institute of Technology - Roorkee is among the foremost of institutes of national importance in higher technological education and in engineering, basic and applied research. Since its establishment, the Institute has played a vital role in providing the technical manpower and know-how to the country and in pursuit of research. The Institute ranks amongst the best technological institutions in the world and has contributed to all sectors of technological development. It has also been considered a trend-setter in the area of education and research in the field of science, technology, and engineering. The Institute had celebrated its Sesquicentennial in October 1996 and now completed more than 170 years of its existence.";
  let p2="A cryptocurrency, crypto-currency, or crypto is a digital currency designed to work as a medium of exchange through a computer network that is not reliant on any central authority, such as a government or bank, to uphold or maintain it. Individual coin ownership records are stored in a digital ledger, which is a computerized database using strong cryptography to secure transaction records, to control the creation of additional coins, and to verify the transfer of coin ownership.";
  let p3="A pandemic is an epidemic of an infectious disease that has spread across a large region, for instance multiple continents or worldwide, affecting a substantial number of individuals. A widespread endemic disease with a stable number of infected individuals is not a pandemic. Widespread endemic diseases with a stable number of infected individuals such as recurrences of seasonal influenza are generally excluded as they occur simultaneously in large regions of the globe rather than being spread worldwide.";
  let p4="Maroon 5 is an American pop band from Los Angeles, California. It currently consists of lead vocalist Adam Levine, keyboardist and rhythm guitarist Jesse Carmichael, lead guitarist James Valentine, drummer Matt Flynn, keyboardist PJ Morton and multi-instrumentalist and bassist Sam Farrar. Original members Levine, Carmichael, bassist Mickey Madden, and drummer Ryan Dusick first came together as Kara's Flowers in 1994, while they were still in high school.";
  let p5="Art is a diverse range of human activity, and resulting product, that involves creative or imaginative talent expressive of technical proficiency, beauty, emotional power, or conceptual ideas. There is no generally agreed definition of what constitutes art, and its interpretation has varied greatly throughout history and across cultures. The three classical branches of visual art are painting, sculpture, and architecture. Theatre, dance, and other performing arts, as well as literature, music, film and other media such as interactive media, are included in a broader definition of the arts. Until the 17th century, art referred to any skill or mastery and was not differentiated from crafts or sciences.";
  let p6="India, officially the Republic of India, is a country in South Asia. It is the seventh-largest country by area, the second-most populous country, and the most populous democracy in the world. Bounded by the Indian Ocean on the south, the Arabian Sea on the southwest, and the Bay of Bengal on the southeast, it shares land borders with Pakistan to the west;[f] China, Nepal, and Bhutan to the north; and Bangladesh and Myanmar to the east. In the Indian Ocean, India is in the vicinity of Sri Lanka and the Maldives; its Andaman and Nicobar Islands share a maritime border with Thailand, Myanmar and Indonesia.";
  let p7="A dictatorship is a form of government characterized by a single leader (dictator) or group of leaders that hold government power promised to the people and little or no toleration for political pluralism or independent media. In most dictatorships, the country's constitution promises its citizens inalienable rights and fair elections. As democracy is a form of government in which - those who govern are selected through periodically contested elections (in years), dictatorships are not democracies.";
  let p8="Physics is one of the oldest academic disciplines and, through its inclusion of astronomy, perhaps the oldest. Over much of the past two millennia, physics, chemistry, biology, and certain branches of mathematics were a part of natural philosophy, but during the Scientific Revolution in the 17th century these natural sciences emerged as unique research endeavors in their own right. Physics intersects with many interdisciplinary areas of research, such as biophysics and quantum chemistry, and the boundaries of physics are not rigidly defined. New ideas in physics often explain the fundamental mechanisms studied by other sciences and suggest new avenues of research in academic disciplines such as mathematics and philosophy.";
  let p9="Google was founded on September 4, 1998, by Larry Page and Sergey Brin while they were PhD students at Stanford University in California. Together they own about 14% of its publicly listed shares and control 56% of the stockholder voting power through super-voting stock. The company went public via an initial public offering (IPO) in 2004. In 2015, Google was reorganized as a wholly-owned subsidiary of Alphabet Inc.. Google is Alphabet's largest subsidiary and is a holding company for Alphabet's Internet properties and interests. Sundar Pichai was appointed CEO of Google on October 24, 2015, replacing Larry Page, who became the CEO of Alphabet. On December 3, 2019, Pichai also became the CEO of Alphabet.";
  let p10="Badminton is a racquet sport played using racquets to hit a shuttlecock across a net. Although it may be played with larger teams, the most common forms of the game are 'singles' (with one player per side) and 'doubles' (with two players per side). Badminton is often played as a casual outdoor activity in a yard or on a beach; formal games are played on a rectangular indoor court. Points are scored by striking the shuttlecock with the racquet and landing it within the opposing side's half of the court.";
  
    switch (Math.floor(Math.random() * 10)) {
      case 0:
        originalText = p1;
        document.querySelector("#original-text p").innerHTML = p1;
        break;
      case 1:
        originalText = p2;
        document.querySelector("#original-text p").innerHTML = p2;
        break;
      case 2:
        originalText = p3;
        document.querySelector("#original-text p").innerHTML = p3;
        break;
      case 3:
        originalText = p4;
        document.querySelector("#original-text p").innerHTML = p4;
        break;
      case 4:
        originalText = p5;
        document.querySelector("#original-text p").innerHTML = p5;
        break;
      case 5:
        originalText = p6;
        document.querySelector("#original-text p").innerHTML = p6;
        break;
      case 6:
        originalText = p7;
        document.querySelector("#original-text p").innerHTML = p7;
        break;
      case 7:
        originalText = p8;
        document.querySelector("#original-text p").innerHTML = p8;
        break;
      case 8:
        originalText = p9;
        document.querySelector("#original-text p").innerHTML = p9;
        break;
      case 9:
        originalText = p10;
        document.querySelector("#original-text p").innerHTML = p10;
        break;
    }

}

function reset() {
    clearInterval(interval);
    clearInterval(wpmInterval);
    interval = null;
    wpmInterval = null;
    timer = [0,0,0,0];
    timerRunning = false;
    wpm = 0 + " WPM";
    timeElapsed = 0;
    errors = 0;

    testArea.value = "";
    testArea.disabled = false;
    theTimer.innerHTML = "00:00:00";
    testWrapper.style.borderColor = "grey";
    accuracyLabel.innerHTML = "100%";
    wordspmLabel.innerHTML = wpm;
    paragen();
}

testArea.addEventListener("keypress", start, false);
testArea.addEventListener("keyup", spelling, false);
resetButton.addEventListener("click", reset, false);
