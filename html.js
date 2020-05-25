const html = `<html lang="en">
<head>
  <meta charset="utf-8">

  <title>The HTML5 Herald</title>
  <meta name="description" content="The HTML5 Herald">
  <meta name="author" content="SitePoint">

  <link rel="stylesheet" href="css/styles.css?v=1.0">

</head>

<body>
    <main>
        <section class="section1" id="one">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 col-sm-12">
                        <p data-type="video">Video Content Here</p>
                    </div>
                    <div class="col-md-12 one-class">
                        <span data-type="audio">Audio content here</span>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <p data-type="video">Video Content Here</p>
                    </div>
                    <div class="col-md-12">
                        <span data-type="audio">Audio content here</span>
                    </div>
                </div>
            </div>
        </section>
    </main>
  <script src="js/scripts.js"></script>
</body>
</html>`

module.exports = html