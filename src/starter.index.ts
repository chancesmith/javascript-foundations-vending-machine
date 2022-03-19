const $panelOptions = document.getElementById("panelOptions")!;
const $opening = document.getElementById("opening")!;

interface ICan {
  flavor: string;
  logo: string;
  cansLeft: number;
}

let options: ICan[] = [
  {
    flavor: "Cold Pop 🤯",
    logo: "🤯",
    cansLeft: 5
  },
  {
    flavor: "Dr. Great 💪",
    logo: "💪",
    cansLeft: 5
  },
  {
    flavor: "Mtn Rush ⛰",
    logo: "⛰",
    cansLeft: 0
  }
];

// Coke Machine Problems
// 1. show options
// 2. select option + deliver drink
// 3. update options based on inventory/options
// 4. check if can is in opening before delivering

// ACTIONS
// show options
function showOptions() {
  // clear options
  // loop through each option
  // adding each to $panelOptions
}

// select option
function selectOption(option: ICan) {
  // check if there are enough cans
  // check if there is a can dropped already
  // drop can
  // update inventory/options data
  // update options view
}

showOptions();

// listen for click dropped can
