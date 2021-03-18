const fs = require('fs');
const path = require('path');

module.exports = app => {
    fs.readFile("db/db.json","utf8",(err, data) => {
      if (err) throw err;
      let notes = JSON.parse(data);
     
      //Setup api/notes get route
      app.get("/api/notes", function(req, res){
       res.json(notes);
      });

      // Setup api/notes post route
      app.post("/api/notes", function(req, res){
       let newNote = req.body;
       notes.push(newNote);
       updateDb();
       return console.log("Added new note: "+newNote.title);
      });

      // Retrieves a note with specific id
      app.get("/api/notes/:id", function(req, res) {
       res.json(notes[req.params.id, 1]);
      });
      
        // Deletes a note with specific id
        app.delete("/api/notes/:id", function(req, res) {
            notes.splice(req.params.id, 1);
            updateDb();
            console.log("Delete note with id "+req.params.id);   
        });

        // Display notes.html
        app.get('/notes', function(req,res){
            res.sendFile(path.join(__dirname, "../public/index.html"));
        });

        //Updates Json file when note has been changed
        function updateDb() {
            fs.writeFile("db/db.json",JSON.stringify(notes,'\t'),err => {
              if (err) throw err;
              return true; 
            });
        }
    });
}
