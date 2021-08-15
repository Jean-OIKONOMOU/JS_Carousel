# What is this ?

This is a little project I'm making while studying for the ISTQB.

I haven't found any good program to make flashcards so I'm going to create my own with a simple carousel and cards that flip when you click them.

# Using this project

To generate the flashcards you have to create a **content.json** (yes, naming is important) whose items must have two keys :

- The content of the first key is for the flashcard's front.

- The content of the second key is for the flashcard's back.

Here's an example of what the **content.json** should look like :

```json
[
  { "name": "Simons", "age": "35" },
  { "name": "JC", "age": "24" },
  { "name": "Jock", "age": "46" }
]
```

You can write whatever you want as long as the structure is the same.

Clicking on a card will make it flip. Clicking outside of the card's area will make it flip back to its front.
