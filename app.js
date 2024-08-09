import barba from "@barba/core";
let tlLeave = gsap.timeline({
	defaults: {
		duration: 0.75,
		ease: "Power2.easeOut",
	},
});

let tlEnter = gsap.timeline({
	defaults: {
		duration: 0.75,
		ease: "Power2.easeOut",
	},
});

// leave animation
const leaveAnimation = (current, done) => {
	const product = current.querySelector(".image-container");
	const text = current.querySelector(".showcase-text");
	const circles = current.querySelectorAll(".circle");
	const arrow = current.querySelector(".showcase-arrow");
	/* 	gsap.fromTo(
					current,
					{ opacity: 1 },
					{ opacity: 0, duration: 1, onComplete: done }
				); */
	return tlLeave
		.fromTo(arrow, { opacity: 1, y: 0 }, { opacity: 0, y: 200 })
		.fromTo(
			product,
			{ y: 0, opacity: 1 },
			{ y: -100, opacity: 0, onComplete: done },
			"<"
		)
		.fromTo(
			text,
			{ opacity: 1, y: 0 },
			{ opacity: 0, duration: 1, y: 100, onComplete: done },
			"<"
		)
		.fromTo(
			circles,
			{ opacity: 1, y: 0 },
			{
				opacity: 0,
				duration: 1,
				y: -200,
				onComplete: done,
				stagger: 0.15,
				ease: "back.out(-1.7)",
			},
			"<"
		);
};

// enter animation
const enterAnimation = (current, done, gradient) => {
	const product = current.querySelector(".image-container");
	const text = current.querySelector(".showcase-text");
	const circles = current.querySelectorAll(".circle");
	const arrow = current.querySelector(".showcase-arrow");
	/* 	gsap.fromTo(
					current,
					{ opacity: 1 },
					{ opacity: 0, duration: 1, onComplete: done }
				); */
	return tlEnter
		.to("body", { background: gradient }, "<")
		.fromTo(arrow, { opacity: 0, y: 50 }, { opacity: 1, y: 0 })
		.fromTo(
			product,
			{ y: -100, opacity: 0 },
			{ y: 0, opacity: 1, onComplete: done },
			"<"
		)
		.fromTo(
			text,
			{ opacity: 0, y: 100 },
			{ opacity: 1, duration: 1, y: 0, onComplete: done },
			"<"
		)
		.fromTo(
			circles,
			{ opacity: 0, y: -200 },
			{
				opacity: 1,
				duration: 1,
				y: 0,
				onComplete: done,
				stagger: 0.15,
				ease: "back.out(1.7)",
			},
			"<"
		);
};

// Run animations
barba.init({
	preventRunning: true,
	transitions: [
		// showcase transitions
		{
			name: "default",
			once(data) {
				const done = this.async();
				let next = data.next.container;
				let gradient = getGradient(data.next.namespace);
				gsap.set("body", { background: gradient, duration: 1 });
				enterAnimation(next, done, gradient);
			},
			leave(data) {
				const done = this.async();
				let current = data.current.container;
				leaveAnimation(current, done);
			},

			enter(data) {
				const done = this.async();
				let next = data.next.container;
				let gradient = getGradient(data.next.namespace);
				enterAnimation(next, done, gradient);
			},

			
		},
	],
});

// changing gradient on showcase
function getGradient(name) {
	switch (name) {
		case "handbag":
			return "linear-gradient(260deg, #b75d62, #754d4f)";

		case "boot":
			return "linear-gradient(260deg, #5d8cb7, #4c4f70)";

		case "hat":
			return "linear-gradient(260deg, #b27a5c, #7f5450)";

		default:
			break;
	}
}

document.body.addEventListener("keydown", (e) => {
	console.log(e.target);
	const path = window.location.pathname;

	// Extract the file name from the path
	const pageName = path.substring(path.lastIndexOf("/") + 1);

	if (e.key === "ArrowLeft") {
		let pg = getPrev(pageName);
		// window.location.href = pg;
		barba.go(pg)
	} else if (e.key === "ArrowRight") {
		let pg = getNext(pageName);
		// window.location.href = pg;
		barba.go(pg)
	}
} );

const pages = ["index.html", "boot.html", "hat.html"];

const getPrev = (pg) => {
	const index = pages.findIndex((page) => pg.match(new RegExp(page, "gi")));
	return pages[(index - 1 + pages.length) % pages.length];
};

const getNext = (pg) => {
	const index = pages.findIndex((page) => pg.match(new RegExp(page, "gi")));
	return pages[(index + 1) % pages.length];
};


/* const getPrev = (pg) => {
	if (pg.match(/index/gi)) {
		return "hat.html";
	} else if (pg.match(/boot/gi)) {
		return "index.html";
	} else {
		return "hat.html";
	}
};

const getNext = (pg) => {
	if (pg.match(/index/gi)) {
		return "boot.html";
	} else if (pg.match(/boot/gi)) {
		return "hat.html";
	} else {
		return "index.html";
	}
};
 */
