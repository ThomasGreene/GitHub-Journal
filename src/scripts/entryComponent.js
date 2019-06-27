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
                <button id="${journalEntry.id}" class="deleteBtn">Delete</button>
        </div>
        `;
}

let entryContainer = document.querySelector(".entryLog")