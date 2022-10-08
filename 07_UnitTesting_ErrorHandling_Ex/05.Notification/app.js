function notify(message) {
  let displayDiv = document.getElementById('notification');
  displayDiv.textContent = message;
  displayDiv.style.display = 'block';
  displayDiv.addEventListener('click', () => displayDiv.style.display = 'none');
}