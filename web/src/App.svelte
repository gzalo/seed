<script lang="ts">
	let showClues = false;
	let showSolutions = false;

	function toggleClues(){
		showClues = !showClues;
	}

	function toggleSolutions(){
		showSolutions = !showSolutions;
	}
</script>

<main>
	<div class="container my-5">
		<h1>Seed Pirates - Shinkansen - 24/04/2021</h1>
		<div class="row">
			<div class="col mb-3"><img src="img/puzzles.png" alt="Desafío"/></div>
			<div class="col">

				<p>
					<button type="submit" class="btn btn-primary" on:click={toggleClues} >Ver pistas</button>
				</p>

				{#if showClues}
					<h3>1</h3>
					Tanto la pregunta como la respuesta son anagramas.
					<h3>2</h3>
					¿Cómo se dice grúa en inglés?
					<h3>3</h3>
					Villana de en una película de Disney.
					<h3>4</h3>
					Órgano del cuerpo.
					<h3>5</h3>
					Deberás tocar el tema de esa película, y recordar cómo empieza su letra.
					<h3>6</h3>
					En la Pokédex, comparten número con "adulto" y "ámbito".
					<h3>7</h3>
					La imagen parece blanca pero no lo es, tiene algo oculto. Puedes pintar su fondo con Paint para revelar el secreto.
					<h3>8</h3>
					Escrito en lenguaje Básico Galáctico.
					<h3>9</h3>
					La letra que está incorrecta en ambas palabras.
					<h3>10</h3>
					El engendro asoma de la terraza de un cine a dos cuadras al norte.
					<h3>11</h3>
					La de la foto es un personaje principal de la serie Lost/Perdidos.
					<h3>12</h3>
					Una palabra que en español se monte y en italiano se unte.
				{/if}


				<p>
					<button type="submit" class="btn btn-primary" on:click={toggleSolutions} >Ver soluciones</button>
				</p>

				{#if showSolutions}
				<h3>1:</h3> <strong>Sistema</strong>: ¿Qué río pasó de sucio a inmaculado? El Támesis (anagrama)
				<h3>2:</h3> <strong>Cráneo</strong>: Una grúa (crane en inglés) que lleva una O.
				<h3>3:</h3> <strong>Débil</strong>: Por Cruella <em>de Vil</em> (de 101 Dálmatas).
				<h3>4:</h3> <strong>Timo</strong>: Un órgano del cuerpo que te protege y tiene el mismo nombre que una estafa (timo).
				<h3>5:</h3> <strong>Fábula</strong>: Al tocar las notas en el teclado suena la canción de "La Bella y la Bestia". La primera palabra de la letra es "fábula". 
				<h3>6:</h3> <strong>Vulgar</strong>: Los Pokémon son Vulpix y Gengar. Combinando las 3 primeras y las 3 últimas letras se llega a la palabra.
				<h3>7:</h3> <strong>Variar</strong>: Al pintar el fondo se observa una frutilla, un campo y un símbolo infinito. La canción correspondiente es "Strawberry Fields Forever", que se lanzó en 1967. Ese número corresponde en el diccionario a la palabra <em>Variar</em>.
				<h3>8:</h3> <strong>Sable</strong>: El texto (en lenguaje Aurebesh) dice "Son de luz", el que se ve es Luke Skywalker, de Star Wars, saga en la cual se usan sables de luz como arma.
				<h3>9:</h3> <strong>Enlace</strong>: Ambas palabras tienen un error <em>en la ce</em>.
				<h3>10:</h3> <strong>Gorila</strong>: Mirando al noreste se ve un <em>Godzilla/Gojira</em> asomándose de un edificio. El nombre <em>Gojira</em> surge de la unión de dos palabras, <em>gorila</em> y <em>ballena</em>.
				<h3>11:</h3> <strong>Rescate</strong>: Res (vaca) + Kate (nombre del personaje de Lost).
				<h3>12:</h3> <strong>Burro</strong>: Significa <em>manteca</em> en italiano (es bueno para untar, pero no se puede montar).
				{/if}


			</div>
		</div>
	</div>

</main>

<style>
 	main {
		font-family: 'Roboto', Arial, Helvetica, sans-serif;
	}
</style>