function Question() {
  return (  
    <section className="faq-sec">
		<div className="container">
			<h2>FAQ</h2>
			<h4>Frequently asked questions about Tennis Khelo App!</h4>
			<div className="faq-box">
				<div className="accordion" id="accordionExample">
					<div className="accordion-item">
						<h2 className="accordion-header" id="headingOne">
							<button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
								Is Tennis Khelo available for both iOS and Android?
							</button>
						</h2>
						<div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
							<div className="accordion-body">
								<p>Yes, the app is available for both iOS and Android devices.</p>
							</div>
						</div>
					</div>
					<div className="accordion-item">
						<h2 className="accordion-header" id="headingTwo">
							<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
								How can I get support if I encounter any issues?
							</button>
						</h2>
						<div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
							<div className="accordion-body">
								<p>Yes, the app is available for both iOS and Android devices.</p>
							</div>
						</div>
					</div>
					<div className="accordion-item">
						<h2 className="accordion-header" id="headingThree">
							<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
								How do i use tennis Khelo App?
							</button>
						</h2>
						<div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
							<div className="accordion-body">
								<p>Yes, the app is available for both iOS and Android devices.</p>
							</div>
						</div>
					</div>
					<div className="accordion-item">
						<h2 className="accordion-header" id="headingfour">
							<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefour" aria-expanded="false" aria-controls="collapsefour">
								How do i add League in the app?
							</button>
						</h2>
						<div id="collapsefour" className="accordion-collapse collapse" aria-labelledby="headingfour" data-bs-parent="#accordionExample">
							<div className="accordion-body">
								<p>Yes, the app is available for both iOS and Android devices.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
  );
}

export default Question;