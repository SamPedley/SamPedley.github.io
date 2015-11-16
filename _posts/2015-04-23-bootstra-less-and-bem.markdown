---
layout: post
title:  "Bootstrap, Less and BEM"
date:   2015-7-9 13:58:00
categories:
published: false
description:  
image: /F/img/juniorDeveloperQuestions/juniorDeveloper.jpg
---

In the world of development things change.  A lot.  One of the biggest problems we have to solve as developers is supprisingly not "how do I get this to work?" but instead how "how do I make this easy to change in the future?"

The less code I would like to write:

{% highlight scss %}
.Main__Color { color: blue; }

.box__1 {  &:extend(.Main__Color); background-color: yellow; }

.box__2 {  &:extend(.Main__Color); background-color: red;}

{% endhighlight %}

The output I would like:

{% highlight scss %}
.box__1, .box__2, .Main__Color { color: blue; }

.box__1 { background-color: yellow; }

.box__2 { background-color: red;}

{% endhighlight %}

The idea is that we can have the luxury of base classes while allowing the markup to be clean and easily extensible.

This aproach does a few thigns that I think are worthwile.

###Goodbye selector hell
If you've written code like this ```.home h1 a #highlight { //Cool styles }``` you know how ard it is to plug it in other pages in the site and get it to work.  Having a class like ```widget__cars--title { //cool styles }``` allows you to be clear spiffic enough but now you don't have to worry about the order of the selectors.

###Minimize css file
Ok, let's be honnest this aproach isn't the greatest if you're worried about creating the leanest css file possible but if you minimize just one image you've proabbly made enough room for this.  With that in mind extending master css classes does keep you from repeating tons of code in your main css file.

###Clean
This is totally a personal prefrence thign but I really have a thing for super clear syntax. I'm not a huge fan of ```<div class="btn btn-primary col-md-6 col-sm-12"></div>``` but I do like ```<div class="widget__cars--button">Go</div>```.  This keeps all of the developers on the same page and honestly it's kind of a confilict of the seperation of concerns principal. Html should contain markup and css should contain the styles and with bootstrap you basically style in the html using some preset values.

-------

There are some issues with this way of doing things.

###Hello Selector Hell
Ok, so one issue with using the ```&:extend(.class)``` in less is that it will take whatever class you're working on and append it onto the class you're extending.  This keeps things you form outputting the same block of css over and over but because where hte css class is in the css file it could cause some conflicts you might see.
However, using extends with bootstrap classes usually isn't a huge issue because the bootstrap classes are included above your own and you rarely use bootstrap classes that conflict with each other.
