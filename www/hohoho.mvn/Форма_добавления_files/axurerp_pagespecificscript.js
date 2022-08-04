var PageName = "Форма добавления";
var PageId = "p6a04769632f74f6fbccbd69a3f6f104b";
var PageUrl = "Форма_добавления.html";
document.title = "Форма добавления";

if (top.location != self.location) {
  if (parent.HandleMainFrameChanged) {
    parent.HandleMainFrameChanged();
  }
}

var $OnLoadVariable = "";

var $CSUM;

var hasQuery = false;
var query = window.location.hash.substring(1);
if (query.length > 0) hasQuery = true;
var vars = query.split("&");
for (var i = 0; i < vars.length; i++) {
  var pair = vars[i].split("=");
  if (pair[0].length > 0)
    eval("$" + pair[0] + " = decodeURIComponent(pair[1]);");
}

if (hasQuery && $CSUM != 1) {
  alert("Prototype Warning: Variable values were truncated.");
}

function GetQuerystring() {
  return "#OnLoadVariable=" + encodeURIComponent($OnLoadVariable) + "&CSUM=1";
}

function PopulateVariables(value) {
  value = value.replace(/\[\[OnLoadVariable\]\]/g, $OnLoadVariable);
  value = value.replace(/\[\[PageName\]\]/g, PageName);
  return value;
}

function OnLoad(e) {
  if (true) {
    SetPanelVisibilityu12("hidden");

    SetPanelVisibilityu37("hidden");
  }

  if (true) {
    SetPanelVisibilityu37("hidden");
  }
}

eval(GetDynamicPanelScript("u37", 1));

eval(GetDynamicPanelScript("u12", 1));

var u20 = document.getElementById("u20");

var u36 = document.getElementById("u36");
gv_vAlignTable["u36"] = "top";
var u31 = document.getElementById("u31");

var u11 = document.getElementById("u11");

u11.style.cursor = "pointer";
if (bIE) u11.attachEvent("onclick", Clicku11);
else u11.addEventListener("click", Clicku11, true);
function Clicku11(e) {
  if (true) {
    SetPanelVisibilityu12("");
    function waitu51afa2df1f1f4a25814de94cf9907de41() {
      SetPanelVisibilityu12("hidden");
    }
    setTimeout(waitu51afa2df1f1f4a25814de94cf9907de41, 2000);
  }
}

var u27 = document.getElementById("u27");

u27.style.cursor = "pointer";
if (bIE) u27.attachEvent("onclick", Clicku27);
else u27.addEventListener("click", Clicku27, true);
function Clicku27(e) {
  if (true) {
    self.location.href = "Реестр_плановых_проверок.html" + GetQuerystring();
  }
}

var u6 = document.getElementById("u6");
gv_vAlignTable["u6"] = "top";
var u4 = document.getElementById("u4");
gv_vAlignTable["u4"] = "top";
var u2 = document.getElementById("u2");
gv_vAlignTable["u2"] = "top";
var u10 = document.getElementById("u10");

u10.style.cursor = "pointer";
if (bIE) u10.attachEvent("onclick", Clicku10);
else u10.addEventListener("click", Clicku10, true);
function Clicku10(e) {
  if (true) {
    self.location.href = "Реестр_плановых_проверок.html" + GetQuerystring();
  }
}

var u0 = document.getElementById("u0");

var u26 = document.getElementById("u26");

var u35 = document.getElementById("u35");

var u29 = document.getElementById("u29");

u29.style.cursor = "pointer";
if (bIE) u29.attachEvent("onclick", Clicku29);
else u29.addEventListener("click", Clicku29, true);
function Clicku29(e) {
  if (true) {
    SetPanelVisibilityu37("");
    function waitu386b68b44ac545f89c6514b74df4324f1() {
      SetPanelVisibilityu37("hidden");
    }
    setTimeout(waitu386b68b44ac545f89c6514b74df4324f1, 3000);
  }
}

var u8 = document.getElementById("u8");

var u34 = document.getElementById("u34");
gv_vAlignTable["u34"] = "top";
var u14 = document.getElementById("u14");
gv_vAlignTable["u14"] = "center";
var u28 = document.getElementById("u28");
gv_vAlignTable["u28"] = "top";
var u33 = document.getElementById("u33");

u33.style.cursor = "pointer";
if (bIE) u33.attachEvent("onclick", Clicku33);
else u33.addEventListener("click", Clicku33, true);
function Clicku33(e) {
  if (true) {
    self.location.href =
      "Resources/reload.html#" + encodeURI(PageUrl + GetQuerystring());
  }
}

var u22 = document.getElementById("u22");
gv_vAlignTable["u22"] = "top";
var u13 = document.getElementById("u13");

var u12 = document.getElementById("u12");

var u21 = document.getElementById("u21");

var u37 = document.getElementById("u37");

var u7 = document.getElementById("u7");

var u40 = document.getElementById("u40");
gv_vAlignTable["u40"] = "top";
var u17 = document.getElementById("u17");
gv_vAlignTable["u17"] = "top";
var u5 = document.getElementById("u5");
gv_vAlignTable["u5"] = "top";
var u15 = document.getElementById("u15");
gv_vAlignTable["u15"] = "top";
var u3 = document.getElementById("u3");

var u1 = document.getElementById("u1");

var u25 = document.getElementById("u25");

var u16 = document.getElementById("u16");

var u39 = document.getElementById("u39");
gv_vAlignTable["u39"] = "center";
var u19 = document.getElementById("u19");

var u9 = document.getElementById("u9");
gv_vAlignTable["u9"] = "top";
var u30 = document.getElementById("u30");
gv_vAlignTable["u30"] = "top";
var u24 = document.getElementById("u24");
gv_vAlignTable["u24"] = "top";
var u38 = document.getElementById("u38");

var u18 = document.getElementById("u18");

var u32 = document.getElementById("u32");

var u23 = document.getElementById("u23");

if (window.OnLoad) OnLoad();
