var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var data = JSON.parse(this.responseText);
        var tableBody = document.getElementById("data-body");
        var Count = 0;

        for (var i = 0; i < data.length; i++) {
            var row = tableBody.insertRow(i);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            cell1.innerHTML = data[i].title

            var checkbox = document.createElement("input");
                    checkbox.type = "checkbox";
                    checkbox.addEventListener("change", function() {
                        if (this.checked) {
                            Count++;
                            if (Count >= 5) {
                                alert("Congratulation!!!Your's 5 Task are completed.");
                            }
                        }
                    });
                    cell2.appendChild(checkbox);
                }
            }
        };

        xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
        xhttp.send();
