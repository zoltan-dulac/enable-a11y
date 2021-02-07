<!DOCTYPE html>
<html>

<head>
    <meta name="generator" content="HTML Tidy for HTML5 for Windows version 5.4.0">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
    <title>Button demo</title>
		<?php include("includes/common-head-tags.php"); ?>
    <link rel="stylesheet" type="text/css" href="css/button.css" />
    <link rel="stylesheet" type="text/css" href="css/switch.css" />
</head>

<body>
    <?php include("includes/example-header.php"); ?>

    <main>

        <aside class="notes">
            <h2>Notes:</h2>

            <ul>
                <li>It is always better to use a real HTML <code>button</code> tag than a <code>div</code> or
                <code>a</code> tag with a <code>role="button"</code>.  This is especially noticable when using
                a <code>label</code> with the <code>button</code>, which reads differently in some screen readers
                then when using an <code>aria-describedby</code> to give it suplimentary information.</li>
            </ul>

        </aside>



        <h1>Accessible Button Demo</h1>

        <p>This page shows different ways a button can be marked up to see how screen readers will describe them to users.</p>

        <h2>A real HTML button marked up with label tag. Note that the label tag is better than using an aria-describedby.</h2>

        <p>The following is a
            <code>&lt;button&gt;</code> tag with a
            <code>&lt;label&gt;</code> tag describing what it is for.</p>
        <div class="button-container">
            <label for="html-button">If you are sure you want to give Facebook your data, push this:</label>
            <button id="html-button">
                Submit
            </button>
        </div>


        <h2>A DIV with a role of button</h2>
        <p>This is a
            <code>&lt;div&gt;</code> tag that has its role attribute set to
            <code>button</code>.</p>

        <div class="button-container">
            <label id="div-button-label">If you are sure you want to give Facebook your data, push this:</label>
            <div aria-describedby="div-button-label" role="button" tabindex="0">
                Submit
            </div>
        </div>

        <h2>A link with the role of button</h2>

        <p>This is an
            <code>&lt;a&gt;</code tag that has its role set to <code>button</code>. Developers should avoid doing this.</p>

        <div class="button-container">
            <label id="link-button-label">If you are sure you want to give Facebook your data, push this:</label>
            <a aria-describedby="link-button-label" href="#" role="button">
                Submit
            </a>
        </div>
    </main>

</body>

</html>