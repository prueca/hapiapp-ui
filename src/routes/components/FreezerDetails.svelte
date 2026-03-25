<script lang="ts">
    import Icon from '@iconify/svelte'

    let open = $state(false)
</script>

<!-- Open the modal using ID.showModal() method -->
<dialog id="freezer-details" class="modal" {open}>
    <div class="modal-box">
        <form method="dialog">
            <button class="close-btn btn btn-circle btn-ghost">
                <Icon icon="solar:close-square-bold" width="24" />
            </button>
        </form>
        <h3 class="text-lg font-bold">Hello!</h3>
        <p class="py-4">Press ESC key or click outside to close</p>
    </div>
    <form method="dialog" class="modal-backdrop">
        <button>close</button>
    </form>
</dialog>

<style lang="postcss">
    @reference 'tailwindcss';

    .close-btn {
        @apply absolute top-2 right-2;
    }
</style>
