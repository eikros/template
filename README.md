<h1>template</h1>

<p>A class-based user interface development framework.</p>

<blockquote>It is super brilliant! It is really simple to work with your framework. I am really your fan ;) – Dmitri Dudin</blockquote>

<!--h2>Techniques</h2>

<p>Before getting started with template, there are a few techniques you should be aware of.</p>

<h3>CSS class system</h3>

<p>Classes in Template are organised following</p>

<h3>Inline blocks</h3>

<p>Template uses <code>inline-block</code> extensively to create horizontal layouts. In fact there are no floats in Template. Inline blocks have advantages over floats:</p>

<ul>
	<li>They stay in the flow, so their parents always 'clear'</li>
	<li>It is possible to write them in arbitrary content order</li>
	<li>Inline block layouts can be thought of as a subset of the upcoming box-layout CSS3 module</li>
</ul>

<p>There is one major gotcha: inline blocks, being inline, are affected by spaces between the blocks. In Template example code, you will frequently see this sort of html formatting:</p>

<pre>&lt;div&gt;
&lt;/div

&gt;&lt;div&gt;
&lt;/div&gt;</pre>

<p>This is a perfectly valid way to format html while avoiding spaces between inline blocks.</p>

<h3></h3-->

<h2>CSS</h2>

<!--h3>.button</h3>

<h3>.thumb</h3>

<h3>.card</h3>

<h3>.index</h3>

<h3>.col</h3>

<h3>.wrap</h3-->

<h3>.layer</h3>

<p>Layers are absolutely positioned elements that fill their parents' width and height, and are used to create screens behind popups and loading icons, among other things. Layers inherit their parent's <code class="css">border-radius</code> so to avoid sharp corners over parents that have rounded corners.</p>

<h2>Popdowns, dropdowns, tabs and slides</h2>

<p>Popdowns, dropdowns, tabs and slides are class-based ui elements with two states. When they are visible, they have the class <code>active</code>. When they are not, they don't.</p>

<p>They share a common API for triggering active state. Firstly, they are activated when the user clicks on a link that refers to them by id:</p>

<pre class="html">&lt;a href=&quot;#id_of_dropdown&quot;&gt;Open dropdown&lt;/a&gt;</pre>

<p>Secondly, they can also be activated and deactivated programmatically:</p>

<pre class="js">jQuery('.dropdown').eq(2).trigger('activate');</pre>
<pre class="js">jQuery('.dropdown').eq(2).trigger('deactivate');</pre>

<p>Links that refer to popdowns, dropdowns, tabs and slides are also given the class <code>active</code>, making it easy to create stateful buttons. Transitions to and from active state are defined using CSS transitions.</p>

<p>Creating a popdown, dropdown, set of tabs or a slide is as easy as adding a class to a node. Here we add the class <code>popdown</code> to a div:</p>

<pre class="html">&lt;a href=&quot;#arthur&quot;&gt;Open dropdown&lt;/a&gt;
&lt;div class=&quot;popdown&quot; id=&quot;arthur&quot;&gt;
	&lt;p&gt;Ford, there is an infinite number of monkeys outside, who want to
	talk to us about this script for Hamlet they have worked out.&lt;/p&gt;
&lt;/div&gt;</pre>

<p>In addition to the common functionality, each of these ui classes has some specific behaviour.</p>

<h3>.dropdown</h3>
 
<p>Dropdowns are used to make menus and navigation. Once active, they deactivate when the user touches or mousedowns outside them, or when the user clicks on or inside them.</p>

<h3>.popdown</h3>

<p>Popdowns are used to make menus, drawers, and elements that require explicit deactivation. Once active, they deactivate when the user touches or mousedowns outside them, or when a <code>#close</code> link is clicked inside them:</p>

<pre class="html">&lt;a href=&quot;#close&quot;&gt;Close&lt;/a&gt;</pre>

<h3>.tab<br/>.slide</h3>

<p>Tabs and slides are functionally identical. Two classes are provided for convenience, as tabs and slides tend to be styled very differently. Where we refer to 'tabs' below, assume that we also mean slides.</p>

<p>In any group of tabs, only one can be active at any one time. Normally, all <code>.tab</code> or <code>.slide</code> siblings of the tab or slide currently being activated automatically become a group.</p>

<p>To be more explicit, the grouping can be overridden with a <code>data-selector</code> attribute containing a selector for all other tabs in the group. The selector can be any that jQuery understands. Here are two tabs grouped using a <code>data-selector</code> attribute:</p>

<pre class="html" title="You may be wondering about that odd div closing tag. That's a technique for creating spaceless html. See the section on html style.">&lt;div class=&quot;quote_tab tab&quot; id=&quot;ford&quot; data-selector=&quot;.quote_tab&quot;&gt;
	&lt;p&gt;Time is an illusion. Lunchtime, doubly so.&lt;/p&gt;
&lt;/div

&gt;&lt;div class=&quot;quote_tab tab&quot; id=&quot;zaphod&quot; data-selector=&quot;.quote_tab&quot;&gt;
	&lt;p&gt;I'm a great and amazing guy, didn't I tell you baby?&lt;/p&gt;
&lt;/div&gt;</pre>

<p>Of course, this means you can create tab groups from non-sibling elements. A little care must be taken, however; all tabs in a group must share the same <code>data-selector</code>: a tab can only belong to one group, and if it is inadvertently selected by another group it will cause some odd behaviour.</p>

<p>Inside tabs and slides, a couple of special links can be used for navigation:</p>

<pre>&lt;a href=&quot;#prev&quot;&gt;Previous slide&lt;/a&gt;
&lt;a href=&quot;#next&quot;&gt;Next slide&lt;/a&gt;</pre>

<p>&#8230;navigating backwards and forwards through the group respectively.</p>

<h2>jQuery</h2>

<p>Template extends jQuery with events and methods.</p>

<h3>activate event</h3>

<p>Popdowns, dropdowns, tabs and slides are all activated by triggering the jQuery special event <code>activate</code>. The definition of this event can be found in js/jquery.event.activate.js. By default, the <code>activate</code> event adds the class <code>active</code> to the element it is triggered on, plus any links that reference that element's id via their <code>href</code> attribute.</p>

<p>The <code>activate</code> event greatly simplifies the code needed to make dropdowns and tabs respond both to user actions and programmatically. Using the <code>activate</code> event as an abstraction, the code that makes dropdowns, popdowns, tabs and slides respond to user events can be found in js/template.ui.js.</p>

<h3>.addLoadingIcon()</h3>

<p>Inserts a <code>.loading_layer</code> with a canvas-animated loading icon into the first element in the collection.</p>

<h3>.removeLoadingIcon()</h3>

<p>Removes a loading icon from the first element in the current collection. It is important to use this method to cancel loading layers created with <code class="js">.addLoadingIcon()</code> as it also cleans up the animation timer.</p>

<h3>.addTransitionClass(<code>class</code> [, <code>fn</code> || <code>options</code>])</h3>

<p>Adds the class <code>class</code>. Analogous to <code>.addClass()</code>, only during a CSS transition caused by adding <code>class</code>, the class <code>transition</code> is also present on the node. This allows for styles that require, for example, <code>display: none;</code> to be applied at the end of a transition, where the class <code>transition</code> can be used to override the <code>display</code> value during the transition.</p>

<p>This is probably more clearly explained with a bit of CSS:</p>

<pre class="css">.popup_layer {
	opacity: 0;
	display: none;
	
	-webkit-transition: opacity 0.06s ease-in;
	   -moz-transition: opacity 0.06s ease-in;
	        transition: opacity 0.06s ease-in;
}

.popup_layer.active {
	opacity: 1;
	display: block;
}

.popup_layer.transition {
	display: block;
}</pre>

<p>For more information, and description of options object, have a look at the repository <a href="http://github.com/stephband/jquery.transitions">github.com/stephband/jquery.transitions</a>.</p>

<h3>.removeTransitionClass(<code>class</code> [, <code>fn</code> || <code>options</code>])</h3>

<p>As <code>.addTransitionClass()</code>, only it removes the class <code>class</code>.</p>

<p>For more information, and description of options object, have a look at the repository <a href="http://github.com/stephband/jquery.transitions">github.com/stephband/jquery.transitions</a>.</p>

<h2>Shims</h2>

<h3>details</h3>

<p></p>

<h2>master branch</h2>

<p>A base template as used for webdoc.</p>

<h2>app branch</h2>

<p>Template for creating app iframes.</p>

<h2>inspector branch</h2>

<p>Template for creating inspector iframes.</p>