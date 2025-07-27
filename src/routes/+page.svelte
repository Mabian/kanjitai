<script lang="ts">

	import { goto } from '$app/navigation';
	import type { LevelJLPT } from '$lib/types/levelJLPT';

	let filterValue: 'unfiltered' | LevelJLPT = 'unfiltered';

	function handleFilterChange(event: Event) {
		const target = event.target as HTMLInputElement;
		filterValue = target.value as typeof filterValue;
		console.log(target.value);
	}

	function startGame() {
		goto('/game?level=' + filterValue);
	}
</script>

<div class="flex flex-col justify-center items-center ml-5 mr-5 mt-5 mb-5">
	<h1 class="text-2xl mb-5">漢字したい</h1>
	<div class="flex flex-col card bg-base-300 pt-5 pb-5 pl-10 pr-10 w-full max-w-[520px]">
		<span class="text-left w-full mb-2">Choose a Level</span>
		<div class="filter flex gap-y-1" onchange={handleFilterChange}>
			<input class="btn filter-reset" value="unfiltered" type="radio" name="metaframeworks" aria-label="All"/>
			<input class="btn" type="radio" value="n5" name="metaframeworks" aria-label="JLPT N5"/>
			<input class="btn" type="radio" value="n4" name="metaframeworks" aria-label="JLPT N4"/>
			<input class="btn" type="radio" value="n3" name="metaframeworks" aria-label="JLPT N3"/>
			<input class="btn" type="radio" value="n2" name="metaframeworks" aria-label="JLPT N2"/>
			<input class="btn" type="radio" value="n1" name="metaframeworks" aria-label="JLPT N1"/>
		</div>
		<button class="btn btn-primary mt-5 w-fit ml-auto" class:btn-disabled={filterValue === 'unfiltered'} onclick="{startGame}">Start</button>
	</div>
</div>
