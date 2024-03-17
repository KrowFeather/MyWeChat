let pre = 1

let notifPageTbar = document.getElementById("p_notif")
let friendsPageTbar = document.getElementById("p_friend")
let expPageTbar = document.getElementById("p_exp")
let userPageTbar = document.getElementById("p_user")
let notifFrame = document.getElementById("notif_frame")
let friendFrame = document.getElementById("friend_frame")
let expFrame = document.getElementById("exp_frame");
let userFrame = document.getElementById("user_frame")
let headerFrame = document.getElementById("header_frame")
let mainFrame = document.getElementById("main_frame")
let footerFrame = document.getElementById("footer_frame")
friendFrame.style.display = "none"
expFrame.style.display = "none"
userFrame.style.display = "none"

function changeTitle(number) {
    let title = document.getElementById("main_title");
    switch (number) {
        case 1:
            title.innerHTML = "微信";
            break;
        case 2:
            title.innerHTML = "通讯录";
            break;
        case 3:
            title.innerHTML = "发现";
            break;
        case 4:
            title.innerHTML = "ss";
            break;
        default:
            break;
    }
}

function resetPre() {
    switch (pre) {
        case 1:
            let notifIcon = document.getElementById("p_notif_icon")
            notifIcon.style.background = "url(./asset/notif.png) no-repeat center";
            notifIcon.style.backgroundSize = "25px 25px";
            let notifText = document.getElementById("p_notif_text")
            notifText.style.color = "black"
            notifFrame.style.display = "none"
            break;
        case 2:
            let friendIcon = document.getElementById("p_friend_icon")
            friendIcon.style.background = "url(./asset/friends.png) no-repeat center"
            friendIcon.style.backgroundSize = "25px 25px";
            let friendText = document.getElementById("p_friend_text")
            friendText.style.color = "black"
            friendFrame.style.display = "none"
            break;
        case 3:
            let expIcon = document.getElementById("p_exp_icon")
            expIcon.style.background = "url(./asset/exp.png) no-repeat center"
            expIcon.style.backgroundSize = "25px 25px"
            let expText = document.getElementById("p_exp_text")
            expText.style.color = "black"
            expFrame.style.display = "none"
            break;
        case 4:
            let userIcon = document.getElementById("p_user_icon")
            userIcon.style.background = "url(./asset/me.png) no-repeat center"
            userIcon.style.backgroundSize = "25px 25px"
            let userText = document.getElementById("p_user_text")
            userText.style.color = "black"
            userFrame.style.display = "none"
            break;
        default:
            break;
    }
}

function resetFrame() {
    headerFrame.style.display = ""
    footerFrame.style.height = "9%"
}

notifPageTbar.onclick = function () {
    resetPre();
    resetFrame();
    let notifIcon = document.getElementById("p_notif_icon")
    notifIcon.style.background = "url(./asset/notif_clicked.png) no-repeat center";
    notifIcon.style.backgroundSize = "25px 25px";
    let notifText = document.getElementById("p_notif_text")
    notifText.style.color = "green"
    notifFrame.style.display = ""
    changeTitle(1)
    pre = 1
}

friendsPageTbar.onclick = function () {
    resetPre();
    resetFrame();
    let friendIcon = document.getElementById("p_friend_icon")
    friendIcon.style.background = "url(./asset/friends_clicked.png) no-repeat center"
    friendIcon.style.backgroundSize = "25px 25px";
    let friendText = document.getElementById("p_friend_text")
    friendText.style.color = "green"
    friendFrame.style.display = ""
    headerFrame.style.display = ""
    changeTitle(2)
    pre = 2
}

expPageTbar.onclick = function () {
    resetPre();
    resetFrame();
    let expIcon = document.getElementById("p_exp_icon")
    expIcon.style.background = "url(./asset/exp_clicked.png) no-repeat center"
    expIcon.style.backgroundSize = "25px 25px"
    let expText = document.getElementById("p_exp_text")
    expText.style.color = "green"
    expFrame.style.display = ""
    headerFrame.style.display = ""
    changeTitle(3)
    pre = 3
}

userPageTbar.onclick = function () {
    resetPre();
    let userIcon = document.getElementById("p_user_icon")
    userIcon.style.background = "url(./asset/me_clicked.png) no-repeat center"
    userIcon.style.backgroundSize = "25px 25px"
    let userText = document.getElementById("p_user_text")
    userText.style.color = "green"
    headerFrame.style.display = "none"
    mainFrame.style.height = "100%"
    footerFrame.style.height = "8.4%"
    userFrame.style.display = ""
    changeTitle(4)
    pre = 4
}
