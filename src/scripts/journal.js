fetch("http://localhost:3000/journalEntries") // Fetch from the API
    .then(entries => entries.json())  // Parse as JSON
    .then( entry => {
        // What should happen when we finally have the array?
        for (let i = 0; i < entry.length; i++) {
            entryContainer.innerHTML += makeJournalEntryComponent (
                entry[i].date,
                entry[i].concept,
                entry[i].entry,
                entry[i].mood
            )
        }
    })

// Purpose: To create, and return, a string template that
// represents a single journal entry object as HTML

// Arguments: journalEntry (object)

const makeJournalEntryComponent = (date, concept, entry, mood) => {
// Create your own HTML structure for a journal entry
    return `
    <p>
    ${date} we learned about ${concept} and other notes include 
    ${entry} and I was feeling ${mood}
    </p> `;
}

// Purpose: To render all journal entries to the DOM

// Arguments: entries (array of objects)

let entryContainer = document.querySelector(".entryLog")