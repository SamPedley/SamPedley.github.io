---
layout: post
title:  "Name that Color - CSS, Colors and Names"
date:   2016-4-18 16:00:30
categories: CSS
published: true
description:  In the past I've had a miserable time naming and communicating those buggers.  Imagine A designer comes to you a the beginning of a project with a color, let’s say#ff0047, and notes that color should be used for the headers background while the footer should use a background color of#ec5659.
image: /assets/img/sublime/emmet2.gif
---
<style>.color-names{ font-weight: bold; padding: 0 3px; }</style>

Programing and writing in the classical sense have a fair bit in common.  Both exist within a specific language and are required to follow the rules of that language. Some rules are easy to understand, a period ends a sentences and a capital letter starts them, yet others take some time to fully understand where and how to use them.  Those rules though are agreed upon by all and when we get them wrong in programing the computer complains or crashes and when we get them wrong in writing, well everyone complains.  Though, once you learn those rules you're faced with an even more daunting task - composing your thoughts and ideas into a structure that's easy for others to understand; and hopefully, if you do it just right, something that's pleasurable to read. Both good programs and writing balance this need for structure and creativity; both are a science and art.  

I've had to pick up and work on a lot of legacy programs and as I would read through them the punctuation and the rules may have been followed correctly but they were confusing and clumsy to read.  Though I wish I could say it was always someone else program that I would feel this way about but just last week I picked up a program I wrote and a little bit inside me died. If I could go back and ask the authors of those legacy programs or even myself to change one thing it would be the variable names.

Variables are placeholders, It's that simple.  But placeholders for what.  I can't even begin to count the times I've scrolled up a file to figure out what x might represent. Take this example:


{% highlight js %}

foreach ( $x as $y)
{
	echo $y[0];
}

{% endhighlight %}

Yeah.  At first glance it's an easy bit of code to grasp.  $x is obviously and array but so is y and we're printing out the first item that exists in $y.  So, let's list out the work we have to do to find what's printed out.

1. Find where $x is instantiated and what kind of data it holds.
2. Find where $y is being added to $x.
3. Find where $y is getting it's data from.

This really sounds easy and it might take a few seconds of scrolling to find those things but if every class, file and function contain code like that then time really starts to add up. A fix for something like this could be as easy as:

{% highlight PHP %}

foreach($team as $player)
{
  echo player.name;
}

{% endhighlight %}

Oh, theres a team of players and we're printing out each of their names to the screen.  Much easier this time around.  

With compilers and minifiers for just about everything there’s almost no reason to ever not clearly name variables, classes and functions. That is until you run into a set of data that’s hard to clearly and precisely name.


Take color names for example.  In the past I've had a miserable time naming and communicating those buggers.  Imagine A designer comes to you a the beginning of a project with a color, let’s say <span class="color-names" style="background:#ff0047;">#ff0047</span>, and notes that color should be used for the headers background while the footer should use a background color of <span class="color-names" style="background:#ec5659; ">#ec5659</span>.

Simple enough, one is dark one is light let’s go ahead and save those suckers:

{% highlight Scss %}
// _variables.scss
$dark-red:    #ff0047;
$light-red:     #ec5659;

{% endhighlight %}

And later on in the file we would use those variables:

{% highlight Scss %}

// _header.scss
header { background-color: $dark-red; }

// _footer.scss
footer { background-color: $light-red; }

{% endhighlight %}

A few days go down and the designer adds yet another red for errors, <span style="background-color:#fff0f0; font-weight:bold;">#fff0f0</span>, and it’s lighter yet than our light red. Now should we call it $lightest-red or find and replace the now middle red to just $red throughout or files?  Whatever, it’s just a color name let’s go with $lightest-red.

Another few days go by and the designer asks to change the background of the header to <span class="color-names" style="background:#2c3e4f; color: white; ">#2c3e4f</span> and footer to <span class="color-names" style="background:#39c468;">#39c468</span>, thankfully a dark blue and a green, honestly some terrible color choices but what do I know.

Again, a few days later the manager comes back and says, “The client want’s to make the error background a little darker can we use one of those darker reds we use to have on the site?”  Well, which red the medium red or the darker red.

If you can imagine this going on for a month or two you can start to see the problem.  The solution is really simple: if we can properly name name our variables they become much easier to communicate between or developers, designers, even managers; with the added bonus of being simpler to work with and read:


{% highlight Scss %}
// _variables.scss

// From ->
$dark-red:        #ff0047;
$light-red:       #ec5659;
$lightest-red:    #fff0f0;
$dark-blue:       #2c3e4f;
$green:           #39c468;

// To ->
$torchRed:        #ff0047;
$burntSienna:     #ec5659;
$chablis:         #fff0f0;
$pickledBlue:     #2c3e4f;
$emeraldGreen:    #39c468;

{% endhighlight %}

Coming up with unique yet accurately descriptive color names is beyond impossible unless you blew $160k getting your degree in Art. Thankfully tools like [Name That Color](http://chir.ag/projects/name-that-color) exist.  Which is what I use just about every time I deal with colors in sass or less.

Personally I do make a few additional changes to keep things a little cleaner in my variables file.

{% highlight Scss %}
// _variables.scss

$color_torchRed:        #ff0047;
$color_burntSienna:     #ec5659;
$color_chablis:         #fff0f0;
$color_pickledBlue:     #2c3e4f;
$color_emeraldGreen:    #39c468;

$theme_header: (
  background: $color_torchRed,
  border: $color_burntSienna,
  text: $color_pickledBlue
  );

// _header.scss

header
{
  background-color: map-get($theme_header, background);
  border-color: map-get($theme_header, border);
  color: map-get($theme_header, text);
}

{% endhighlight %}


If you have a good code editor like Atom or Sublime then prefixing "color_" auto complete can really help when you remember the color was burnt-something.

<span style="max-width: 600px; display: block">
  ![photoin](/assets/images/color-prefix-screenshot.png)
</span>

If you've been around designers or clients at all you know they change their minds constantly.  So when it comes to dealing with themes and colors it doesn't always make sense to give a class attribute a specific color like $burntRed but it might be more helpful to name it something more general but still specific to itself. That's where sass maps come in. We can treat them similarly to how we treat objects in programming.


This system has worked well for me over the years but I've found that some people think it's overkill or have another system that works for them.  At the end of the day anything that improves code readability, maintainability or makes communication simpler is a win.


#### Links
* [Name That Color Site](http://chir.ag/projects/name-that-color/)
* [Sass Maps](http://sass-lang.com/documentation/Sass/Script/Functions.html/#map-functions)
