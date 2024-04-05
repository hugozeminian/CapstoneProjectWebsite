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

        .details {
            margin-bottom: 30px;
            padding: 10px;
            background-color: #f9f9f9;
            border-radius: 8px;
        }

        .details p {
            margin-bottom: 10px;
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
        <h1>Milestone Ceremonies</h1>
        <p>Hi Admin, you have a new request:</p>

        <div class="details">
            <h2>Client Details</h2>
            @foreach($request['client'] as $detail)
            <p><strong>{{ $detail['label'] }}:</strong> {{ $detail[array_keys($detail)[1]] }}</p>
            @endforeach
        </div>

        <div class="details">
            <h2>Message Reach Out Box</h2>
            @foreach($request['message_reachOutBox'] as $detail)
            <p><strong>{{ $detail['label'] }}:</strong> {{ $detail['content'] }}</p>
            @endforeach
        </div>

        <p>Kind Regards,<br>Milestone Ceremonies Team</p>
    </div>

</body>

</html>
