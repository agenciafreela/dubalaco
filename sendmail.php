<?php
date_default_timezone_set('America/Sao_Paulo');

$nome = $email = $c_utmz = null;
if(isset($_POST["nome"])) $nome = $_POST["name"];
if(isset($_POST["email"])) $email = $_POST["email"];
if(isset($_POST["message"])) $message = $_POST["message"];

//segundo e-mail

//HTML
$msg = "Novo contato
        <br/>Nome: ".$nome.
        "<br/>E-mail: ".$email;
        "<br />Mensagem: ".$message;


$sHeader = "From: Contato - Inteligencia Defi <inteligencia@defi.com.br >\n";
$sHeader .= "To:  <inteligencia@defi.com.br >";
$sHeader .= "Reply-To: ".$email."\n";
$sHeader .= "Subject: Novo Contato do Site\n";
$sHeader .= "Mime-Version: 1.0\n";
$sHeader .= "Content-type: text/html; charset=UTF-8\n";
$sHeader .= "X-Sender: inteligencia@defi.com.br \n";
$sHeader .= "X-Priority: 1\n";
$sHeader .= "Message-ID: "."<".uniqid('').strstr('inteligencia@defi.com.br ', '@').">\n" ;


$fp = @popen("/usr/sbin/sendmail  -oi -f inteligencia@defi.com.br  -t", 'w');

if ($fp === FALSE OR $fp === NULL)
{
    return FALSE;
}

fputs($fp, $sHeader);
fputs($fp, $msg);

$status = pclose($fp);

if($status != 0)
    echo "Erro e-mail";
else
    echo "Success";
