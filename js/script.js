function myfunc() {
    var b1, b2, b3, b4, b5, b6, b7, b8, b9;
    b1 = document.getElementById("b1").value;
    b2 = document.getElementById("b2").value;
    b3 = document.getElementById("b3").value;
    b4 = document.getElementById("b4").value;
    b5= document.getElementById("b5").value;
    b6= document.getElementById("b6").value;
    b7= document.getElementById("b7").value;
    b8= document.getElementById("b8").value;
    b9= document.getElementById("b9").value;

    if (b1.toLoverCase()=='x' && b2.toLoverCase() == 'x' && b3.toLoverCase() == 'x') {
        window.alert('You are a winner');
        reset();
    } else if ( b4.toLoverCase() == 'x' && b5.toLoverCase()== 'x' &&b6.toLoverCase =='x'){
        window.alert('You are a winner');
        reset();
    } else if ( b7.toLoverCase() == 'x' && b8.toLoverCase()== 'x' &&b9.toLoverCase =='x'){
        window.alert('You are a winner');
        reset();
    } else if ( b1.toLoverCase() == 'x' && b4.toLoverCase()== 'x' &&b7.toLoverCase =='x'){
        window.alert('You are a winner');
        reset();
    } else if ( b2.toLoverCase() == 'x' && b5.toLoverCase()== 'x' &&b8.toLoverCase =='x'){
        window.alert('You are a winner');
        reset();
    } else if ( b3.toLoverCase() == 'x' && b6.toLoverCase()== 'x' &&b9.toLoverCase =='x'){
        window.alert('You are a winner');
        reset();
    } else if ( b1.toLoverCase() == 'x' && b5.toLoverCase()== 'x' &&b9.toLoverCase =='x'){
        window.alert('You are a winner');
        reset();
    } else if ( b3.toLoverCase() == 'x' && b5.toLoverCase()== 'x' &&b7.toLoverCase =='x'){
        window.alert('You are a winner');
        reset();
    }    

    if (b1.toLoverCase()=='o' && b2.toLoverCase() == 'o' && b3.toLoverCase() == 'o') {
        window.alert('You are a winner');
        reset();
    } else if ( b4.toLoverCase() == 'o' && b5.toLoverCase()== 'o' &&b6.toLoverCase =='o'){
        window.alert('You are a winner');
        reset();
    } else if ( b7.toLoverCase() == 'o' && b8.toLoverCase()== 'o' &&b9.toLoverCase =='o'){
        window.alert('You are a winner');
        reset();
    } else if ( b1.toLoverCase() == 'o' && b4.toLoverCase()== 'o' &&b7.toLoverCase =='o'){
        window.alert('You are a winner');
        reset();
    } else if ( b2.toLoverCase() == 'o' && b5.toLoverCase()== 'o' &&b8.toLoverCase =='o'){
        window.alert('You are a winner');
        reset();
    } else if ( b3.toLoverCase() == 'o' && b6.toLoverCase()== 'o' &&b9.toLoverCase =='o'){
        window.alert('You are a winner');
        reset();
    } else if ( b1.toLoverCase() == 'o' && b5.toLoverCase()== 'o' &&b9.toLoverCase =='o'){
        window.alert('You are a winner');
        reset();
    } else if ( b3.toLoverCase() == 'o' && b5.toLoverCase()== 'o' &&b7.toLoverCase =='o'){
        window.alert('You are a winner');
        reset();
    }    
}

function reset(){
    location.reload();
    document.getElementById("b1").value = "";
    document.getElementById("b2").value = "";
    document.getElementById("b3").value = "";
    document.getElementById("b4").value = "";
    document.getElementById("b5").value = "";
    document.getElementById("b6").value = "";
    document.getElementById("b7").value = "";
    document.getElementById("b8").value = "";
    document.getElementById("b9").value = "";
}

let flag = 1;
function setValue(){
    if (flag==1){
        this.value ="x";
        this.disabled =  true;
        flag = 0;
    } else{
        this.value = "0";
        this.disabled = true;
        flag =1;
    }
}