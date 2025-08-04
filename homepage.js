function showResult() {
  const answers = ['q1', 'q2', 'q3', 'q4'];
  const scores = { hiphop: 0, salsa: 0, bharatanatyam: 0 };

  for (let q of answers) {
    const selected = document.querySelector(`input[name="${q}"]:checked`);
    if (selected) scores[selected.value]++;
  }

  const max = Math.max(scores.hiphop, scores.salsa, scores.bharatanatyam);
  let result = '';

  if (max === scores.hiphop) {
    result = "🔥 You belong to Hip-Hop! You're bold, powerful, and love to express with energy!";
  } else if (max === scores.salsa) {
    result = "💃 Salsa is your style! You're vibrant, lively, and love dancing with joy.";
  } else if (max === scores.bharatanatyam) {
    result = "🌸 Bharatanatyam suits you! You’re graceful, expressive, and deeply connected to tradition.";
  } else {
    result = "Hmm… looks like you're a mix of styles! Explore and find your favorite!";
  }

  document.getElementById("result").innerText = result;
}