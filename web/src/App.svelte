<script lang="ts">
	import { onDestroy } from 'svelte';
	import { fade } from 'svelte/transition';

/*
WORD1	ábaco
WORD2	acelga
WORD3	acoso
WORD4	adicto
WORD5	admitir
WORD6	adoptar
WORD7	arco
WORD8	azar
WORD9	buzón
WORD10	cebolla
WORD11	coco
WORD12	cubo
*/

	const apiEndpoint = "https://2fica32wik.execute-api.sa-east-1.amazonaws.com/seed-attempts";
	const failPhrases = ["No es válido", "Nada que ver", "Flasheaste cualquiera", "Todo mal"];

	let team = "";
	let words = [];
	let promise = Promise.resolve([]);

	let elapsed = 2000;
	let duration = 2000;

	async function fetchResponse() {
		const response = await fetch(apiEndpoint, {
			method: 'post',
			body: JSON.stringify({team, words})
		});;

		if (response.ok) {
  			return response.json();
		} else {
			throw new Error("Error validando palabras");
		}
	}

	function handleValidate(){
		promise = fetchResponse();
		elapsed = 0;
	}

	function isButtonDisabled(team, words, elapsed){
		if(elapsed != duration)
			return true;
			
		if(!team)
			return true;

		if(words.length != 12)
			return true;

		for(let i=0;i<words.length;i++)
			if(!words[i])
				return true;			

		return false;
	}

	let last_time = window.performance.now();
	let frame;

	(function update() {
		frame = requestAnimationFrame(update);

		const time = window.performance.now();
		elapsed += Math.min(
			time - last_time,
			duration - elapsed
		);

		last_time = time;
	}());

	onDestroy(() => {
		cancelAnimationFrame(frame);
	});
</script>

<main>
	<div class="container my-5">
		<h1>Seed Pirates - Shinkansen</h1>
		<div class="row">
			<div class="col mb-3"><img src="img/portal.jpg" alt="Desafío"/></div>
			<div class="col">
				<div class="mb-3">
					<label for="team" class="form-label">Nombre del equipo</label>	
					<input type="name" class="form-control" id="team" bind:value={team}>
				</div>
				<div class="mb-3">
				<span>Palabras</span>

				<div class="row mb-3">
					<div class="col">
						1: <input type="text" class="form-control" bind:value={words[0]}>
					</div>
					<div class="col">
						2: <input type="text" class="form-control" bind:value={words[1]}>
					</div>
					<div class="col">
						3: <input type="text" class="form-control" bind:value={words[2]}>
					</div>
					<div class="col">
						4: <input type="text" class="form-control" bind:value={words[3]}>
					</div>
				</div>

				<div class="row mb-3">
					<div class="col">
						5: <input type="text" class="form-control" bind:value={words[4]}>
					</div>
					<div class="col">
						6: <input type="text" class="form-control" bind:value={words[5]}>
					</div>
					<div class="col">
						7: <input type="text" class="form-control" bind:value={words[6]}>
					</div>
					<div class="col">
						8: <input type="text" class="form-control" bind:value={words[7]}>
					</div>
				</div>

				<div class="row">
					<div class="col">
						9: <input type="text" class="form-control" bind:value={words[8]}>
					</div>
					<div class="col">
						10: <input type="text" class="form-control" bind:value={words[9]}>
					</div>
					<div class="col">
						11: <input type="text" class="form-control" bind:value={words[10]}>
					</div>
					<div class="col">
						12: <input type="text" class="form-control" bind:value={words[11]}>
					</div>
				</div>

				</div>

				<p>
					<button type="submit" class="btn btn-primary" on:click={handleValidate} disabled="{isButtonDisabled(team, words, elapsed)}">Validar</button>
					{#if elapsed != duration}
						<span>{((duration - elapsed) / 1000).toFixed(1)}s</span>			
						<progress value="{(duration - elapsed) / duration}"></progress>
					{/if}
				</p>


				{#await promise}
					Validando...
				{:then data}
					{#if data.status === 'invalid'}
						Revisa las palabras, alguna falta o es inválida.
					{:else if data.status === 'incorrect'}
						<p in:fade>
							{failPhrases[Math.floor(Math.random() * failPhrases.length)]}
						</p>
					{:else if data.status == 'correct'}
						<h1 in:fade> ¡FELICITACIONES, HAS ABIERTO MI COFRE!</h1>
						<img in:fade src="{data.image}" alt="Has ganado!"/>
					{/if}
					
				{:catch error}
					<p style="color: red">Error validando palabras: {error}</p>
				{/await}
			</div>
		</div>
	</div>

</main>

<style>
 	main {
		font-family: 'Roboto Mono', monospace;
	}
</style>