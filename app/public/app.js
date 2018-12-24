/////////////////////////////////////////////////////////////////////////////////////////////////////////
//////// INITIALIZE JQUERY FUNCTIONALITY ////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Initialize the selection dropdowns
 */
$(document).ready(function() {
  $("select").formSelect();
});

/**
 * Initialize the modals
 */
$(document).ready(function() {
  $(".modal").modal();
});

c;

/**
 * Used for sending a new user into the database. This collects the information from the survey form and generates
 * an object with the new user's name, description, picture, and answer string
 */
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
  fPic = $("#photo").val();

  var newUser = {
    name: fName,
    friend_desc: fDesc,
    pic_url: fPic,
    answers: answerStr
  };

  return newUser;
}

/**
 * Once an object has been created with the new survey taker's information, post this information into the underlying
 * data tables that feed into the app.
 * @param {object} userObj
 */
function addUserToDB(userObj) {
  $.post("/api/friends", userObj, function(data) {
    console.log(data.affectedRows + " rows added");
  });
}

/**
 * Calls comparison function, passing in the newUser object.
 * @param {object} newUser
 * @param {function} compDB
 */
function getDB(newUser, compDB) {
  $.get("/api/friends", function(data) {
    return compDB(newUser, data);
  });
}

/**
 * Takes the new user object and the array of previous user objects. For each of the previous user objects, compare the
 * new user's answers to the previous user's answers. Return whoever is the closest match.
 * @param {object} newUser
 * @param {array} userArray
 */
function compDB(newUser, userArray) {
  var newAnswers = newUser.answers.split(",");

  // initialize the smallest distance and assumed index
  var smallestDist = 9999999;
  var smallestIndex = 0;

  for (var i = 0; i < userArray.length; i++) {
    var compAnswers = userArray[i].answers.split(",");

    // initialize the difference number;
    var diff = 0;

    // compare each answer and find the overall absolute difference. add these differences to the "diff" variable.
    for (var j = 0; j < newAnswers.length; j++) {
      diff += Math.abs(parseInt(newAnswers[j]) - parseInt(compAnswers[j]));
    }

    if (diff < smallestDist) {
      smallestDist = diff;
      smallestIndex = i;
    }
  }
  dispDB(userArray[smallestIndex]);
}

/**
 * Using the returned data object of the previous user closest matching the current user, display each relevant piece
 * of information in a modal.
 * @param {object} obj
 */
function dispDB(obj) {
  $("#match-name").html(obj.name);
  $("#match-desc").html(obj.friend_desc);
  $("#match-img").attr("src", obj.pic_url);
  $("#matchModal").modal("open");
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//////// CONTROL FUNCTIONS //////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Resets the inputs entered into the form upon closing the modal.
 */
$("#reset-button").on("click", function(event) {
  event.preventDefault();

  $("#input-form")[0].reset();
});

/**
 * Does data validation to make sure the user entered information.
 * If the user has entered information, creates an object (with makeObject()), compares the user with
 * previous users (getDB()), and then adds the new user to the DB (addUserToDB())
 */
$("#submitButton").on("click", function(event) {
  event.preventDefault();

  // data validation: make sure survey is answered
  var surveyAnswered = true;

  for (var i = 0; i < 11; i++) {
    if ($("#q" + i).val() === null) {
      surveyAnswered = false;
    }
  }

  if (!surveyAnswered) {
    alert("Please answer the survey!");
  }
  // data validation: enter information
  else if (
    $("#name")
      .val()
      .trim() === "" ||
    $("#desc")
      .val()
      .trim() === "" ||
    $("#photo")
      .val()
      .trim() === ""
  ) {
    alert("Please insert information about yourself!!");
  } else {
    // create the newUser object
    var newUser = makeObject();

    // compare newUser to existing users and create modal
    getDB(newUser, compDB);

    // add the newUser object to the underlying DB
    addUserToDB(newUser);
  }
});
