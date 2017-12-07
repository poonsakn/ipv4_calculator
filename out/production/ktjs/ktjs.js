if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'ktjs'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'ktjs'.");
}
var ktjs = function (_, Kotlin) {
  'use strict';
  var listOf = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var Unit = Kotlin.kotlin.Unit;
  var throwCCE = Kotlin.throwCCE;
  var split = Kotlin.kotlin.text.split_ip8yn$;
  var ensureNotNull = Kotlin.ensureNotNull;
  var mutableListOf = Kotlin.kotlin.collections.mutableListOf_i5x0yv$;
  var toInt = Kotlin.kotlin.text.toInt_pdl1vz$;
  var toBoxedChar = Kotlin.toBoxedChar;
  var subnet_list;
  var ips;
  var subnet_masks;
  function main$lambda(it) {
    calculate();
    return Unit;
  }
  function main(args) {
    var submit = document.getElementById('submit-btn');
    if (submit != null) {
      submit.addEventListener('click', main$lambda);
    }
  }
  function calculate() {
    var tmp$, tmp$_0;
    var ip = Kotlin.isType(tmp$ = document.getElementById('ipv4_ip'), HTMLInputElement) ? tmp$ : throwCCE();
    var subnet_mask = Kotlin.isType(tmp$_0 = document.getElementById('subnet_form'), HTMLSelectElement) ? tmp$_0 : throwCCE();
    ips = split(ip.value, ['.']);
    subnet_masks = split(subnet_list.get_za3lpa$(subnet_mask.selectedIndex), ['.']);
    ensureNotNull(document.getElementById('ip_address')).innerHTML = ip.value;
    network_address();
    ensureNotNull(document.getElementById('subnet_mask')).innerHTML = subnet_list.get_za3lpa$(subnet_mask.selectedIndex);
  }
  function network_address() {
    var network_address = mutableListOf(['0', '0', '0', '0']);
    for (var i = 0; i <= 3; i++) {
      var x = toInt(ensureNotNull(ips).get_za3lpa$(i));
      var y = toInt(ensureNotNull(subnet_masks).get_za3lpa$(i));
      x = x & y;
      network_address.set_wxm5ur$(i, x.toString());
    }
    ensureNotNull(document.getElementById('nw_address')).innerHTML = strings_to_string(network_address);
  }
  function strings_to_string(strs) {
    var str = strs.get_za3lpa$(0) + String.fromCharCode(toBoxedChar(46)) + strs.get_za3lpa$(1) + String.fromCharCode(toBoxedChar(46)) + strs.get_za3lpa$(2) + String.fromCharCode(toBoxedChar(46)) + strs.get_za3lpa$(3);
    return str;
  }
  Object.defineProperty(_, 'subnet_list', {
    get: function () {
      return subnet_list;
    }
  });
  Object.defineProperty(_, 'ips', {
    get: function () {
      return ips;
    },
    set: function (value) {
      ips = value;
    }
  });
  Object.defineProperty(_, 'subnet_masks', {
    get: function () {
      return subnet_masks;
    },
    set: function (value) {
      subnet_masks = value;
    }
  });
  _.main_kand9s$ = main;
  _.calculate = calculate;
  _.network_address = network_address;
  _.strings_to_string_a0weo2$ = strings_to_string;
  subnet_list = listOf(['128.0.0.0', '192.0.0.0', '224.0.0.0', '240.0.0.0', '248.0.0.0', '252.0.0.0', '254.0.0.0', '255.0.0.0', '255.128.0.0', '255.192.0.0', '255.224.0.0', '255.240.0.0', '255.248.0.0', '255.252.0.0', '255.254.0.0', '255.255.0.0', '255.255.128.0', '255.255.192.0', '255.255.224.0', '255.255.240.0', '255.255.248.0', '255.255.252.0', '255.255.254.0', '255.255.255.0', '255.255.255.128', '255.255.255.192', '255.255.255.224', '255.255.255.240', '255.255.255.248', '255.255.255.252', '255.255.255.254', '255.255.255.255']);
  ips = null;
  subnet_masks = null;
  main([]);
  Kotlin.defineModule('ktjs', _);
  return _;
}(typeof ktjs === 'undefined' ? {} : ktjs, kotlin);
