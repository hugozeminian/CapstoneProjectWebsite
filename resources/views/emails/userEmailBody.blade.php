<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Email Confirmation</title>
    <style>
        /* Reset styles */
        body,
        h1,
        p {
            margin: 0;
            padding: 0;
        }

        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            text-align: center;
        }

        .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #ffffff;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        h1 {
            color: #333333;
            margin-bottom: 20px;
        }

        p {
            color: #666666;
            margin-bottom: 30px;
        }

        .logo {
            margin-bottom: 20px;
        }

        .button {
            display: inline-block;
            background-color: #007bff;
            color: #ffffff;
            text-decoration: none;
            padding: 10px 20px;
            border-radius: 5px;
            transition: background-color 0.3s;
        }

        .button:hover {
            background-color: #0056b3;
        }

        @media screen and (max-width: 600px) {
            .container {
                width: 100%;
                border-radius: 0;
            }
        }
    </style>
</head>

<body>
    <div class="container">
        <img src="hand3.jpeg" alt="Milestone Cerimonies Logo" class="logo">
        <h1>Thank You!</h1>
        <p>Thank you for your interest in our services. We will contact you as soon as possible. You can find your form request attached.</p>
        <p>Kind Regards,<br>Milestone Cerimonies Team</p>
        <button class="button" onclick="downloadForm()">Download Form</button>
    </div>

    <script>
        function downloadForm() {
            // Create an anchor element
            var link = document.createElement('a');
            // Set the href attribute to the path of the file to be downloaded
            link.setAttribute('href', 'path_to_your_file.pdf');
            // Set the download attribute with the desired file name
            link.setAttribute('download', 'form_request.pdf');
            // Simulate a click event on the anchor element
            link.click();
        }
    </script>
</body>

</html>
