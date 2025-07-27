<script lang="ts">
	const textChoices: string[] = ['Hello Wööööörld!', 'Hello Hell!'];
	let textToShow: string = textChoices[0];
	function doMagic() {
		textToShow = textToShow === textChoices[0] ? textChoices[1] : textChoices[0];
	}
</script>

<div class="flex flex-col items-center">
	<button onclick="{doMagic}">Do Magic</button>
	<div class="mt-1">{textToShow}</div>
</div>
