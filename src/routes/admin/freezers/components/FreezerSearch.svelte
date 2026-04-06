<script lang="ts">
    import Icon from '@iconify/svelte'
    import FreezerFilters from './FreezerFilters.svelte'
</script>

<div class="search-bar">
    <div class="join flex">
        <div class="flex-1">
            <label class=" input input-lg join-item">
                <Icon icon="lets-icons:search-light" width="24" class="opacity-50" />
                <input type="text" placeholder="Search freezer..." required />
            </label>
        </div>
        <button class="search-btn themed-btn btn btn-lg">Search</button>
    </div>
    <FreezerFilters />
</div>

<style lang="postcss">
    @reference 'tailwindcss';

    .search-bar {
        @apply mb-8 space-y-4;
    }

    .input {
        @apply rounded-l-lg border border-r-0 border-(--primary) text-base;
    }

    .search-btn {
        @apply rounded-none rounded-r-lg border border-(--primary) text-base;
    }
</style>
