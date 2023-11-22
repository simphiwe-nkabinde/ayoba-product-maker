<script>
	// @ts-nocheck
	import BusinessInfoStep from "./+BusinessInfoStep.svelte";
    import ProductsStep from "./+ProductsStep.svelte";
	import ThemeStep from "./+ThemeStep.svelte";
	export let active_step;
</script>

<div>
	{#if active_step == "1"}
		<BusinessInfoStep />
	{:else if active_step == "2"}
		<ThemeStep />
	{:else if active_step == "3"}
		<ProductsStep/>
	{:else}
		<div class="message">
			<h2>Thank you for choosing us</h2>
			<button class="btn submit">Finish </button>
		</div>
	{/if}
</div>
