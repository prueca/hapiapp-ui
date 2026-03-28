<script lang="ts">
    import Icon from '@iconify/svelte'

    const props = $props()

    const tooltipOnClick = (evt: Event) => {
        evt.preventDefault()
    }
</script>

<a href={props.href}>
    <div class="dashboard-option">
        <button class="tooltip" data-tip={props.tooltip} onclick={tooltipOnClick}>
            <Icon icon="ic:twotone-info" width="24" class="text-(--primary)" />
        </button>
        <Icon icon={props.icon} width="58" class="text-(--primary)" />
        <div class="label">{props.label}</div>
    </div>
</a>

<style lang="postcss">
    @reference 'tailwindcss';

    .primary {
        @apply bg-(--primary);
    }
    .secondary {
        @apply bg-(--secondary);
    }
    .supporting {
        @apply bg-(--supporting);
    }
    .supporting-2 {
        @apply bg-(--supporting-2);
    }

    .dashboard-option {
        @apply relative h-28 rounded-xl bg-(--secondary) p-4;

        .tooltip {
            @apply absolute top-4 right-4;
        }
        .label {
            @apply absolute bottom-2 left-4 text-lg font-bold text-(--primary);
        }
    }
</style>
