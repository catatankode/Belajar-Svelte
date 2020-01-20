<script>
	const name = "Rendi Wijiatmoko";
	let point = 0;
	const increase = () => point += 1;
	const decrese = () => point -= 1;
</script>

<main>
	<h1>Hello {name}!</h1>
	<p>Nilai awal {point}</p>
	<button on:click={increase}>add</button>
	<button on:click={decrese}>decrese</button>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>