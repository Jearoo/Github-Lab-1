var modelPrices = {
    "XYZ": 100,
    "CPRG": 213
};

var modelName = "XYZ";
var duration = 0;

function recalculate() {
    var costLabel = document.getElementById("calculated-cost");
    var cost = duration * modelPrices[modelName];
    costLabel.innerHTML = cost.toFixed(2); 
}

var modelButton = document.getElementById("model-button");

function changeModel() {
    var modelText = document.getElementById("model-text");

    if (modelName === "XYZ") {
        modelName = "CPRG";
        modelText.innerHTML = "Model CPRG";
    } else {
        modelName = "XYZ";
        modelText.innerHTML = "Model XYZ";
    }

    recalculate();
}

modelButton.addEventListener("click", changeModel);

var durationButton = document.getElementById("duration-button");

function changeDuration() {
    var durationText = document.getElementById("duration-text");
    var newDuration = prompt("Enter the new duration (in days):");

    if (!isNaN(newDuration) && newDuration >= 0) {
        duration = parseInt(newDuration, 10);
        durationText.innerHTML = duration;
        recalculate();
    } else {
        alert("Please enter a valid number for the duration.");
    }
}

durationButton.addEventListener("click", changeDuration);

function displayModels() {
    console.log("Available Models:");
    for (var model in modelPrices) {
        if (modelPrices.hasOwnProperty(model)) {
            console.log("Model: " + model + ", Price: $" + modelPrices[model] + " per day");
        }
    }
}

displayModels();
