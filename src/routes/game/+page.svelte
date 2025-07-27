<script lang="ts">

	import type { PageData } from './$types';
	import type { LevelJLPT } from '$lib/types/levelJLPT';
	export let data: PageData;

	let levelJLPT: LevelJLPT = data.levelJLPT;

</script>

<h1>Game start with Level: {levelJLPT}</h1>