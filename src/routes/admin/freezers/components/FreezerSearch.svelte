<script lang="ts">
    import Icon from '@iconify/svelte'
    import FreezerFilters from './FreezerFilters.svelte'
</script>

<div class="search-bar">
    <div class="flex gap-4">
        <!-- search input -->
        <label class="input input-lg">
            <Icon icon="lets-icons:search-light" width="24" class="opacity-50" />
            <input type="search in" required placeholder="Search freezer..." />
        </label>
        <!-- search button -->
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
        @apply rounded-lg text-base;
    }

    .search-btn {
        @apply rounded-lg text-base;
    }
</style>
