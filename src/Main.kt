import org.w3c.dom.HTMLElement
import org.w3c.dom.HTMLInputElement
import org.w3c.dom.HTMLSelectElement
import org.w3c.dom.get
import kotlin.browser.document

val subnet_list = listOf("128.0.0.0", "192.0.0.0", "224.0.0.0", "240.0.0.0", "248.0.0.0", "252.0.0.0",
        "254.0.0.0", "255.0.0.0", "255.128.0.0",  "255.192.0.0", "255.224.0.0", "255.240.0.0", "255.248.0.0",
        "255.252.0.0", "255.254.0.0", "255.255.0.0", "255.255.128.0", "255.255.192.0", "255.255.224.0", "255.255.240.0",
        "255.255.248.0", "255.255.252.0", "255.255.254.0", "255.255.255.0", "255.255.255.128", "255.255.255.192", "255.255.255.224",
        "255.255.255.240", "255.255.255.248", "255.255.255.252", "255.255.255.254", "255.255.255.255"
        )
var ips: List<String>? = null
var subnet_masks: List<String>? = null

fun main(args: Array<String>) {
    val submit = document.getElementById("submit-btn")
    if (submit != null) {
        submit.addEventListener(
                "click",
                {calculate()}
        )
    }
}

fun calculate(){
    var ip = document.getElementById("ipv4_ip") as HTMLInputElement
    var subnet_mask = document.getElementById("subnet_form") as HTMLSelectElement
//
    ips = ip.value.split(".")
    subnet_masks = subnet_list[subnet_mask.selectedIndex].split(".")

    document.getElementById("ip_address")!!.innerHTML = ip.value
    network_address()
    document.getElementById("subnet_mask")!!.innerHTML = subnet_list[subnet_mask.selectedIndex]
    wildcard_mask()
    document.getElementById("cidr")!!.innerHTML = "/" + subnet_mask.value   .toString()
}

fun network_address () {
    var network_address = mutableListOf<String>("0", "0", "0", "0")
    for (i in 0..3) {
        var x = ips!![i].toInt()
        var y = subnet_masks!![i].toInt()
        x = x and y
        network_address[i]  =  x.toString()
    }
    document.getElementById("nw_address")!!.innerHTML = strings_to_string(network_address)
}

fun wildcard_mask () {
    var wildcard_masks = mutableListOf<String>("0", "0", "0", "0")
    for (i in 0..3) {
        var x = 255 - subnet_masks!![i].toInt()
        wildcard_masks[i] = x.toString()
    }
    document.getElementById("wildcard_mask")!!.innerHTML = strings_to_string(wildcard_masks)
}

fun strings_to_string (strs: MutableList<String>): String {
    var str = strs[0] + '.' +strs[1] + '.' +strs[2] + '.' +strs[3]
        return str
}

//fun bin_subnet_mask () {
//    var bin_subnet_masks = mutableListOf<String>("0", "0", "0", "0")
//    for (i in 0..3) {
//        var x = bin_subnet_masks[i].toInt()
//        x.toString()
//    }
//}

