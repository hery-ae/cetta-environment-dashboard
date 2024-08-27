<script>
	import Header from './Header.svelte';
	import './styles.css';
</script>

<div class="app container max-w-screen-lg mx-auto px-3 md:px-12">
	<Header />

	<main>
		<slot />
	</main>

	<footer></footer>
</div>
