console.log("ml5 version: ", ml5.version);
classifier = ml5.imageClassifier('MobileNet', modelLoaded);
function modelLoaded(){
    Webcam.snap(function(data_uri){
        document.getElementById("snapshot_view").innerHTML = '<img id="captured_image" src="' + data_uri + '"/></img>';
    });
    console.log("Model is loaded");
}


function test(){
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}
function test2(){
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}
function test3(){
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}

function gotResult(error, results){
    if(error){
        console.error(error);
    }else{
        console.log(results);
        document.getElementById("res").innerHTML = results[0].label;
    }
}