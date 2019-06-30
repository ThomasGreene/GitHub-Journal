const journalEntry = ["Manipulating the DOM"]
// journalEntry.push("JS Objects", "Functions and Logic", "Building DOM Components")
const makeJournalEntryComponent = (journalEntry) => {
        // Create your own HTML structure for a journal entry
        return `
        <div>
                <div id="${journalEntry.id}-entryDisplay" class="entryDisplay">
                        <p>
                        ${journalEntry.date} we learned about ${journalEntry.concept} and other notes include 
                        ${journalEntry.entry} and I was feeling ${journalEntry.mood}
                        </p> 
                        <button id="${journalEntry.id}" class="deleteBtn">Delete</button>
                        <button id="${journalEntry.id}" class="editBtn">Edit</button>
                </div>
                <div id="${journalEntry.id}-editDisplay" class="editJournalEntry">
                        <label for="journalDate">Date of Entry</label>
                        <input type="date" name="journalDate" id="editJournalDate" value='${journalEntry.date}'>
                        <br>
                        <label for="conceptsCovered">Concepts Covered</label>
                        <input type="text" name="conceptsCovered" id="editConceptsCovered" value='${journalEntry.concept}'>
                        <br>
                        <label for="journalEntry">Journal Entry</label>
                        <input type="text" name="journalEntry" id="editEntries" value='${journalEntry.entry}'>
                        <br>
                        <label for="mood">Mood for the Day</label>
                        <select value='${journalEntry.mood}' id="editMood">
                                <option value="Happy" selected>Happy</option>
                                <option value="Meh">Meh</option>
                                <option value="Frustrated">Frustrated</option>
                        </select>
                        <button id="${journalEntry.id}" class="saveBtn">Save</button>
                </div>
        </div>
        `;
}

let entryContainer = document.querySelector(".entryLog")