<script lang="ts">
    import { getStatusOpts } from '../store.svelte'

    const options = getStatusOpts()

    let selected: string[] = $derived(options.map((item) => item.value))

    const selectAll = () => {
        selected = options.map((item) => item.value)
    }
</script>

<div class="status-filter">
    <div class="label">
        <div>Filter by Status</div>
        <button class="select-all-btn btn btn-ghost" onclick={selectAll}> Select All </button>
    </div>
    <select class="select" multiple bind:value={selected}>
        {#each options as item}
            <option value={item.value}>{item.label}</option>
        {/each}
    </select>
</div>

<style lang="postcss">
    @reference 'tailwindcss';

    .label {
        @apply mb-2 flex items-center justify-between;
    }
    .select-all-btn {
        @apply rounded-lg bg-white;
    }
    .select {
        @apply w-full rounded-lg border bg-white text-base ring-0 outline-none;

        option:active,
        option:hover {
            @apply bg-(--primary-faded) text-(--accent) shadow-none;
        }
    }
</style>
