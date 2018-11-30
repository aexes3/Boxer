module.exports = function(app) {

    app.get("/login", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/approval.html"));
    });
  
    app.get("/checkout", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/boxes.html"));
    });
  
    // If no matching route is found default to home
    app.get("*", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/home.html"));
    });
  
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });
};