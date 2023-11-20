<script>
    import Header from "../../components/+Header.svelte";
    import Navigation from "../../components/+Navigation.svelte";

</script>

<div class="page-wrapper bg-light">
    <Header />
    <slot />
    <Navigation />
</div>
