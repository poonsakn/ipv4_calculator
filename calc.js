function calculateTotal() {
    var subnetForm = document.forms["subnetform"];
    var selectedClass = subnetForm.elements["selectclass"];

    for (var i=0; i<selectedClass.length; i++) {
        if (selectedClass[i].checked) {
            document.getElementById("subnet_form").value = selectedClass[i].value;
        }
    }
}