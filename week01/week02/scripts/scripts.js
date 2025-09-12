// Step 1: Get references to the input, button, and list elements
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('ul'); // fill in the blank with 'ul'

// Step 2: Add a click event to the button
button.addEventListener('click', () => {
  // Step 3: Create an li element
  const li = document.createElement('li');

  // Step 4: Create a delete button
  const deleteButton = document.createElement('button');

  // Step 5: Populate li textContent with the input value
  li.textContent = input.value;

  // Step 6: Populate delete button textContent with ❌
  deleteButton.textContent = '❌';

  // Step 7: Append delete button to li
  li.append(deleteButton);

  // Step 8: Append li to the unordered list
  list.append(li);

  // Step 9: Clear input field and refocus for next entry
  input.value = '';
  input.focus();

  // Step 10: Add delete functionality
  deleteButton.addEventListener('click', () => {
    list.removeChild(li);
  });
});
