<script lang="ts">
    import Icon from '@iconify/svelte'
    import { toggleListOptions } from '../store.svelte'
</script>

<div class="search-bar">
    <div class="join flex">
        <div class="flex-1">
            <label class="input input-lg join-item">
                <Icon icon="lets-icons:search-light" width="24" class="opacity-50" />
                <input type="text" placeholder="Search freezer..." required />
            </label>
        </div>
        <button class="search-btn btn btn-lg">Search</button>
    </div>
    <button class="filter-btn btn btn-lg" onclick={() => toggleListOptions(true)}>
        <Icon icon="mingcute:filter-2-fill" width="24" />
    </button>
</div>

<style lang="postcss">
    @reference 'tailwindcss';

    .search-bar {
        @apply mb-8 flex gap-4 space-y-4;
    }

    .filter-btn {
        @apply rounded-lg border-none bg-(--primary) text-(--accent);
    }

    .input {
        @apply rounded-l-lg border border-r-0 border-(--secondary) text-base;
    }

    .search-btn {
        @apply rounded-none rounded-r-lg border border-(--secondary) bg-(--secondary) text-base text-(--primary);
    }
</style>
