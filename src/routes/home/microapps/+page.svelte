<script>
    import Header from "../../../components/+Header.svelte";
    import Navigation from "../../../components/+Navigation.svelte";
</script>

<div class="page-wrapper bg-light">
    <Header />
    <section class="row row-cols-2 align-content-start px-4 py-4">
        <button style="color: #338a93;" class="col d-flex flex-column btn justify-content-center align-items-center border rounded-4 border-2 border-dashed  mb-3">
            <i class="bi bi-plus-lg display-1 d-block"></i>
            <p class="display-6">Create</p>
        </button>
        <div class="col text-center mb-3">
            <div>
                <img src="logo.png" class="img-fluid" alt="" />
            </div>
            <p class="mb-0">first application</p>
        </div>
        <div class="col text-center mb-3">
            <div>
                <img src="logo.png" class="img-fluid" alt="" />
            </div>
            <p class="mb-0">first application</p>
        </div>
        <div class="col text-center mb-3">
            <div>
                <img src="logo.png" class="img-fluid" alt="" />
            </div>
            <p class="mb-0">second application</p>
        </div>
    </section>
    <Navigation />
</div>
