// import { API } from "./data.js";

API.getJournalEntries().then((entries) => {
        renderJournalEntries(entries);
        addDeleteListener();
})
// make a function that gets all entry delete buttons out of DOM.  
// Get all delete buttons out of DOM an loop thorugh them and attach event listener to each one with functionality to delete each entry. 
document.querySelector("#recordEntry").addEventListener("click", () => {
        let date = document.getElementById("journalDate").value 
        let concept = document.getElementById("conceptsCovered").value
        let journalEntry = document.getElementById("entries").value
        let mood = document.getElementById("mood").value
        const newJournalEntry = createJournalEntry(date, concept, journalEntry, mood)
        if (date && concept && journalEntry && mood) {
                API.saveJournalEntry(newJournalEntry);
                API.getJournalEntries().then((entries) => renderJournalEntries(entries))
        }
})

function createJournalEntry(date, concept, entry, mood) {
        return {
        date: date,
        concept: concept,
        entry: entry,
        mood: mood
        };
}

const radioButtons = document.getElementsByName('radioButton');

for (var i = 0; i < radioButtons.length; i++) {
    radioButtons[i].addEventListener('click', event => {
        console.log('event: ', event.target.value);
        const mood = event.target.value;
        API.getJournalEntries().then((entries) => {
                const filteredEntries = entries.filter((entry) => entry.mood === mood)
                renderJournalEntries(filteredEntries);
                addDeleteListener();
        })
    })
}