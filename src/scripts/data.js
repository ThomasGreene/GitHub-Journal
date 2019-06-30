// deals with getting the data into this file.
const API = {
    getJournalEntries: () => {
        return fetch("http://localhost:8088/journalEntries")
            .then(response => response.json())
    },
    saveJournalEntry(newJournalEntry) {
    // Invoke the factory function, passing along the form field values
    // Use `fetch` with the POST method to add your entry to your API
    // Replace "url" with your API's URL
    return fetch ("http://localhost:8088/journalEntries", { 
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newJournalEntry)
        })
        },
        deleteEntry(id) {
            return fetch(`http://localhost:8088/journalEntries/${id}`, {
            method: "DELETE",
            headers:{
                "Content-Type": "application/json"
            }
            })
        },
        editEntry(updatedJournalEntry, id) {
          return fetch(`http://localhost:8088/journalEntries/${id}`, {
              method: "PUT",
              headers: {
                  "Content-Type": "application/json"
              },
              body: JSON.stringify(updatedJournalEntry)
          })
          .then(res => res.json())
        }
}