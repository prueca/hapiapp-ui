<script lang="ts">
    import Icon from '@iconify/svelte'
    import { toggleFreezerDetails } from '../store.svelte'

    const props = $props()
</script>

<div class="freezer">
    <div class="flex items-center justify-between">
        <div class="freezer-id">{props.id}</div>
        <button
            class="ellipsis-btn btn btn-ghost btn-sm"
            onclick={() => toggleFreezerDetails(true)}
        >
            <Icon icon="octicon:ellipsis-16" width="20" class="text-(--secondary)" />
        </button>
    </div>
    <div class="freezer-name">
        {props.name}
    </div>
</div>

<style lang="postcss">
    @reference 'tailwindcss';

    .freezer {
        @apply mb-4 rounded-xl bg-(--primary-faded) p-4 text-(--accent);
    }
    .freezer-id {
        @apply text-base;
    }
    .freezer-name {
        @apply mt-2 text-base;
    }
    .ellipsis-btn {
        @apply rounded-lg border-0 bg-white/0 text-slate-400;
    }
</style>
