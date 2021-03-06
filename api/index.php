<?php



use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Json;
use Symfony\Component\Debug\ErrorHandler;
use Symfony\Component\HttpKernel\Exception\AccessDeniedHttpException;
use Symfony\Component\HttpKernel\Exception\HttpException;



require_once __DIR__.'/vendor/autoload.php';
require __DIR__.'/helpers/env.php';
require __DIR__.'/helpers/middleware.php';
require_once __DIR__."/helpers/databaseAccess.php";

session_start();
\Cloudinary::config(array(
    "cloud_name" => $_ENV["CLOUDINARY_CLOUD_NAME"],
    "api_key"    => $_ENV["CLOUDINARY_API_KEY"],
    "api_secret" => $_ENV["CLOUDINARY_API_SECRET"],
    "secure"     => true,
));
$db = db::getInstance();

require_once __DIR__.'/helpers/functions.php';

$app = new Silex\Application();

$app->get('info', function (Request $request) use ($db, $loggedIn, $app) {
    $sql = "SELECT branchName, branchAdmin, instaUsername, facebookUsername, branchImage FROM `branch`";
    try {
        call_user_func($loggedIn, $request, $app);
    } catch (\Exception $th) {
        $sql .= "where visible = 1";
    }
    $res["branches"] = $db->executeQuery($sql);
    $res["tabs"] = $db->executeQuery("SELECT tabName FROM `tabs`");
    return $res;
});

$app->get('', function (Request $request) {
    return "Choose a route";
});

$app->post('enroll', function (Request $request) use ($db) {
    $data = checkbody($request,["branchName","firstname","surname","age","town","postcode","email","housenumber"]);
    $branch = $db->preparedQuery("SELECT branchName, branchAdmin FROM `branch` where branchName = ?",[$data["branchName"]])[0];
    $content = "
                Iemand heeft zich ingeschreven voor de ".$data["branchName"].".<br/>
                <br/>
                Naam: ".$data["firstname"]." ".$data["surname"]."<br/>
                Leeftijd: ".$data["age"]."<br/>
                Adres: ".$data["town"].", ".$data["postcode"].", huisnummer: ".$data["housenumber"]."<br/>
                Email: ".$data["email"]."<br/>
                Telefoon: ".$request->request->get("phonenumber")."<br/>
                ";
    require_once __DIR__."/helpers/mail.php";
    $res = Mailer::getInstance()->sendMail("Aanmelding voor ".$data["branchName"], $content, $branch["branchName"]."@scoutinghuissenzand.nl", $branch["branchName"]." beheerder") == 202;
    $res = $res && Mailer::getInstance()->sendMail("Aanmelding voor ".$data["branchName"], $content, $branch["branchAdmin"], $branch["branchName"]." beheerder") == 202;
    if($res){
        return new Response("Aanmelding voltooid");
    }else{
        throw new HttpException(500,"Aanmelding niet verstuurd");
    }
});

$app->post('order', function (Request $request) use ($db) {
    $data = checkbody($request,["name","mail","postcode","housenumber","street","phone","orders","moment","type"]);
    require_once __DIR__.'/helpers/sendMailMessage.php';
    $check1 = sendOrderClient($data);
    $check2 = sendOrderAdmin($data);
    if($check1 && $check2){
        return new Response("Bestelling voltooid, Er is een email verstuurd naar uw email adres.");
    }else{
        throw new HttpException(500,"Bestelling niet verstuurd, check alle velden");
    }
});

$app->mount('', require __DIR__."/controllers/user.php");
$app->mount('', require __DIR__."/controllers/albums.php");
$app->mount('', require __DIR__."/controllers/branch.php");
$app->mount('', require __DIR__."/controllers/event.php");
$app->mount('', require __DIR__."/controllers/tab.php");
$app->mount('', require __DIR__."/controllers/images.php");




$app->view(function (array $controllerResult) use ($app) {
    return $app->json($controllerResult);
});

$app->error(function (\Exception $e, Request $request, $code) use ($app) {
    return new JsonResponse(["message"=>$e->getMessage()]);
});

$app->before($jsonBody);
$app->after($resultToError);
// https://www.scoutinghuissenzand.nl
// http://localhost:8080
header("Access-Control-Allow-Origin: http://192.168.178.109:8080");
header("Access-Control-Allow-Credentials: true");

$method = $_SERVER['REQUEST_METHOD'];
if ($method == "OPTIONS") {
    header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method,Access-Control-Request-Headers, Authorization, cache-control");
    header("Access-Control-Allow-Methods: DELETE, GET, POST, PUT, OPTIONS");

    header("HTTP/1.1 200 OK");
    die();
}

$app->run();
