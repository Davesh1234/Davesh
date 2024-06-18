import React from 'react'

function List() {
  return (
    
    <div>
		<center>
			<u>
				<h4>List of Courses</h4>
			</u>
		</center>
		<h4>Certificate Courses</h4>
		<ul type="square">
			<li>CCA</li>
			<li>DTP</li>
			<li>TALLY</li>
		</ul>
		<h4>NIELIT Courses</h4>
		<ol type="I">
			<li>CCC</li>
			<li>O Level</li>
			<li>A Level</li>
		</ol>
		<h4>Diploma Courses</h4>
		<ol type="A">
			<li>DCA</li>
			<li>ADCA</li>
			<li>DFA</li>
			<li>DDNT</li>
		</ol>
		<h4>Programming Courses</h4>
		<ol start="11">
			<li>PYTHON</li>
			<li>Java</li>
			<li>C Programming</li>
			<li>C++</li>			
			<li>Data Structure using C</li>
		</ol>
		<h4>Web Designing Courses</h4>
		<ol>
			<li>HTML</li>
			<li>CSS</li>
			<li>Bootstrap</li>
			<li value="11">Java Script</li>
			<li>JQuery</li>
			<li value="21">MySQL</li>
			<li>PHP</li>
		</ol>		
	
    </div>
  )
}

export default List