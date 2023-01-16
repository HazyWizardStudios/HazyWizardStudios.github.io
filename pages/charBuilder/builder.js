// functions to calculate secondary stats
function calculateVitality(power, endurance) {
    return Math.floor((power * endurance) / 2);
}

function calculateProwess(power, agility) {
    return Math.floor((power * agility) / 2);
}

function calculateAccuracy(agility, endurance) {
    return Math.floor((agility * endurance) / 2);
}

function calculateFocus(power, ego) {
    return Math.floor((power * ego) / 2);
}

function calculateWillpower(ego, endurance) {
    return Math.floor((ego * endurance) / 2);
}

function calculateWit(ego, agility) {
    return Math.floor((ego * agility) / 2);
}

function calculateResolve(empathy, power) {
    return Math.floor((empathy * power) / 2);
}

function calculateFaith(empathy, endurance) {
    return Math.floor((empathy * endurance) / 2);
}

function calculateCharisma(empathy, agility) {
    return Math.floor((empathy * agility) / 2);
}

function calculateId(empathy, ego) {
    return Math.floor((empathy * ego) / 2);
}

function calculateFerocity(power, initiative) {
    return Math.floor((power * initiative) / 2);
}

function calculateConditioning(endurance, initiative) {
    return Math.floor((endurance * initiative) / 2);
}

function calculateReflexes(agility, initiative) {
    return Math.floor((agility * initiative) / 2);
}

function calculateIntelligence(ego, initiative) {
    return Math.floor((ego * initiative) / 2);
}

function calculatePerception(empathy, initiative) {
    return Math.floor((empathy * initiative) / 2);
}


//update secondaries
function updateSecondaryStats() {
    // Get the values of the primary stats
    var power = parseInt($('#power').text());
    var agility = parseInt($('#agility').text());
    var endurance = parseInt($('#endurance').text());
    var empathy = parseInt($('#empathy').text());
    var ego = parseInt($('#ego').text());
    var initiative = parseInt($('#initiative').text());

    // Calculate the secondary stats
    var vitality = (power * endurance) / 2;
    var prowess = (power * agility) / 2;
    var accuracy = (agility * endurance) / 2;
    var focus = (power * ego) / 2;
    var willpower = (ego * endurance) / 2;
    var wit = (ego * agility) / 2;
    var resolve = (empathy * power) / 2;
    var faith = (empathy * endurance) / 2;
    var charisma = (empathy * agility) / 2;
    var id = (empathy * ego) / 2;
    var ferocity = (power * initiative) / 2;
    var conditioning = (endurance * initiative) / 2;
    var reflexes = (agility * initiative) / 2;
    var intelligence = (ego * initiative) / 2;
    var perception = (empathy * initiative) / 2;

    // Update the values in the table
    $('#vitality-Text').text(vitality);
    $('#prowess-Text').text(prowess);
    $('#accuracy-Text').text(accuracy);
    $('#focus-Text').text(focus);
    $('#willpower-Text').text(willpower);
    $('#wit-Text').text(wit);
    $('#resolve-Text').text(resolve);
    $('#faith-Text').text(faith);
    $('#charisma-Text').text(charisma);
    $('#id-Text').text(id);
    $('#ferocity-Text').text(ferocity);
    $('#conditioning-Text').text(conditioning);
    $('#reflexes-Text').text(reflexes);
    $('#intelligence-Text').text(intelligence);
    $('#perception-Text').text(perception);
}

//buttons
//$(document).ready(function() {

  // Up and down button click event listeners
  $('.up-button').click(function(event) {
event.preventDefault();
var stat = $(this).data('stat');
var span = $('#' + stat);
var points = $('#points');
var value = parseInt(span.text());
if (value < 18 && parseInt(points.text()) > 0) {
span.text(value + 1);
points.text(parseInt(points.text()) - 1);
}
updateSecondaryStats();
});

$('.down-button').click(function(event) {
event.preventDefault();
var stat = $(this).data('stat');
var span = $('#' + stat);
var points = $('#points');
var value = parseInt(span.text());
if (value > 8) {
span.text(value - 1);
points.text(parseInt(points.text()) + 1);
}
updateSecondaryStats();
});
//});
