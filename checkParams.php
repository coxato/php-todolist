<?php
    function checkQuerySearch(){
        return isset($_GET["search"]) && !empty($_GET["search"]);
    }
?>