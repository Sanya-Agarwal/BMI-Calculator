// console.log(`hello`);

function getbmivalue() {
    var weight = document.getElementById('weight').value;
    var height = document.getElementById('height').value;

    let newheight = height *12 *0.025; //feet to inches to metres

    var newbmivalue = weight / (newheight* newheight);
    newbmivalue =  Math.round(newbmivalue);

    document.getElementById('bmi').value = newbmivalue;

}
