function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
   return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  var newRanks = document.querySelectorAll('ul.ranked-list li');
  for (var i = 0; i < newRanks.length; i++) {
    newRanks[i].innerHTML = parseInt(newRanks[i].innerHTML) + n
  }
}

function deepestChild(){
//  var deepest = document.getElementById('grand-node').querySelectorAll('div')
//  return deepest[deepest.length-1]

//var starter = document.getElementById('grand-node');
//var nextStop = starter.children[0];

//while (nextStop) {
//  starter = nextStop;
//  nextStop = starter.children[0];
let node = document.getElementById('grand-node');
let nextNode = node.children[0];

while (nextNode) {
  node = nextNode;
  nextNode = node.children[0];

}

}
