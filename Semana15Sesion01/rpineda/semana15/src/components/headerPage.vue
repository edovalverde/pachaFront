<template>
<nav class="navbar navbar-default navbar-fixed-top">
    <div class="container">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header page-scroll">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#page-top">Start Bootstrap</a>
        </div>
        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav navbar-right">
                <li class="hidden">
                    <a href="#page-top"></a>
                </li>
                <li class="page-scroll">
                    <a href="#portfolio">Portfolio</a>
                </li>
                <li class="page-scroll">
                    <a href="#about">About</a>
                </li>
                <li class="page-scroll">
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </div>
        <!-- /.navbar-collapse -->
    </div>
    <!-- /.container-fluid -->
</nav>
<header id="page-top">
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <img class="img-responsive" src="@/assets/img/profile.jpeg" alt="">
                <div class="intro-text">
                    <span class="name">Inspired by PureCSS.io</span>
                    <hr class="star-light">
                    <p class="skills">Landing Page Layout</p>
                    <p class="skills">Scroll to see the effect</p>
                </div>
            </div>
        </div>
    </div>
</header>
</template>
  
<style scoped>
@import url("http://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css");
/* HERE STARTS THE MAGIC */
header {
    text-align: center;
    color: black;
    background: #18bc9c;

    position: fixed;
    width:100%;
    z-index: 1;
    height: 88%;
    overflow: hidden;
    top: 0;
    left: 0;
}
header .container {
    padding-top: 150px;
    padding-bottom: 50px;
}

header img {
    display: block;
    margin: 0 auto 20px;
}

header .intro-text .name {
    display: block;
    text-transform: uppercase;
    font-family: Montserrat,"Helvetica Neue",Helvetica,Arial,sans-serif;
    font-size: 2em;
    font-weight: 700;
}

header .intro-text .skills {
    font-size: 1.25em;
    font-weight: 300;
}


</style>
  