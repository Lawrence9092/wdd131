// Step 1: Get references to the input, button, and list elements
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');
const list = document.querySelector('_______');

// Step 2: Add a click event listener to the Add Chapter button
hamButton.addEventListener('click', function () {
    navigation.classList.toggle("open");
    hamButton.classList.toggle("open");
});
  // Step 3: Check that the input is not blank
  if (input.value.trim() !== '') {
    // ✅ .trim() removes leading and trailing whitespace 
    // (so " Alma 5 " is treated as "Alma 5", and empty spaces count as blank)

    // Step 4: Create an li element
    const li = document.createElement('li');

    // Step 5: Create a delete button
    const deleteButton = document.createElement('button');

    // Step 6: Populate li textContent with the input value
    li.textContent = input.value;

    // Step 7: Populate delete button textContent with ❌
    deleteButton.textContent = '❌';

    // Step 8: Append delete button to li
    li.append(deleteButton);

    // Step 9: Append li to the unordered list
    list.append(li);

    // Step 10: Add event listener to the delete button
    deleteButton.addEventListener('click', function () {
      list.removeChild(li);
      input.focus(); // return focus to input after deleting
    });

    // Step 11: Clear the input
    input.value = '';
  } else {
    // Optional: You can show a message or just silently do nothing
    // Example:
    alert('Please enter a chapter title.');
  }

  // Step 12: Return focus to the input field (always happens)
  input.focus();
});

