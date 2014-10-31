---
layout: post
title:  "Code Snipits"
date:   2014-05-11 20:58:58
categories: 
published: true
description: If you're anyting like me you keep re-using little snipits of code on just about every project, so I've compiled some of my favorites here so I don't forget. 
---

Just some little pices of code I keep coming back to every project:

##Responsive image css
{% highlight css %}
.img-responsive {
	max-height:100%
	height:auto;
}
{% endhighlight %}

----

##Vertically and Horozantally Center Div in Div
{% highlight css %}
/*needs to be within containing div*/
.centerCenter{
	left: 50%;
	top: 50%;
	position: relative;
	/*needs browser prefix if not using Sass*/
	transform:translate(-50%, -50%); 

}
{% endhighlight %}

----

##Clearfix
{% highlight css %}
.clearfix:after {
  display: block;
  clear: both;
  content: "";
  }
{% endhighlight %}


----

##Headder Stuff
{% highlight html %}
<head>
	<meta charset="utf-8">
	<title></title>
	<meta name="description" content="This is a description">
	<meta name="viewport" content="width=device-width, initial-scale=1">
</head>
{% endhighlight %}

----

##Serious Headder Stuff
{% highlight html %}
<head>  
	<!--[if lt IE 8]>
		<p>You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
	<![endif]-->
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="robots" content="index, follow" />
	<title></title>
	<meta name="description" content="">
	<!-- For Facebook -->
	<meta property="og:description" content="">
	<meta property="og:site_name" content="">
	<meta property="og:title" content="">
	<meta property="og:type" content="">
	<meta property="og:image" content="" />
	<meta property="og:url" content="">
	<!-- For Twitter ... obviously -->
	<meta name="twitter:site" content="">
	<meta name="twitter:image" content="">
	<meta name="twitter:card" content="">
</head> 
{% endhighlight %}    

----

##Jquery and Bootsrap CDN
{% highlight html %}
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css">
<script src="//code.jquery.com/jquery-1.11.0.min.js"></script>
{% endhighlight %}

----

##Robots No follow
{% highlight html %}
<meta name="ROBOTS" content="NOINDEX, NOFOLLOW">
{% endhighlight %}