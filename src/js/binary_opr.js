var subnet_list = ["128.0.0.0", "192.0.0.0", "224.0.0.0", "240.0.0.0", "248.0.0.0", "252.0.0.0",
    "254.0.0.0", "255.0.0.0", "255.128.0.0",  "255.192.0.0", "255.224.0.0", "255.240.0.0", "255.248.0.0",
    "255.252.0.0", "255.254.0.0", "255.255.0.0", "255.255.128.0", "255.255.192.0", "255.255.224.0", "255.255.240.0",
    "255.255.248.0", "255.255.252.0", "255.255.254.0", "255.255.255.0", "255.255.255.128", "255.255.255.192", "255.255.255.224",
    "255.255.255.240", "255.255.255.248", "255.255.255.252", "255.255.255.254", "255.255.255.255"
]

var submit_btn = document.getElementById("submit-btn");
submit_btn.addEventListener("click", bin_subnet_mask);

function bin_subnet_mask () {
    var subnet_mask = document.getElementById("subnet_form");
    var strs = subnet_list[subnet_mask.selectedIndex].split(".");

    for (i = 0; i<=3 ; i++) {
        var x = parseInt(strs[i]);

        strs[i] = x.toString(2);
        strs[i] = formatNumberLength(strs[i], 8)
        console.log(strs[i]);
    }
    document.getElementById("bin_subnet_mask").innerHTML = strs[0] + '.' +strs[1] + '.' +strs[2] + '.' +strs[3]
}

function formatNumberLength(num, length) {
    var r = "" + num;
    while (r.length < length) {
        r = "0" + r;
    }
    return r;
}
