<!doctype html>
<html class="no-js" lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>John Lusky | Interactive Developer and Designer</title>

    <!-- Standard Favicon -->
	<link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
	<link rel="icon" href="favicon.ico" type="image/x-icon">

	<!-- For iPhone 4 Retina display: -->
	<link rel="apple-touch-icon-precomposed" sizes="114x114" href="img/apple-touch-icon-114x114-precomposed.png">

	<!-- For iPad: -->
	<link rel="apple-touch-icon-precomposed" sizes="72x72" href="img/apple-touch-icon-72x72-precomposed.png">

	<!-- For iPhone: -->
	<link rel="apple-touch-icon-precomposed" href="img/apple-touch-icon-57x57-precomposed.png">

    <link href="https://fonts.googleapis.com/css?family=Roboto:400,700" rel="stylesheet">

    <link rel="stylesheet" href="css/styles.css" />
    <script src="js/vendor/modernizr.js"></script>
  </head>
  <body data-stellar-background-ratio=".2">

    <section id="wrapper">

        <div class="navigation mobile-nav">
            <a class="hud-btn smooth-mobile" href="#about" title="About">About</a>
            <a class="hud-btn smooth-mobile" href="#work" title="Work">Work</a>
            <a class="hud-btn smooth-mobile" href="#contact" title="Contact">Contact</a>
        </div>

    	<section id="top">

    		<h1 class="logo">John Lusky</h1>

    		<h2 class="idd-hdr">Developer / Designer</h2>

            <div id="hud" class="navigation">
                <a id="hud-about" class="hud-btn smooth-mobile" href="#about" title="About">About</a>
                <a id="hud-work" class="hud-btn smooth-mobile" href="#work" title="Work">Work</a>
                <a id="hud-contact" class="hud-btn smooth-mobile" href="#contact" title="Contact">Contact</a>
            </div>

    	</section>

    	<!--<div class="space" data-stellar-background-ratio=".5"></div>-->

    	<div id="space-video" class="space show-for-medium-up"></div>
	    <div class="row" id="about">
			<div class="large-12 columns">
				<h2>About</h2>
			</div>
		</div>

		<div class="row" id="about-content1">
			<div class="large-8 columns">
				<div id="chart" class="hide-for-small"></div>
				<div class="bg-triangle hide-for-small"></div>
			</div>
			<div class="large-4 columns">
				<div class="bio-photo">
                    <img class="show-for-large-up" src="img/photo-me.jpg" alt="John Lusky" />
                </div>
			</div>
		</div>

		<div class="row" id="about-content2">
			<div class="large-8 columns">
				<p>Raised in the small town of Birdsboro, Pennsylvania, I began experimenting with web design and web development when I was 13. I attended Philadelphia University in 2008, and I graduated as the top student in my major with a B.S. in Interactive Design and Media in 2012. I started working at 1 Trick Pony – an ad agency based out of Hammonton, New Jersey – a few days after graduation.</p>

				<p>My current job is a full-time development gig (probably 90% front-end). I prefer to write code with <a href="https://atom.io/" target="_blank" title="Atom">Atom</a>, I like <a href="http://gulpjs.com/" target="_blank" title="Gulp">Gulp</a> for compiling, and I use <a href="https://www.git-tower.com/mac/" target="_blank" title="Tower">Tower</a> (Git) for collaboration.</p>

                <a class="show-hidden-text" href="#" title="Read More">Continue reading more (less essential) information...</a>

                <p class="hidden-text">I play video games to relax when I have free time. I experimented with game development in college and made a basic FPS with the Unity engine for my senior project. I'm cursed with lactose intolerance despite my love for mozzarella sticks and pizza. I quote The Office a lot (I can't help this). I try not to be too cynical.</p>
			</div>
			<div class="large-4 columns">
				<a class="icon-github" href="https://github.com/luskyj89" title="Github" target="_blank"></a>
                <a class="icon-linkedin" href="https://www.linkedin.com/in/john-lusky-a7978046" title="LinkedIn" target="_blank"></a>
                <a class="icon-mail" href="#contact" title="Contact" target="_blank"></a>

				<hr>

				<p>If you’d like a more comprehensive rundown
				of my skills and work experience, you can
				<a href="files/lusky-resume-2017.pdf" target="_blank">download my resume</a>.</p>
			</div>
		</div>

		<div class="row" id="work">
			<div class="large-12 columns">
				<h2>Work</h2>
                <p class="medium-centered more-margin">Unfortunately, contractual restrictions prohibit me from showing some of my most recent and relevant work publicly. Here's a list of some notable clients I have experience working with. If you'd like to see my work, please <a href="#contact">contact me directly</a>.

                <figure id="clients"></figure>

                <hr>

                <h3 class="title-centered show-for-medium-up">Current Experimental Project</h3>
                <p class="medium-centered show-for-medium-up">I like to keep busy outside of work with fun side projects that I can use to cherry pick new skills I want to learn. Here's what I'm working on right now.</p>
			</div>
		</div>

		<div class="row work-content show-for-medium-up" id="xback">

			<div class="large-8 columns">

				<div id="stream-boy">
                    <!-- <div class="twinkle-overlay"></div> -->
                </div>

			</div>
			<div class="large-4 columns ">

                <h3>Web App - Streamboy</h3>

				<hr>

				<p>A friend of mine tried his hand at streaming a while back and I noticed he was playing games with his viewers on stream. They were simple games but they took some complicated and tiresome work inside of OBS to function. I decided to recreate his games ("Where's that Toadboy?" and "Toadboy Quizzo!") as a web app that he could more easily use instead. I kept adding features and games until it became what it is now.</p>

			</div>
		</div>

        <div class="row no-margin show-for-medium-up">
			<div class="large-12 columns written-content">

                <a class="show-hidden-text" href="#" title="Read More">Expand a more detailed description.</a>

                <article class="hidden-text">
                    <p>OBS is a free open source application that most Twitch and Youtube streamers use to do their thing. My web app is intended to function as a window capture outside of OBS. The user overlays the window capture over their streaming scene and matches chroma key colors between apps for a transparent background. Then they can activate games, tools, effects, and audio from Streamboy's control panel to enhance their streams.</p>

                    <p>The app utilizes a combination of CSS3 and jQuery for animation along with HTML5 audio for music and sounds. Javascript powers the control panel, games, and other tools. There's a scoreboard for fighting games, a giveaway screen to display game box art, and a screen that pulls Youtube embeds into the viewport &mdash; intending to eliminate the need to line up window captures every time the user wants to display a Youtube video on their stream.</p>

                    <p>I named the app Streamboy and added convenience features like hotkeys to make it easier to use. I intend to write documentation and open the app up to allow anyone to use, but that's a work in progress. Shout-out to Luke VanTrieste for the original games, QA help, and some creative direction.</p>
                </article>

                <p>
                    <a class="link-button" href="http://streamboy.multitoad.com" target="_blank" title="Streamboy">&Lscr;&nbsp; Try it out</a><br>
                    <a class="link-button" href="https://github.com/luskyj89/multitoad-seapp" target="_blank" title="Github">&Lscr;&nbsp; Fork it on Github</a>
                </p>

                <hr>

            </div>
        </div>

		<div class="row" id="contact" data-magellan-destination="contact">
			<div class="large-7 columns">
				<h2>Contact</h2>
				<fieldset id="contact_form">
					<div id="result"></div>
					<input type="text" name="name" id="name" value="Name" onfocus="if(this.value==this.defaultValue)this.value='';" onblur="if(this.value=='')this.value=this.defaultValue;"/>
					<input type="email" name="email" id="email" value="Email" onfocus="if(this.value==this.defaultValue)this.value='';" onblur="if(this.value=='')this.value=this.defaultValue;" />
					<textarea name="message" id="message" placeholder="Enter your message..."></textarea>
					<button class="submit_btn" id="submit_btn">Send</button>
				</fieldset>
			</div>
			<div class="large-5 columns show-for-large-up">
				<img src="img/bg-contact.png" />
			</div>
		</div>

    </section>

    <footer>

    	<div class="row" id="footer">
			<div class="large-10 columns">
				<a href="#top" class="smooth" title="johnlusky.com"><img src="img/gfx-footer-logo.png" width="200" height="126" alt="John Lusky" /></a>
				<ul>
					<li><a href="files/lusky-resume_webinfo.pdf" class="smooth" title="Resume" target="_blank">Resume</a></li>
					<li><a href="https://www.linkedin.com/pub/john-lusky/46/780/a79" class="smooth" title="LinkedIn" target="_blank">LinkedIn</a></li>
					<li><a href="https://github.com/luskyj89" class="smooth" title="Twitter" target="_blank">Github</a></li>
				</ul>
			</div>
			<div class="large-2 columns">
				<a class="back-to-top smooth" href="#top">Back to top</a>
			</div>
		</div>

    </footer>


    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
    <script>window.jQuery || document.write('<script src="js/vendor/jquery-2.2.4.min.js"><\/script>')</script>
    <script src="js/foundation.min.js"></script>
    <script src="js/foundation/foundation.magellan.js"></script>

    <script src="js/plugins.js"></script>
    <script src="js/scripts.min.js"></script>

  </body>
</html>
