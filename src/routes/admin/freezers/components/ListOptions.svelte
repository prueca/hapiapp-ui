<script lang="ts">
    import StatusFilter from './StatusFilter.svelte'
    import { getListOptionsFlag, toggleListOptions } from '../store.svelte'
</script>

<dialog id="freezer-details" class="modal" open={getListOptionsFlag()}>
    <div class="modal-box">
        <!-- modal title -->
        <h3 class="modal-title">Freezer List Options</h3>
        <!-- modal content -->
        <div class="modal-content">
            <StatusFilter />
        </div>
        <!-- modal action -->
        <div class="modal-action">
            <form method="dialog">
                <div class="flex items-center gap-4">
                    <button class="btn btn-lg" onclick={() => toggleListOptions(false)}>
                        Cancel
                    </button>
                    <button class="btn btn-lg" onclick={() => toggleListOptions(false)}>
                        Apply
                    </button>
                </div>
            </form>
        </div>
    </div>
    <form method="dialog" class="modal-backdrop">
        <button>close</button>
    </form>
</dialog>

<style lang="postcss">
    @reference 'tailwindcss';

    .modal-title {
        @apply mb-4 text-lg font-bold;
    }

    .modal-action {
        .btn {
            @apply w-28 rounded-lg bg-white/0 text-base;
        }
    }
</style>
