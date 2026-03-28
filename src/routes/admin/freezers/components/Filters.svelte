<div class="filters">
    <button class="active btn">All</button>
    <button class="btn">Status</button>
    <button class="btn">Status</button>
</div>

<style lang="postcss">
    @reference 'tailwindcss';

    .filters {
        @apply grid grid-cols-3 gap-2 rounded-xl bg-(--secondary) p-3;
    }
    .btn {
        @apply grow rounded-lg border-none bg-transparent text-(--primary);

        &.active {
            @apply bg-(--primary) text-white;
        }
    }
</style>
