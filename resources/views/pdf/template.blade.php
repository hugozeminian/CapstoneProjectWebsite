<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Milestone Ceremonies - Ceremony Quotation Form</title>
    <style>
        body {
            font-family: Arial, sans-serif;
        }

        .container {
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
        }

        .card {
            border: 1px solid #ccc;
            border-radius: 8px;
            background-color: #f9f9f9;
            padding: 15px;
            margin-bottom: 20px;
        }

        h1 {
            text-align: center;
            margin-bottom: 20px;
        }

        .section {
            margin-bottom: 30px;
        }

        .property {
            font-weight: bold;
        }

        .value {
            margin-left: 10px;
        }

        .sub-section {
            margin-top: 10px;
            margin-left: 20px;
            border-left: 2px solid #ccc;
            padding-left: 10px;
        }
    </style>
</head>

<body>
    <div class="container">
        <h1>Milestone Ceremonies</h1>
        @foreach ($data as $key => $value)
        <div class="card">
            @if (is_array($value))
            <div class="property">{{ ucfirst($key) }}:</div>
            <div class="sub-section">
                @foreach ($value as $item)
                <div class="property">{{ ucfirst($item['label']) }}:</div>
                <div class="value">
                    @foreach ($item as $subKey => $subValue)
                    @if ($subKey !== 'label')
                    {{ $subValue }}
                    @endif
                    @endforeach
                </div>
                @endforeach
            </div>
            @else
            <div class="property">{{ ucfirst($key) }}:</div>
            <div class="value">{{ $value }}</div>
            @endif
        </div>
        @endforeach
    </div>
</body>

</html>
