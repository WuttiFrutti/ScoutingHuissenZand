<?php
function user_validate(){
    include_once "databaseAccess.php";
include_once "./Mail/sendMailMessage.php";



if(isset($_POST["email"]) && isset($_POST["token"])){
    $username = $_POST["email"];
    $token = $_POST["token"];
    $pdoResult = db::getInstance()->preparedInsert("UPDATE user set activated = 1 WHERE email = ? and validateToken = ?",[$username, $token]);
    if ($pdoResult) {
        sendMailtoAdmin();
        if(http_response_code() == 202){
            http_response_code(200);
        }
        exit;
    } else {
        http_response_code(409);
    }
}else{
    http_response_code(400);
}
}
?>
