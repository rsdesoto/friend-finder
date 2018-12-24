$(document).ready(function() {
  $("select").formSelect();
});

$(document).ready(function() {
  $(".modal").modal();
});

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
  fPic = $("#photo").val();

  var newUser = {
    name: fName,
    friend_desc: fDesc,
    pic_url: fPic,
    answers: answerStr
  };

  return newUser;
}

function addUserToDB(userObj) {
  $.post("/api/friends", userObj, function(data) {
    console.log(data.affectedRows + " rows added");
  });
}

/**
 * on submit -- 1. log the user's information (addUserToDB)
 *              2. get all previous answers and compare to user (getUser and compareUser)
 *              3. post new user
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

$("#getButton").on("click", function(event) {
  event.preventDefault();
  $.get("/api/friends", function(data) {
    console.log(data);
  });
});

/**
 *
 * compare - each number: do abs(newAnswers - compAnswers)
 * if this is below the starter value: return the new starter value and index
 */

function compDB(newUser, userArray) {
  var newAnswers = newUser.answers.split(",");

  var smallestDist = 9999999;
  var smallestIndex = 0;

  for (var i = 0; i < userArray.length; i++) {
    var compAnswers = userArray[i].answers.split(",");

    // initialize the difference number;
    var diff = 0;

    for (var j = 0; j < newAnswers.length; j++) {
      diff += Math.abs(parseInt(newAnswers[j]) - parseInt(compAnswers[j]));
    }

    if (diff < smallestDist) {
      smallestDist = diff;
      smallestIndex = i;
    }
  }
  dispDB(userArray[smallestIndex]);
  // return userArray[smallestIndex];
}
function getDB(newUser, compDB) {
  $.get("/api/friends", function(data) {
    return compDB(newUser, data);
  });
}

// RD - placeholder --
// this will be the logic to create the modal
function dispDB(obj) {
  console.log(obj);
  // alert(obj.name + " " + obj.friend_desc);
  $("#match-name").html(obj.name);
  $("#match-desc").html(obj.friend_desc);
  $("#match-img").attr("src", obj.pic_url);
  $("#matchModal").modal("open");
}

$("#reset-button").on("click", function(event) {
  event.preventDefault();
  $.reset();
});

// <div id="matchModal" class="modal">
//         <div class="modal-content">
//           <h4>Your match is.........</h4>
//           <h3 id="match-name">PLACEHOLDER</h3>
//           <p id="match-desc">A bunch of text</p>
//           <img id="match-img" src="./assets/survey_header.jpg" alt="match" />
//         </div>
//         <div class="modal-footer">
//           <a href="#!" class="modal-close waves-effect waves-green btn-flat"
//             >Close</a
//           >
//         </div>
//       </div>
