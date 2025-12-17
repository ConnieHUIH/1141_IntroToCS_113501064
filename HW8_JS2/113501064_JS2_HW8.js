		function add(a, b) {
            return (a + b);
        }

        function substract(a, b){
            return (a - b);
        }

        function multiply(a, b) {
            return (a * b);
        }

        function divide(a, b) {
            return (a / b);
        }

        function calculate() {
            // 先呼叫ID
            const resultElement = document.getElementById("result");
            resultElement.classList.remove("result_aftercalculate"); // 清空顏色
            let a = Number(document.getElementById("Number1_Input").value);
            let b = Number(document.getElementById("Number2_Input").value);
            let operateway = document.getElementById("Operate_Way").value;            

            // 如果輸入錯誤要警告
            if (document.getElementById("Number1_Input").value === "" || document.getElementById("Number2_Input").value === "") {
                resultElement.innerText = "Invalid Input. Please fill in both boxes.";
                return;
            }


            if (operateway === "plus") {
                result = add(a, b);
            }else if (operateway === "minus") {
                result = substract(a, b);
            }else if (operateway === "multiply") {
                result = multiply(a, b);
            }else if (operateway === "divide") {
                if (b === 0) {
                    resultElement.innerText = "Result = Invalid Input";
                    return;
                }else {
                    result = divide(a, b);                    
                }
            }

            resultElement.innerText = "Result = " + result.toFixed(2);
            resultElement.classList.add("result_aftercalculate"); //這樣就可以切換到套用另一個id設定
        }

        function reset() {
            document.getElementById("Number1_Input").value = "";
            document.getElementById("Number2_Input").value = "";
            document.getElementById("Operate_Way").value = " ";
            const resultElement = document.getElementById("result");
            resultElement.innerText = "Result = ";            
        }