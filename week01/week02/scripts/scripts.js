// Step 1: Get references
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');
const input = document.querySelector('#chapterInput'); // <-- fix: your input field
const addButton = document.querySelector('#addButton'); // <-- fix: button to add chapters
const list = document.querySelector('#chapterList');   // <-- fix: your <ul> element

// Step 2: Toggle menu
hamButton.addEventListener('click', function () {
  navigation.classList.toggle("open");
  hamButton.classList.toggle("open");
});

// Step 3: Add chapter button click
addButton.addEventListener('click', function () {
  if (input.value.trim() !== '') {
    const li = document.createElement('li');
    li.textContent = input.value;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = '❌';

    li.append(deleteButton);
    list.append(li);

    deleteButton.addEventListener('click', function () {
      list.removeChild(li);
      input.focus();
    });

    input.value = '';
  } else {
    alert('Please enter a chapter title.');
  }
  
  input.focus();
});

