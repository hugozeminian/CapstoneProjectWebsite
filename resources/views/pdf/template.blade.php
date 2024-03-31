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

        h1 {
            text-align: left;
        }

        .title {
            text-align: center;
            margin-bottom: 20px;
        }

        .section-title {
            margin-top: 40px;
            font-size: 1.2em;
        }

        .property {
            font-weight: bold;
        }

        .value {
            margin-left: 10px;
            font-weight:normal;
        }
    </style>
</head>

<body>
    <div class="container">
        <h1>Milestone Ceremonies</h1>
        <h2 class="title">Ceremony Interest Form</h2>

        @foreach ($data as $key => $value)
        <div class="section">
            @if (is_array($value))

            <div class="property">{{ ucfirst($key) }}:</div>

            @foreach ($value as $item)
            @if (isset($item['label']))
            <div class="property">{{ ucfirst($item['label']) }}:
            @foreach ($item as $key => $value)
            @if ($key !== 'label')
            <span class="value">{{ $value }}</span>
            @endif
            @endforeach
            </div>
            @endif
            @endforeach



            @else
            <div class="property">{{ ucfirst($key) }}:</div>
            <div class="value">{{ $value }}</div>
            @endif
            <br>
        </div>
        @endforeach
    </div>
</body>

</html>