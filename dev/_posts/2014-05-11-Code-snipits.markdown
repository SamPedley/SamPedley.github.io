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
	<meta name="description" content="">
	<meta name="viewport" content="width=device-width, initial-scale=1">
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
