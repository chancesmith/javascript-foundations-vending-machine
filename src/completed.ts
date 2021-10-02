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
// select option
function selectOption(option: ICan) {
  // check if there are enough cans
  if (option.cansLeft < 1) {
    alert(`💩 Poop: We're out of ${option.flavor}`);
    return;
  }
  // check if there is can is dropped already
  if ($opening.innerHTML !== "") {
    alert("Please get last can dropped first! 🙃");
    return;
  }
  // drop can
  $opening.innerHTML = `<div class="can">${option.logo}</div>`;
  // update inventory/options data
  options = options.map((opt) => {
    if (option.flavor === opt.flavor) {
      return { ...opt, cansLeft: opt.cansLeft > 1 ? opt.cansLeft - 1 : 0 };
    } else {
      return opt;
    }
  });
  // update options view
  showOptions();
}

// show options
function showOptions() {
  $panelOptions.innerHTML = ``;
  options.forEach((option) => {
    const optionDiv = document.createElement("div");
    optionDiv.classList.add("option");
    if (option.cansLeft < 1) optionDiv.classList.add("disabled");
    optionDiv.innerHTML = option.flavor;
    optionDiv.addEventListener("click", () => selectOption(option));
    $panelOptions.append(optionDiv);
  });
}
showOptions();

// click dropped can
$opening.addEventListener("click", () => {
  $opening.innerHTML = ``;
});
