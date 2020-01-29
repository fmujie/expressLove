var yes = document.getElementById("yes");
var no = document.getElementById("no");
no.onclick = function no() {
    var text = [
        "真的很喜欢你",
        "小姐姐再考虑一下呗",
        "你是我见过的最漂亮的女孩子",
        "一生一世爱你哦",
        "家务我全干",
        "不藏私房钱",
        "房子写你名",
        "工资全上交",
        "你是我见过的最善良的女孩子",
        "你是我见过的最可爱的女孩子",
        "真的很喜欢你"
    ];

    function rand() {
        var i = Math.ceil(Math.random() * 10);
        switch (i) {
            case 0:
                return text[0];
            case 1:
                return text[1];
            case 2:
                return text[2];
            case 3:
                return text[3];
            case 4:
                return text[4];
            case 5:
                return text[5];
            case 6:
                return text[6];
            case 7:
                return text[7];
            case 8:
                return text[8];
            case 9:
                return text[9];
            case 10:
                return text[10];
        }
    }
    swal({
        title: rand(),
        icon: "info",
        buttons: "disagree",
        dangerMode: true,
        closeOnClickOutside: true,
    })
        .then((value) => {
            if (value) {
                no();
            } else {
                swal({
                    title: "小姐姐再考虑一下吧",
                    icon: "info",
                    buttons: "ok"
                });
            }
        });
}
yes.onclick = function () {
    swal({
        title: "谢谢你，小姐姐",
        text: "我会爱你一生一世",
        icon: "success",
    });
}
