// document.getElementById("astroForm").addEventListener("submit", function(e) {
//   e.preventDefault();

//   let fname = document.getElementById("fname").value;
//   let lname = document.getElementById("lname").value;
//   let date = parseInt(document.getElementById("date").value);
//   let month = parseInt(document.getElementById("month").value);

//   let zodiac = getZodiac(date, month);

//   let message = `
//     🌟 Hello ${fname} ${lname}! <br><br>
//     Your Zodiac Sign is <b>${zodiac}</b> <br><br>
//     🔮 Today’s Prediction: <br>
//     You will experience positive energy and growth. Stay focused and trust your instincts!
//   `;

//   document.getElementById("result").innerHTML = message;
// });


// function getZodiac(day, month) {
//   if ((month == 3 && day >= 21) || (month == 4 && day <= 19)) return "Aries ♈";
//   if ((month == 4 && day >= 20) || (month == 5 && day <= 20)) return "Taurus ♉";
//   if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) return "Gemini ♊";
//   if ((month == 6 && day >= 21) || (month == 7 && day <= 22)) return "Cancer ♋";
//   if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) return "Leo ♌";
//   if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) return "Virgo ♍";
//   if ((month == 9 && day >= 23) || (month == 10 && day <= 22)) return "Libra ♎";
//   if ((month == 10 && day >= 23) || (month == 11 && day <= 21)) return "Scorpio ♏";
//   if ((month == 11 && day >= 22) || (month == 12 && day <= 21)) return "Sagittarius ♐";
//   if ((month == 12 && day >= 22) || (month == 1 && day <= 19)) return "Capricorn ♑";
//   if ((month == 1 && day >= 20) || (month == 2 && day <= 18)) return "Aquarius ♒";
//   if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) return "Pisces ♓";
// }



//based on month
const zodiacSigns = [
    "Capricorn","Aquarius","Pisces","Aries","Taurus","Gemini",
    "Cancer","Leo","Virgo","Libra","Scorpio","Sagittarius"
]


//based on days
const compliments = [
  "You have a beautiful soul.",
  "Your smile can brighten anyone’s day.",
  "You are incredibly kind.",
  "You bring positivity wherever you go.",
  "You are stronger than you think.",
  "You have a great sense of humor.",
  "You inspire people around you.",
  "You are truly unique.",
  "You have a wonderful personality.",
  "You make people feel comfortable.",
  "Your creativity is amazing.",
  "You are very thoughtful.",
  "You handle situations with grace.",
  "You have a sharp mind.",
  "You are full of potential.",
  "You spread happiness effortlessly.",
  "You are a great listener.",
  "You have a warm heart.",
  "You make a difference in people’s lives.",
  "You are very reliable.",
  "You shine in your own way.",
  "You are incredibly talented.",
  "You radiate confidence.",
  "You are always learning and growing.",
  "You have a positive attitude.",
  "You make the world a better place.",
  "You are courageous.",
  "You have a charming presence.",
  "You are full of good ideas.",
  "You are genuinely amazing.",
  "You deserve all the happiness in the world."
];


// size 20
const victimCompliments = [
  "You always give your best to others, even when it’s not returned.",
  "You have a kind heart that often gets taken for granted.",
  "You help everyone selflessly, even when no one notices.",
  "You deserve the same care you give to others.",
  "You are always there for people, even when they aren’t there for you.",
  "You keep doing good, even when life feels unfair.",
  "Your efforts often go unseen, but they truly matter.",
  "You sacrifice a lot for others without expecting anything back.",
  "You stay strong even when you feel unappreciated.",
  "You care deeply, even when people don’t understand you.",
  "You always put others first, even when you shouldn’t have to.",
  "You handle disappointment with quiet strength.",
  "You give love freely, even when it’s not returned equally.",
  "You keep trusting people despite being hurt before.",
  "You are too kind for a world that doesn’t always notice.",
  "You carry more than people realize, yet you keep going.",
  "You remain genuine even when others aren’t.",
  "You deserve better than how people sometimes treat you.",
  "You never stop being good, even when others do.",
  "You keep shining even in difficult situations."
];


// size 30
const lifeRecommendations = [
  "Feed a street dog or stray animal.",
  "Help an elderly person cross the road.",
  "Plant a tree and take care of it.",
  "Donate clothes you no longer use.",
  "Spend quality time with your family.",
  "Wake up early and enjoy the sunrise.",
  "Practice gratitude every day.",
  "Exercise regularly, even if it’s just a walk.",
  "Drink enough water throughout the day.",
  "Read a book that improves your mindset.",
  "Learn a new skill or hobby.",
  "Avoid unnecessary negativity on social media.",
  "Call a friend you haven’t spoken to in a while.",
  "Help someone without expecting anything in return.",
  "Keep your surroundings clean.",
  "Save a small amount of money regularly.",
  "Respect your parents and elders.",
  "Meditate for a few minutes daily.",
  "Stay honest in your actions.",
  "Forgive people and let go of grudges.",
  "Limit screen time before sleeping.",
  "Spend time in nature whenever possible.",
  "Volunteer for a good cause.",
  "Write down your goals and work on them.",
  "Avoid comparing yourself to others.",
  "Stay positive even during tough times.",
  "Eat healthy and balanced meals.",
  "Learn to say no when necessary.",
  "Appreciate small moments in life.",
  "Believe in yourself and your journey."
];

//size 20

const futurePredictions = [
  "You will achieve great financial success in the future.",
  "You will become a crorepati one day.",
  "You will build a strong and successful career.",
  "You will gain recognition for your hard work.",
  "You will travel to many beautiful places.",
  "You will make your family proud.",
  "You will overcome all challenges in your path.",
  "You will live a happy and fulfilling life.",
  "You will achieve your biggest dreams.",
  "You will become a leader in your field.",
  "You will attract great opportunities soon.",
  "You will meet people who change your life positively.",
  "You will create something meaningful and impactful.",
  "You will enjoy both success and inner peace.",
  "You will grow stronger with every experience.",
  "You will find true happiness in simple things.",
  "You will achieve stability and comfort in life.",
  "You will inspire others with your journey.",
  "You will turn your ideas into reality.",
  "You will achieve more than you ever imagined."
]; 

const form = document.getElementById('astroForm');

form.addEventListener('submit',(event)=>{
    event.preventDefault();

    const name = document.getElementById('fname').value;

    const lname = document.getElementById('lname').value;

    const day = Number(document.getElementById('date').value);

    const month = Number(document.getElementById('month').value);

    const year = Number(document.getElementById('year').value);


    const result = document.getElementById('result')

    const first_message = `Hell ${name} ${lname}.`;
    const second_message = `Your Zodiac sign is ${zodiacSigns[month-1]}.`;
    const third_message = compliments[day-1];

    const index = Math.floor(Math.random()*20);
    const fourth_message = victimCompliments[index];

    const len = (name.length*lname.length*year)%30
    const fifth_message = lifeRecommendations[len]

    const pre = (day*month*year)%20
    const sixth_message = futurePredictions[pre];

const messages = [
  first_message,
  second_message,
  third_message,
  fourth_message,
  "Recommendation: " + fifth_message,
  "Prediction: " + sixth_message
];

messages.forEach(msg => {
  const li = document.createElement('li');
  li.innerText = msg;
  li.style.marginBottom = '10px';
  li.style.padding = '10px';
  result.append(li);
});
    // result.innerText = `${first_message} ${second_message} ${third_message} ${fourth_message} Our reccomdetion for you: ${fifth_message} Your future pediction is: ${sixth_message}`

    
})