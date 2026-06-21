const readline = require("readline");

// UTILITIES
function randomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// TYPEWRITER EFFECT
async function typeWriter(text, speed = 20) {
  for (let char of text) {
    process.stdout.write(char);
    await sleep(speed);
  }
  console.log();
}

// LOADING BAR
async function loadingBar() {
  process.stdout.write("Initializing cosmic scanner ");

  for (let i = 0; i < 20; i++) {
    process.stdout.write("█");
    await sleep(80);
  }

  console.log(" 100%");
  console.log();
}

// COLORS
const colors = {
  cyan: "\x1b[36m",
  green: "\x1b[32m",
  magenta: "\x1b[35m",
  yellow: "\x1b[33m",
  red: "\x1b[31m",
  reset: "\x1b[0m"
};

// ASCII ART
const ascii = [
`
        ███████
     ███       ███
   ██             ██
  ██      🌌       ██
   ██             ██
     ███       ███
        ███████
      GALACTIC CORE
`,
`
        /\\
       /  \\
      /----\\
     / |  | \\
       |🚀|
      /____\\
   INTERSTELLAR SHIP
`,
`
        ✦     ✦
     ✦     ☄     ✦
        ✦     ✦
     COSMIC SIGNAL
`
];

// ORACLE DATABASE
const oracle = {

  role: [
    "Starship Captain",
    "Void Cartographer",
    "Quantum Hacker",
    "Nebula Navigator",
    "Planetary Guardian",
    "AI Whisperer"
  ],

  mission: [
    "discover a hidden galaxy",
    "decode an alien transmission",
    "protect a dying star",
    "map the edge of the universe",
    "stop an interstellar conflict"
  ],

  energy: [
    "critical",
    "unstable",
    "balanced",
    "high",
    "cosmic overload"
  ],

  prophecy: [
    "The stars reward the brave.",
    "A strange signal will guide your path.",
    "Your curiosity will open a forbidden door.",
    "A silent ally watches your journey.",
    "Your destiny is larger than you think."
  ],

  destiny: [
    "Minor anomaly",
    "Interesting lifeform",
    "Galactic agent",
    "Legend of the cosmos",
    "Universal constant"
  ]

};

// GENERATE READING
function generateReading() {

  return {
    role: randomItem(oracle.role),
    mission: randomItem(oracle.mission),
    energy: randomItem(oracle.energy),
    prophecy: randomItem(oracle.prophecy),
    destiny: randomItem(oracle.destiny),
    art: randomItem(ascii)
  };

}

// TERMINAL SETUP
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// MAIN PROGRAM
async function startOracle() {

  console.clear();

  await typeWriter(colors.magenta + "COSMIC TERMINAL ORACLE v2.0" + colors.reset);
  await typeWriter("Connecting to deep space network...");
  await loadingBar();

  rl.question("Enter traveler ID: ", async (name) => {

    console.log();

    await typeWriter(`Scanning identity for ${name}...`);
    await sleep(500);

    while (true) {

      const reading = generateReading();

      console.log(colors.yellow + reading.art + colors.reset);

      await typeWriter(`${colors.cyan}ROLE:${colors.reset} ${reading.role}`);
      await typeWriter(`${colors.green}MISSION:${colors.reset} ${reading.mission}`);
      await typeWriter(`${colors.magenta}ENERGY:${colors.reset} ${reading.energy}`);
      await typeWriter(`${colors.yellow}PROPHECY:${colors.reset} "${reading.prophecy}"`);
      await typeWriter(`${colors.red}DESTINY LEVEL:${colors.reset} ${reading.destiny}`);

      console.log("\n--------------------------------------\n");

      await new Promise(resolve => {
        rl.question("Press ENTER to request another transmission...", () => {
          console.log();
          resolve();
        });
      });

    }

  });

}

startOracle();