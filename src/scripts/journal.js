const journalEntries = [];

const journalEntry1 = {
    date: "05/29/2019",
    concept: "functions",
    entry: "We started the basics of functions",
    mood: "happy"
}
journalEntries.push(journalEntry1)
console.log(journalEntries)


const journalEntry2 = {
    date: "06/04/2019",
    concept: "objects representing things",
    entry: "By far the most difficult thing I've had to learn so far.  Need to get better with for loops and if statements",
    mood: "frustrated"
}
journalEntries.push(journalEntry2)
console.log(journalEntries)


const journalEntry3 = {
    date: "06/05/2019",
    concept: "functions",
    entry: "Started working with JSON and Postman. Need to review previous chapters up to this point",
    mood: "happy"
}
journalEntries.push(journalEntry3)
console.log(journalEntries)





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

for (let i = 0; i < journalEntries.length; i++) {
    entryContainer.innerHTML += makeJournalEntryComponent (
        journalEntries[i].date,
        journalEntries[i].concept,
        journalEntries[i].entry,
        journalEntries[i].mood
    );
}