const container = document.querySelector("#container");

const colorGenerator = () => {
	const id = Math.floor(Math.random() * 7) + 1;
	return `var(--color${id})`; // Use CSS variables for colors
};

const mouseEvent = (child) => {
	child.addEventListener("mouseenter", () => {
		const color = colorGenerator();
		child.style.backgroundColor = color;
	});

	child.addEventListener("mouseleave", () => {
		child.style.backgroundColor = ""; // Reset the background color
	});
};

for (let i = 0; i < 500; i++) {
	const child = document.createElement("div");
	child.textContent = " ";
	child.classList.add("color-block");
	container.appendChild(child);
	mouseEvent(child);
}
