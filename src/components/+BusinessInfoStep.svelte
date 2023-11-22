<form>
    <div class="mb-3">
        <label for="name" class="form-label">
            What is the name of your business?
        </label>
        <input type="text" class="form-control" id="name" />
    </div>
    <div class="mb-3">
        <label for="description" class="form-label">
            Tell us a bit it more?
        </label>
        <textarea
            class="form-control"
            placeholder="a short description about your business"
            id="description"
        />
    </div>
    <div class="mb-3">
        <label for="category" class="form-label">
            What type of business is it?
        </label>
        <select
            class="form-select"
            id="category"
            aria-label="Default select example"
        >
            <option selected>Select a category</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
        </select>
    </div>
</form>