const middleware  = require("../../lib/middleware");
const apiCtrl     = require("../controller/api");

module.exports = function(app) {
  app.all("/",(req,res)=>{
    res.json({result:"Pankod Rest Working",status:"OK"})
  })
  app.get("/api/v1/movies", middleware.secure, apiCtrl.getMovies);
  app.get("/api/v1/series", middleware.secure, apiCtrl.getSeries);

};
