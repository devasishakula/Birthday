var card1=document.querySelector('#card');
var btn1=document.querySelector('#btn');
btn1.addEventListener('click',function()
{
	card1.innerHTML=`<marquee behaviour="scroll" direction="left" scrollamount="22">
					<img class="jen" src="jenn.jpeg">
					<img class="jen" src="jenn5.jpeg">
					<img class="jen" src="jenn1.jpeg">
					<img class="jen" src="jenn2.jpeg">
					<img class="jen" src="jenn3.jpeg">
					</marquee>
					<marquee behaviour="scroll" direction="left" scrollamount="9">
					<p id="p">
					Happiest Birthday to the most lovable person
					who bought a lots of joy into my life.
					I have never met a person who is as sweet as you are.
					May you enjoy your Birthday with lots of
					joy, Wherever you and I in the world, if
					i think about you i'll be definetly getting
					a smile on my face...
					Waiting to meet you... Once again,
					many more Happy returns of the day dear...:)
					</p></marquee>`;
});