const plantsAndSpaceing = []

fetch("./squareFootGardenData.json")
    .then(response => response.json())
    .then(data => plantsAndSpaceing.push(...data["plantsAndSpaceing"]));