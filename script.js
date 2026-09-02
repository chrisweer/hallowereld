const greetings = [
  'Hallo daar!',
  'Goedendag!',
  'Fijn dat je er bent!',
  'Claude Code + GitHub, wat een combo.'
];

document.getElementById('greet-btn').addEventListener('click', () => {
  const message = greetings[Math.floor(Math.random() * greetings.length)];
  document.getElementById('response').textContent = message;
});
