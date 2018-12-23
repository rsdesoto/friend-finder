console.log("hello");

function makeObject() {
  var answerStr = "";

  for (var i = 1; i < 11; i++) {
    if (i === 1) {
      answerStr += $(`#q${i}`).val();
    } else {
      answerStr += `,${$(`#q${i}`).val()}`;
    }
  }
  console.log(answerStr);

  fName = $("#name").val();
  fDesc = $("#desc").val();

  var newUser = { name: fName, friend_desc: fDesc, answers: answerStr };

  return newUser;
}

function addUserToDB(userObj) {
  $.post("/api/friends", userObj, function(data) {
    console.log(data);
  });
}

/**
 * on submit -- 1. log the user's information (addUserToDB)
 *              2. get all previous answers and compare to user (getUser and compareUser)
 *              3. post new user
 */
$("#submitButton").on("click", function(event) {
  event.preventDefault();

  // create the newUser object
  var newUser = makeObject();

  var compArr = getDB();

  compareInfo(newUser, compArr);

  // add the newUser object to the underlying DB
  addUserToDB(newUser);
});

function compareInfo(newUser, userArray) {
  var newAnswers = newUser.answers.split(",");
  console.log(newAnswers);
  for (var i = 0; i < userArray.length; i++) {
    var compAnswers = userArray[i].answers.split(",");
    console.log(compAnswers);
  }
  // placeholder
  // compare newUser object to userArray objects -- return back the correct index value
  // use index value to pull in information about the user as a modal
}

$("#getButton").on("click", function(event) {
  event.preventDefault();
  $.get("/api/friends", function(data) {
    console.log(data);
  });
});

function getDBAndCompare(newUser) {
  $.get("/api/friends", function(data) {
    console.log(data);
    // returns an array of objects
    return data;
  });
}

function getDB() {
  $.get("/api/friends", function(data) {
    console.log(data);
    // returns an array of objects
    return data;
  });
}

// rd - placeholder - this works come back if you break everything
// function getDB() {
//   $.get("/api/friends", function(data) {
//     console.log(data);
//     // returns an array of objects
//     return data;
//   });
// }
