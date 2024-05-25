import React from 'react';
import myImg from '../images/hero.jpg';
import SectionTitle from './SectionTitle';

function About() {
	return (
		<div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 py-12">
			<div className="w-full md:w-6/12">
				<SectionTitle>About Me</SectionTitle>
				<p className="text-md text-gray-600 dark:text-gray-300">
				Passionate Full Stack Developer with an 10-month at various organizations like FuturesFirst , NeoSpaceInfo Tech, adept at React.js and Django. My commitment to code quality is evident in my GitHub portfolio, showcasing diverse projects and industry-standard practices. A 4th-year Computer Science BTech undergrad, I excel in problem-solving with a solid grasp of data structures and algorithms. I thrive in prompt engineering and efficient task execution, driven by a relentless pursuit of excellence. Eager to leverage my skills and experience to contribute meaningfully to your organization's success. Let's connect and explore how I can elevate your team's projects to new heights.
				</p>
				
			</div>

			<img
				src={myImg}
				alt="Himanshu"
				className="w-full md:w-6/12 rounded-lg object-cover"
				style={{  width: "45%"}}
			/>
		</div>
	);
}

export default About;
