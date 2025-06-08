document.addEventListener("DOMContentLoaded", function () {
let display = document.querySelector(".input-text");
let buttons = document.querySelectorAll(".btn, .btn1");

buttons.forEach(button => {
	button.addEventListener("click", function () {
		let value = this.value;

		if (value === "C") {
			display.value = ""; // ডিসপ্লে ক্লিয়ার করবে
		} else if (value === "DEL") {
			display.value = display.value.slice(0, -1); // শেষ সংখ্যা মুছে ফেলবে
		} else if (value === "=") {
			try {
				display.value = eval(display.value); // গাণিতিক হিসাব করবে
			} catch {
				display.value = "Error"; // ভুল ইনপুট হলে এরর দেখাবে
			}
		} else if (value === "+/-") {
			if (display.value) {
				display.value = display.value * -1; // সংখ্যা পজিটিভ থেকে নেগেটিভ করবে
			}
		} else {
			display.value += value; // ইনপুট যোগ করবে
		}
	});
});
});
