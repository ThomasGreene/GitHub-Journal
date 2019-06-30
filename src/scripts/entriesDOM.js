const  renderJournalEntries = (entries) => {
  let string = ""
  let thisPoints = document.querySelector(".entryLog")
  entries.forEach(journalEntry => {
      string += makeJournalEntryComponent(journalEntry)
  });
  thisPoints.innerHTML = string
  addDeleteListener();
  addEditListener();
  addSaveListener();
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

const addEditListener = () => {
  let editButtons = document.querySelectorAll(".editBtn")
  for (let i = 0; i < editButtons.length; i++) {
        editButtons[i].addEventListener("click", (event) => {
        document.getElementById(`${event.target.id}-editDisplay`).style.display = "block";
        document.getElementById(`${event.target.id}-entryDisplay`).style.display = "none";
    })
  }
}

const addSaveListener = () => {
  let saveButtons = document.querySelectorAll(".saveBtn")
  for (let i = 0; i < saveButtons.length; i++) {
    saveButtons[i].addEventListener("click", (event) => {
      API.editEntry(createJournalEntry(
              document.getElementById('editJournalDate').value,
              document.getElementById('editConceptsCovered').value,
              document.getElementById('editEntries').value,
              document.getElementById('editMood').value
      ), event.target.id)
      API.getJournalEntries().then((entries) => {
        renderJournalEntries(entries);
        addSaveListener();
        API.getJournalEntries().then((entries) => renderJournalEntries(entries))
      })
  })
}
}