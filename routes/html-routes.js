module.exports = function(app) {

    app.get("/approval", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/approval.html"));
    });
  
    app.get("/boxes", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/boxes.html"));
    });
  
    // If no matching route is found default to home
    app.get("*", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/home.html"));
    });
  };
  