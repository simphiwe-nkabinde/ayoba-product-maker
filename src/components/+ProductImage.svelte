<script>
    // @ts-nocheck

    let avatar, fileinput;
    function onFileSelected(e) {
        let image = e.target.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(image);
        reader.onload = (e) => {
            avatar = e.target.result;
        };
    }
</script>

<button
    on:click={() => fileinput.click()}
    class="border border-secondary bg-light upload-block rounded-3 display-5 fw-bold p-0 overflow-hidden"
>
    {#if avatar}
        <img class="object-fit-cover img-fluid" src={avatar} alt="d" />
    {:else}
        <i class="bi bi-plus-lg" />
    {/if}

    <input
        class="d-none"
        type="file"
        accept=".jpg, .jpeg, .png"
        on:change={(e) => onFileSelected(e)}
        bind:this={fileinput}
    />
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
