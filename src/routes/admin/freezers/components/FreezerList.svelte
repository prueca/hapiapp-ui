<script lang="ts">
    import FreezerSearch from './FreezerSearch.svelte'
    import Freezers from './Freezers.svelte'
</script>

<div class="freezer-list">
    <div class="content-wrapper">
        <div class="section-title">Freezers</div>
        <FreezerSearch />
        <Freezers />
    </div>
</div>

<style lang="postcss">
    @reference 'tailwindcss';

    .section-title {
        @apply mb-4 text-xl;
    }
</style>
