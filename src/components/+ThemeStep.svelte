<script>
    // @ts-nocheck

    import theme1 from "$lib/assets/theme-1.png";
    import theme2 from "$lib/assets/theme-2.png";
    import theme3 from "$lib/assets/theme-3.png";
    import theme4 from "$lib/assets/theme-4.png";
    import theme5 from "$lib/assets/theme-5.png";

    let carouselData = [theme1, theme2, theme3, theme4, theme5];
    let selectedTheme = "";

    function handleClick(e) {

    }
</script>

<div>
    <!-- Theme step -->
    <p class="text-center my-4">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. In, accusamus.
    </p>
    <div
        class="carousel-wrapper d-flex w-100 justify-content-around align-items-center"
    >
        {#each carouselData as themeImg, i}
            <div
                class={`text-center carousel-block`}
                data-block={`${i + 1}`}
            >
                <img class="w-100 h-100" src={themeImg} alt="" />
                <p>Theme {i}</p>
            </div>
        {/each}
    </div>
</div>

<style>
    .carousel-block {
        height: 100px;
        opacity: 1;
        transition: all 0.3s ease-in-out;
        z-index: 0;
        display: none;
    }
    div[data-block="2"] {
        opacity: 0.5;
        display: block;
    }
    div[data-block="3"] {
        height: 200px;
        display: block;
        opacity: 1;
        box-shadow: 0 0 30px rgba(255, 255, 255, 0.6),
            0 0 60px rgba(255, 255, 255, 0.45),
            0 0 110px rgba(255, 255, 255, 0.25),
            0 0 100px rgba(255, 255, 255, 0.1);
    }
    div[data-block="4"] {
        opacity: 0.5;
        display: block;
    }
</style>
