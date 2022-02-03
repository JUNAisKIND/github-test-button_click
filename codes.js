// Alert창을 끄고 킴(투글)
function openAlert() {
    $("#alert_box").css("display", ($("#alert_box").css("display") == "none") ? "block" : "none");
}
//버튼 누를때 살짝 어둡게
$("div[id^='click_button_']").mousedown(function(ev) {
    $("#" + this.id).css("filter", "brightness(0.75)");
});
//버튼 누르고 난 후 원래 색으로
$("div[id^='click_button_']").mouseup(function() {
    $("#" + this.id).css("filter", "brightness(1)");
});
//Input을 클릭했을때 라벨 글자 위로, 조그맣게(=클래스 변경), 비밀번호면 눈알 보이도록
$("input[id^='input-']").focus(function() {
    $(`#${this.id}-label`).attr("class", "text-label-value");
    if(this.id == "input-password")
        $("#password-visible").css("display", "block");
})
//Input 클릭 해제시 원래대로
$("input[id^='input-']").blur(function() {
    let lab = $(`#${this.id}-label`);
    if(this.value == '') {
        $(`#${this.id}-label`).attr("class", "text-label");
        $("#password-visible").css("display", "none");
    } else {
        $(`#${this.id}-label`).attr("class", "text-label-value");
    }
})
//키보드 입력시 Enter면 다음 단계로, 스페이스면 취소
$("input[id^='input-']").keypress(function(event) {
    if(event.key == "Enter") {
        if($("#" + this.id + " ~ input")[0] != undefined)
            $("#" + this.id + " ~ input")[0].focus();
        else {
            // click method here;
            $("#" + this.id + " ~ input")[0].focus();
        }
    } else if(event.key == ' ') return false;
});
//비밀번호 보기 버튼 클릭시 Input type을 password or text로 투글
$("#password-visible").click(function() {
    $("#input-password").attr("type", ($("#input-password").attr("type") == "text") ? "password" : "text");
})