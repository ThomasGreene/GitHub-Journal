// code that is responsible for modifying the DOM
const  renderJournalEntries = (entries) => {
        let string = ""
        let thisPoints = document.querySelector(".entryLog")
        entries.forEach(journalEntry => {
            string += makeJournalEntryComponent(journalEntry)
        });
        thisPoints.innerHTML = string
}