<script>
    import Final from "../components/+Final.svelte";
    import Landing from "../components/+Landing.svelte";
    import StepOne from "../components/+StepOne.svelte";
    import StepThree from "../components/+StepThree.svelte";
    import StepTwo from "../components/+StepTwo.svelte";
</script>

<section>
    <div style="height: 15vh;" class="container d-flex p-2 align-items-center justify-content-center">
        <img src="logo.png" width="40" height="40" alt="" />
        <h1 style="color: #338a93;" class="ms-2 display-1 fw-semibold mb-0">
            WorkShop
        </h1>
    </div>
    <div style="height: 85vh;" id="carouselExampleIndicators" class="carousel carousel-dark slide">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <Landing/>
          </div>
          <div class="carousel-item">
            <StepOne/>
          </div>
          <div class="carousel-item">
            <StepTwo/>
          </div>
          <div class="carousel-item">
            <StepThree/>
          </div>
          <div class="carousel-item">
            <Final/>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
</section>
