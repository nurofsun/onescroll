class OneScroll {
	constructor(selector) {
		this.selector = selector;
	}
	getHeightSection() {
		let sections = document.querySelectorAll(`${this.selector} > .onescroll-container > .onescroll-section`);
		return sections[0].clientHeight;
	}
	getContainer() {
		return document.querySelector(`${this.selector} > .onescroll-container`);
	}
	getContainerCurrentPosition() {
		return parseInt(this.getContainer().style.bottom);
	}
	setInitialContainerPosition() {
		let container = this.getContainer();
		container.style.bottom = 0;
	}
	moveDown() {
		let container = this.getContainer();
		let currentPosition = this.getContainerCurrentPosition();
		let heightOfEachSection = this.getHeightSection();
		container.style.bottom = (currentPosition + heightOfEachSection) + 'px';
	}
	moveUp() {
		let container = this.getContainer();
		let currentPosition = this.getContainerCurrentPosition();
		let heightOfEachSection = this.getHeightSection();
		container.style.bottom = (currentPosition - heightOfEachSection) + 'px';
	}
	moveByIndex(number) {
		let container = this.getContainer();
		let heightOfEachSection = this.getHeightSection();
		container.style.bottom = (heightOfEachSection * number) + 'px';
	}
	init() {
		this.setInitialContainerPosition();

		let sections = document.querySelectorAll('.onescroll-section');

		const attachAction = () => {
			let mobileScreenSize = window.matchMedia('(max-width: 768px)');

			if (!mobileScreenSize.matches) {
				const moveSection = (event) => {
					if (event.deltaY < 0) {
						if (this.getContainerCurrentPosition() !== 0) {
							this.moveUp();	
							document.body.removeEventListener('wheel', moveSection);
						}
					}
					else if (event.deltaY > 0) {
						if (this.getContainerCurrentPosition() < (this.getHeightSection() * (sections.length - 1))) {
							this.moveDown();	
							document.body.removeEventListener('wheel', moveSection);
						}
					}
					else {
						return false;
					}
					setTimeout(function() {
						document.body.addEventListener('wheel', moveSection);
					}, 700)
				};
				//sections.forEach(function(section) {
					//section.addEventListener('wheel', moveSection);
				//});
				document.body.addEventListener('wheel', moveSection);
			} else if (mobileScreenSize.matches) {
				const moveSectionForMobile = (event) => {
					let userTouch = event.changedTouches[0];
					let sectionHeightCenter = this.getHeightSection() / 2;

					if (sectionHeightCenter > userTouch.clientY) {
						if (this.getContainerCurrentPosition() < (this.getHeightSection() * (sections.length - 1))) {
							this.moveDown();	
						}
					}
					else {
						if (this.getContainerCurrentPosition() !== 0) {
							this.moveUp();	
						}
					}
				}
				document.body.addEventListener('touchend', moveSectionForMobile, false);
			}
		}
		window.addEventListener('resize', attachAction);
		attachAction();
	}
}
