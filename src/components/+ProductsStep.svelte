<script>
    // @ts-nocheck

    import AddProduct from "./+AddProduct.svelte";

    let products = [];
</script>

<div class="">
    <AddProduct />
    <div class="mb-3">
        {#each products as product}
            <div class="btn border">
                {product.name}
            </div>
        {/each}
    </div>
</div>
