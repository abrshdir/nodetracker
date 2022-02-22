const sql = require("./db.js");

// constructor
const Location = function(tutorial) {
    this.lat = tutorial.lat;
    this.lng = tutorial.lng;
};

Location.create = (newLocation, result) => {
    sql.query("INSERT INTO tracker SET ?", newLocation, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("created location: ", { id: res.insertId, ...newLocation });
        result(null, { id: res.insertId, ...newLocation });
    });
};
module.exports = Location;
