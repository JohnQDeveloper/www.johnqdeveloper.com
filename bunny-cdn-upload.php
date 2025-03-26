#!/usr/bin/php
<?php

require __DIR__ . '/vendor/autoload.php';

$client = new \Bunny\Storage\Client(file_get_contents('bunny-api-key.txt'), 'jqdeveloper-com', \Bunny\Storage\Region::FALKENSTEIN);

$errors = $client->upload('public/*', './', false);
var_dump($errors);

echo "Finished\n";
