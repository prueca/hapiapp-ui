<script lang="ts">
    import Icon from '@iconify/svelte'

    const props = $props()
</script>

<div class="freezer">
    <div class="flex items-center justify-between">
        <div class="freezer-id">{props.id}</div>
        <button class="ellipsis-btn btn btn-ghost btn-sm">
            <Icon icon="octicon:ellipsis-16" width="20" class="text-(--primary)" />
        </button>
    </div>
    <div class="freezer-name">
        {props.name}
    </div>
</div>

<style lang="postcss">
    @reference 'tailwindcss';

    .freezer {
        @apply mb-4 rounded-xl bg-(--supporting) p-4 text-(--primary);
    }
    .freezer-name {
        @apply mt-2;
    }
    .ellipsis-btn {
        @apply rounded-lg text-slate-400;
    }
</style>
