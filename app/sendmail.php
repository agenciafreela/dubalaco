<?php
date_default_timezone_set('America/Sao_Paulo');

$nome = $email = $mensagem = $loja = $telefone = null;
if(isset($_POST["nome"]))     $nome = $_POST["nome"];
if(isset($_POST["email"]))    $email = $_POST["email"];
if(isset($_POST["loja"]))     $loja = $_POST["loja"];
if(isset($_POST["telefone"])) $telefone = $_POST["telefone"];
if(isset($_POST["message"]))  $message = $_POST["message"];

//segundo e-mail

if ($loja == null){
  $msg = "Novo contato
          <br/>Nome: ".$nome.
          "<br/>E-mail: ".$email;
          "<br />Mensagem: ".$message;
}else{
  $msg = "Tenho uma Loja
          <br/>Nome: ".$nome.
          "<br/>E-mail: ".$email.
          "<br/>Loja: ".$loja.
          "<br />Telefone: ".$telefone;
}

$sHeader = "From: Contato - Dubalaco <dubalaco@agenciafreela.com.br >\n";
$sHeader .= "To:  <michel@dubalaco.com.br>\n";
$sHeader .= "Cc:  <leandro@agenciafreela.com.br>\n";
$sHeader .= "Reply-To: ".$email."\n";
$sHeader .= "Subject: Novo Contato do Site\n";
$sHeader .= "Mime-Version: 1.0\n";
$sHeader .= "Content-type: text/html; charset=UTF-8\n";
$sHeader .= "X-Sender: dubalaco@agenciafreela.com.br\n";
$sHeader .= "X-Priority: 1\n";
$sHeader .= "Message-ID: "."<".uniqid('').strstr('dubalaco@agenciafreela.com.br ', '@').">\n" ;


$fp = @popen("/usr/sbin/sendmail  -oi -f dubalaco@agenciafreela.com.br  -t", 'w');

if ($fp === FALSE OR $fp === NULL)
{
    return FALSE;
}

fputs($fp, $sHeader);
fputs($fp, $msg);

$status = pclose($fp);

if($status != 0)
    echo "Erro ";
else
    echo "Success";
