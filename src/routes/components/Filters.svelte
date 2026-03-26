<div class="filters">
    <button class="active btn">All</button>
    <button class="btn">Active</button>
    <button class="btn">Inactive</button>
</div>

<style lang="postcss">
    @reference 'tailwindcss';

    .filters {
        @apply grid grid-cols-3 gap-2 rounded-xl border border-slate-200 bg-slate-100 p-3;
    }
    .btn {
        @apply grow rounded-lg border-none bg-transparent text-slate-400;

        &.active {
            @apply bg-(--green) text-white shadow-md;
        }
    }
</style>
