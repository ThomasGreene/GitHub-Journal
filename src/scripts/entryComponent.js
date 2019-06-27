const journalEntry = ["Manipulating the DOM"]
// journalEntry.push("JS Objects", "Functions and Logic", "Building DOM Components")
const makeJournalEntryComponent = (journalEntry) => {
// Create your own HTML structure for a journal entry

return `
<div>
        <p>
        ${journalEntry.date} we learned about ${journalEntry.concept} and other notes include 
        ${journalEntry.entry} and I was feeling ${journalEntry.mood}
        </p> 
        <button class="${journalEntry.id}" id="deleteBtn">Delete</button>
</div>
`;
}

// Purpose: To render all journal entries to the DOM

// Arguments: entries (array of objects)

const makeJournalEntryComponentObject = Object.create(makeJournalEntryComponent);

let entryContainer = document.querySelector(".entryLog")