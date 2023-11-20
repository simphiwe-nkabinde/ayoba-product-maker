<script>
    import logo from "$lib/assets/logo.png";
</script>

<div
    style="height: 100vh;"
    class="d-flex align-items-center justify-content-center"
>
    <img src={logo} width="100" height="100" alt="logo" class="drop-shadow" />
</div>

<style>
    img {
        animation: 1s ease-in-out slideUp;
    }
    @keyframes slideUp {
        0% {
            transform: translateY(30px);
        }
        100% {
            transform: translateY(0);
        }
    }
</style>
