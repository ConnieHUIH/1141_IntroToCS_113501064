var rowCount = 0;

updateFrequencyTable();
PressButton();

		function PressButton(){
            // 先呼叫id
			let press = document.getElementById("SubmitButton");
			press.addEventListener("click", function(){
               let inputmathscore = Number(document.getElementById("MathInput").value);
               let inputengscore = Number(document.getElementById("EnglishInput").value);

            // 如果輸入錯誤要警告
               if (document.getElementById("MathInput").value === "" || document.getElementById("EnglishInput").value === "") {
                   alert("Please make sure to fill out both boxes!");
                    return;
                }
               if (document.getElementById("MathInput").value > 100 || document.getElementById("MathInput").value < 0) {
                   alert("Both scores should be between 0 to 100.");
                    return;
                }
               if (document.getElementById("EnglishInput").value > 100 || document.getElementById("EnglishInput").value < 0) {
                   alert("Both scores should be between 0 to 100.");
                    return;
                }

           // 算平均
           rowCount++;

           let rowavg = ((inputmathscore + inputengscore) / 2).toFixed(2);

           let tbody = document.getElementById("tableBody");
           tbody.innerHTML += 
                `<tr>
                    <td>${rowCount}</td>
                    <td>${inputmathscore}</td>
                    <td>${inputengscore}</td>
                    <td>${rowavg}</td>
                </tr>`;

            //  每次按都要更新值
            updateColumnAverages();

            // 最後要reset
            document.getElementById("MathInput").value = "";
            document.getElementById("EnglishInput").value = "";
            });
       }

       function updateFrequencyTable(){
            // 先呼叫id
         var tableDiv = document.getElementById("frequencyTableDiv");
         tableDiv.innerHTML =
         `<table style = "text-align: center;">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Math</th>
                            <th>English</th>
                            <th>Average</th>
                        </tr>
                    </thead>

                    <tbody id="tableBody">

                    </tbody>

                    <tfoot>
                        <tr>
                            <td>Average</td>
                            <td id="avgMath">-</td>
                            <td id="avgEnglish">-</td>
                            <td id="avgOverall">-</td>
                        </tr>
                    </tfoot>
     </table>`;
 }

 function updateColumnAverages(){
     let tbody = document.getElementById("tableBody");
     let rows = tbody.getElementsByTagName("tr");

     let totalMath = 0;
     let totalEng = 0;
     let totalAvg = 0;

     let count = rows.length;

     for (let i = 0; i < count; i++) {
        let cells = rows[i].getElementsByTagName("td");

        totalMath += Number(cells[1].innerText);
        totalEng += Number(cells[2].innerText);
        totalAvg += Number(cells[3].innerText);

    }

    if (count > 0) {
        document.getElementById("avgMath").innerText = (totalMath / count).toFixed(2); //小數點後2位
        document.getElementById("avgEnglish").innerText = (totalEng / count).toFixed(2);
        document.getElementById("avgOverall").innerText = (totalAvg / count).toFixed(2);
    } else {
        document.getElementById("avgMath").innerText = "-";
        document.getElementById("avgEnglish").innerText = "-";
        document.getElementById("avgOverall").innerText = "-";
    }

}
