

async function getjokes() {
  const setupEl = document.getElementById("setup");
  const punchlineEl = document.getElementById("punchline");
  const btn = document.querySelector(".btn button");

  

  try {
    const response = await fetch("https://official-joke-api.appspot.com/random_joke");

    if (!response.ok) throw new Error("Failed to fetch joke 😢");

    const data = await response.json();

    setupEl.innerText = data.setup;
    punchlineEl.innerText = data.punchline;

  } catch (error) {
    setupEl.innerText = "Oops! Something went wrong.";
    punchlineEl.innerText = "Try again in a moment.";
    console.error("Joke API error:", error);
  }

  // Restore button
  btn.disabled = false;
  btn.innerText = "Get Joke 🤖";
}
