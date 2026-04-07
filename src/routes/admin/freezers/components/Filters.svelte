<script lang="ts">
    import StatusFilter from './StatusFilter.bk.svelte'

    let statusList = $state([
        {
            text: 'All',
            selected: true
        },
        {
            text: 'Assigned',
            selected: false
        },
        {
            text: 'Deployed',
            selected: false
        },
        {
            text: 'For Deployment',
            selected: false
        },
        {
            text: 'Pull',
            selected: false
        },
        {
            text: 'For Pullout',
            selected: false
        },
        {
            text: 'For Replacement (Breakdown)',
            selected: false
        },
        {
            text: 'For Replacement (Upgrade)',
            selected: false
        },
        {
            text: 'For Replacement (Downgrade)',
            selected: false
        }
    ])
</script>

<div class="filters">
    <div class="wrapper">
        {#each statusList as item, index}
            <StatusFilter text={item.text} {index} bind:status={statusList} />
        {/each}
    </div>
</div>

<style lang="postcss">
    @reference 'tailwindcss';

    .filters {
        @apply rounded-xl bg-(--secondary) p-2;
    }
    .wrapper {
        @apply flex gap-2 overflow-x-auto overflow-y-hidden;

        scrollbar-width: none;
        -ms-overflow-style: none;
        &::-webkit-scrollbar {
            display: none;
        }
    }
    .btn {
        @apply shrink-0 grow rounded-lg border-none bg-transparent text-(--primary);

        &:hover {
            @apply bg-(--primary-faded);
        }
        &.active {
            @apply bg-(--primary) text-(--accent);
        }
    }
</style>
