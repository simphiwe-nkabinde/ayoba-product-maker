<script>
    import { slide } from "svelte/transition";

    let categories = ["men", "women", "teens", "summer"];
    let expanded = false;

    let name = '';
    let description = ''
    let price = 0;
    let qty = 1;
</script>

<button class="btn border-dark w-100 text-start mb-3 p-3">
    {#if !expanded}
        <div on:click={() => (expanded = true)}>+ Add Product</div>
    {:else}
        <div transition:slide class="">
            <div class="mb-3">
                <input
                    bind:value={name}
                    type="text"
                    class="form-control"
                    id="name"
                    placeholder="name of product"
                />
            </div>
            <label class="form-label">product images</label>
            <div class="mb-3 row row-cols-3 justify-content-around">
                <div
                    class="col border border-dark upload-block rounded-3 display-5 fw-bold"
                >
                    <i class="bi bi-plus-lg" />
                </div>
                <div
                    class="col border border-dark upload-block rounded-3 display-5 fw-bold"
                >
                    <i class="bi bi-plus-lg" />
                </div>
                <div
                    class="col border border-dark upload-block rounded-3 display-5 fw-bold"
                >
                    <i class="bi bi-plus-lg" />
                </div>
            </div>
            <div class="mb-3">
                <label for="description" class="form-label">Descriptipn</label>
                <textarea bind:value={description} class="form-control" id="description" rows="3" />
            </div>
            <div class="mb-3 row">
                <label for="price" class="form-label col-3">Price</label>
                <input
                bind:value={price}
                    type="number"
                    class="form-control form-control-sm w-50"
                    id="price"
                />
            </div>
            <div class="mb-3">
                <label for="price" class="form-label">Categories</label>
                <div class="d-flex flex-wrap">
                    {#each categories as category}
                        <button class="btn btn-sm btn-outline-dark m-2"
                            >{category}</button
                        >
                    {/each}
                </div>
            </div>

            <div class="mb-3 row">
                <label for="qty" class="form-label col-3">Quatity</label>
                <input
                bind:value={qty}
                    type="number"
                    class="form-control form-control-sm w-50"
                    id="qty"
                />
            </div>
            <div class="d-flex justify-content-between">
                <button
                    on:click={() => (expanded = false)}
                    class="btn btn-secondary">cancel</button
                >
                <button class="btn btn-success">save</button>
            </div>
        </div>
    {/if}
</button>

<style>
    .upload-block {
        aspect-ratio: 1/1;
        width: 25%;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }
</style>
