var mysql = require("mysql");
// 3. Your `htmlRoutes.js` file should include two routes:

// 2. Your `server.js` file should require the basic
// npm packages we've used in class: `express` and `path`.

module.exports = function(app) {
    // connection.query("SELECT * FROM friends", function(err, data) {
    //     if (err) throw err;
    //     console.log(data);
    // });

    // Basic route that sends the user first to the AJAX Page
    app.get("/api/friends", function(req, res) {
        console.log("hello");
        connection.query("SELECT * FROM friends", function(err, data) {
            if (err) throw err;
            console.log(data);
            // console.log("Hell0");
            res.render(data);
        });
    });

    var tester = {
        name: "test",
        friend_desc: "a friendly ghost",
        q1: 2,
        q2: 2,
        q3: 2,
        q4: 2,
        q5: 2,
        q6: 2,
        q7: 2,
        q8: 2,
        q9: 2,
        q10: 2
    };

    // Basic route that sends the user first to the AJAX Page
    app.post("/api/friends", function(req, res) {
        connection.query(
            "INSERT INTO friends (name, friend_desc,q1,q2,q3,q4,q5,q6,q7,q8,q9,q10",
            [
                tester.name,
                tester.friend_desc,
                tester.q1,
                tester.q2,
                tester.q3,
                tester.q4,
                tester.q5,
                tester.q6,
                tester.q7,
                tester.q8,
                tester.q9,
                tester.q10
            ],
            function(err, data) {
                if (err) throw err;
                console.log(data);
            }
        );
    });
};

// 4. Your `apiRoutes.js` file should contain two routes:

//    - A GET route with the url `/api/friends`.
//    This will be used to display a JSON of all possible friends.
//    - A POST routes `/api/friends`. This will be
//    used to handle incoming survey results.
//    This route will also be used to handle the compatibility logic.

// 5. In addition to the two routes, your apiRoutes.js file
// will included a connection to your database and the required
// logic to read and write data. Be sure to require the 'mysql'
// npm package!
//    Be sure to reference the MySQLHerokuDeploymentProcess.pdf
//    file guidance in setting up your database to work on heroku,
//     but your connection will look something like this:
