
function getFirstSelector(selector) {
    return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector("#nested .target")
}

function increaseRankBy(n) {
  var rankedList = document.querySelectorAll(".ranked-list li")
  for (var i = 0; i < rankedList.length; i++) {
    var int = parseInt(rankedList[i].textContent, 10)
    rankedList[i].textContent = int += n
  }
}

function deepestChild() {
  return document.querySelector("#grand-node div div div div");
}
