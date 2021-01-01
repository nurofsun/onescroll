class OneScroll {
	constructor(selector) {
		this.selector = selector;
	}
	getHeightSection() {
		let sections = document.querySelectorAll(`${this.selector} > .onescroll-container > .onescroll-section`);
		return sections[0].clientHeight;
	}
	getContainer() {
		return document
				.querySelector(`${this.selector} > .onescroll-container`);
	}
	getContainerCurrentPosition() {
		let container = this.getContainer();
		return parseInt(container.style.bottom);
	}
	init() {
		let container = this.getContainer();
		container.style.bottom = 0;
	}
	next() {
		let container = this.getContainer();
		let currentPosition = this.getContainerCurrentPosition();
		let heightOfEachSection = this.getHeightSection();
		container.style.bottom = (currentPosition + heightOfEachSection) + 'px';
		console.log(currentPosition);
	}
	previous() {
		let { container, heightOfEachSection, currentPosition } = this.init();
		currentPosition -= heightOfEachSection;
		container.style.bottom = currentPosition + 'px';
	}
}
