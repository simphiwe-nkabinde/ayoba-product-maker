<script>
// @ts-nocheck

  import logo from '$lib/assets/logo.png';
  import { onMount } from 'svelte';

  let ayoba
  let msisdn
  let username

  onMount(async () => {
    ayoba = await import('ayoba-microapp-api');
    ayoba.getUserPhoneNumber(val => msisdn = val)
    ayoba.getUserName(val => username = val)
  })
</script>
<div style="height: 15vh;" class="container d-flex p-2 align-items-center justify-content-center">
    <img src={logo} class="border rounded" width="40" height="40" alt="" />
    <h1 class="ms-2 display-1 fw-semibold mb-0">
        WorkShop
    </h1>
</div>
<div style="height: 85vh;" class="container text-center d-flex flex-column justify-content-center">
    <h2 class="fs-4">Create an Account</h2>
    <p class="small">Lorem ipsum dolor sit amet, consectetur adipisicing.</p>

    <form class="container">
        <div class="mb-5">
          <label for="exampleInputEmail1" class="form-label">Username</label>
          <input type="text" class="form-control form-control-sm" value={username || ""} id="exampleInputEmail1" aria-describedby="emailHelp">
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Phone Number</label>
          <input type="tel" class="form-control form-control-sm" disabled value={msisdn} id="exampleInputPassword1">
        </div>
        <a href="home/microapps" type="button" class="btn text-light" style="background-color: #3ca5b0;">Submit</a>
      </form>
</div>