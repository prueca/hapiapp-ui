<script lang="ts">
    import Search from './Search.svelte'
    import List from './List.svelte'
</script>

<div>
    <div class="content-wrapper">
        <div class="section-title">Freezers</div>
        <Search />
        <List />
    </div>
</div>

<style lang="postcss">
    @reference 'tailwindcss';

    .section-title {
        @apply mb-4 text-xl;
    }
</style>
