<?php
$students = [
    [
        "nom" => "Ahmed",
        "age" => 20,
        "notes" => [15, 14, 16]
    ],
    [
        "nom" => "Sara",
        "age" => 22,
        "notes" => [18, 17, 19]
    ],
    [
        "nom" => "Youssef",
        "age" => 21,
        "notes" => [12, 13, 14]
    ]
];

foreach($students as $student){
    echo "Name:" . $student["name"] ."- Age:" . $student["age"];
}

foreach ($students as $student) {
    $notes = $student["notes"];
    $moyenne = array_sum($notes) / count($notes);

    echo "Nom : " . $student["nom"] . "<br>";
    echo "Moyenne : " . round($moyenne, 2) . "<br><br>";
}

?>