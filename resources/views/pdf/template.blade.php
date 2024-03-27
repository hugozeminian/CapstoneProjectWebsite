<!-- resources/views/pdf/template.blade.php -->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Generated PDF</title>
    <!-- Include any CSS styles or libraries -->
</head>
<body>
    <h1>Generated PDF</h1>
    <p>This PDF was generated from JSON data:</p>
    <pre>{{ json_encode($carrousel, JSON_PRETTY_PRINT) }}</pre>
</body>
</html>
