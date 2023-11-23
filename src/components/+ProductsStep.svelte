<script>
    // @ts-nocheck

    import AddCategories from "./+AddCategories.svelte";
    import AddProduct from "./+AddProduct.svelte";

    let products = [];
</script>

<div class="">
    <AddCategories />
    <hr />
    <AddProduct />
    <div class="mb-3">
        {#each products as product}
            <div class="btn border">
                {product.name}
            </div>
        {/each}
    </div>
</div>
