// code that is responsible for modifying the DOM
const  renderJournalEntries = (entries) => {
        let string = ""
        let thisPoints = document.querySelector(".entryLog")
        entries.forEach(journalEntry => {
            string += makeJournalEntryComponent(journalEntry)
        });
        thisPoints.innerHTML = string
}

// make a function that gets all entry delete buttons out of DOM.  
// Get all delete buttons out of DOM and loop through them and attach event listener to each one with functionality to delete each entry.
const addDeleteListener = () => {
    let deleteButtons = document.querySelectorAll(".deleteBtn")
    for (let i = 0; i < deleteButtons.length; i++) {
        deleteButtons[i].addEventListener("click", () => {
            console.log('deleteButtonClicked')
            API.deleteEntry(event.target.id);
            API.getJournalEntries().then((entries) => {
                renderJournalEntries(entries);
                addDeleteListener();
                API.getJournalEntries().then((entries) => renderJournalEntries(entries))
            })
        })
    }
}