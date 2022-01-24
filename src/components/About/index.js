import React from 'react';

function About() {
	
	return (
		<div className="w-full min-h-screen bg-middle-blue-green">
			<div className="absolute w-full h-screen flex justify-center">
		<div className="self-center">
			<p className="font-semibold font-dancing text-5xl leading-none"> Hello, </p>
			<p className="font-Dancing text-6xl"> I am  Saurabh Patel </p>
		</div>
		<div className="justify-self-start self-center h-40 w-full flex items-center justify-center">
		<img className="h-32 w-32 rounded-full object-cover shadow-xl" src={require("../../assets/images/image3.jpeg")} />
			</div>
		<div className="mt-2 self-center">
			<p className="text-xl font-serif font-semibold tracking-wider uppercase"> FullStack Web Developer</p>
			<p className="text-gray-600 text-lg font-semibold text-justify"> based in the  Frederick MD area, USA </p>
		</div>
		<div className='mt-8 self-center px-4 text-lg font-semibold tracking-wider text-center'>
		  <p> I am a full stack web developer looking to build a more
					intuitive user experience on the web. I recently earned
					a certificate in full stack development from The George Washington
					University  bootcamp, with newly developed
					skills in JavaScript, CSS, React.js, and responsive web
					design. while learning new technologies. </p>
		</div>
	</div>
	</div>
	
	  );
	}
	
	export default About;