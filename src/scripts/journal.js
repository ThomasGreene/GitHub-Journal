// import { API } from "./data.js";

API.getJournalEntries().then((entries) => renderJournalEntries(entries));

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