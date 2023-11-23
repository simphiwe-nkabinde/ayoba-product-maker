<script>
    // @ts-nocheck

    let categories = [];
    let newCategory = "";

    function addCategory() {
        if (!categories.includes(newCategory)) {
            categories = [...categories, newCategory];
        }
        newCategory = "";
    }
</script>

<div class="mb-3 container">
    <label for="" class="mb-2">Product Categories</label>
    <div
        class="row mb-2 border rounded-pill overflow-hidden w-50"
        style="height: 30px;"
    >
        <input
            bind:value={newCategory}
            type="text"
            placeholder="add category"
            class="rounded-0 form-control border-0 py-0"
            style="width:75%;"
        />
        <button
            class="btn btn-success rounded-0 p-0 h-100"
            on:click={() => addCategory()}
            style="width:25%">+</button
        >
    </div>
    <div class="d-flex flex-wrap">
        {#each categories as category}
            <button class="border rounded-pill small m-1">{category}</button>
        {/each}
    </div>
</div>
