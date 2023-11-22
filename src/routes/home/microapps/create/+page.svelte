<script>
    // @ts-nocheck

    import Form from "../../../../components/+Form.svelte";
    import ProgressBar from "../../../../components/+ProgressBar.svelte";
    let steps = ["1", "2", "3"];
    let stepTitles = [
        "Tell us about your business",
        "choose a theme",
        "add products",
    ];
    let currentActive = 1;
    let progressBar;

    const handleProgress = (stepIncrement) => {
        progressBar.handleProgress(stepIncrement);
    };
</script>

<div class="container d-flex flex-column h-100">
    <div class="text-center">
        <p class="display-5">{stepTitles[currentActive - 1]}</p>
    </div>
    <ProgressBar {steps} bind:currentActive bind:this={progressBar} />
    <div class="flex-grow-1">
        <Form active_step={steps[currentActive - 1]} />
    </div>
    <div class="d-flex justify-content-between mb-3">
        <button
            class={`btn ${currentActive == 1 ? "invisible" : ""}`}
            on:click={() => handleProgress(-1)}>Prev</button
        >
        <button
            class="btn"
            on:click={() => handleProgress(+1)}
            disabled={currentActive == steps.length}
            >{stepTitles.length == currentActive
                ? "Create Microapp"
                : "Next"}</button
        >
    </div>
</div>
