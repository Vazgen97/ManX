const xArr = ["dell", "asus", "lenovo", "acer", "msi", "hp", "toshiba", "samsung", "apple"];
let randomArr;
let x = 0;
function fn1() {
    const in1 = document.getElementById("in1").value;
    const x1 = document.getElementById("x1");
    const x2 = document.getElementById("x2");
    const x3 = document.getElementById("x3");
    const x4 = document.getElementById("x4");
    const x5 = document.getElementById("x5");
    const x6 = document.getElementById("x6");
    const x7 = document.getElementById("x7");
    if(x <= 7) {
        if(in1 == randomArr) {
            switch(x) {
                case 1:
                    x1.style.color = "green";
                    break;
                case 2:
                    x2.style.color = "green";
                    break;
                case 3:
                    x3.style.color = "green";
                    break;
                case 4:
                    x4.style.color = "green";
                    break;
                case 5:
                    x5.style.color = "green";
                    break;
                case 6:
                    x6.style.color = "green";
                    break;
                case 7:
                    x7.style.color = "green";
                    break;
            }
        }else{
            switch(x) {
                case 1:
                    x1.style.color = "red";
                    break;
                case 2:
                    x2.style.color = "red";
                    break;
                case 3:
                    x3.style.color = "red";
                    break;
                case 4:
                    x4.style.color = "red";
                    break;
                case 5:
                    x5.style.color = "red";
                    break;
                case 6:
                    x6.style.color = "red";
                    break;
                case 7:
                    x7.style.color = "red";
                    break;
            }
        }
    }else{
        alert("Խաղն ավարտվել է")
    }
    x += 1;
    randomArr = xArr[Math.floor(Math.random() * xArr.length)];
    let randomLength = document.getElementById("randomlength");
    for(let i = 0; i <= randomArr.length; i++) {
        randomLength.innerHTML = i + " տառ";
    }
    console.log(randomArr);
}