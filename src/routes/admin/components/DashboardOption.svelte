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
            <Icon icon="ic:twotone-info" width="24" class="text-(--secondary)" />
        </button>
        <Icon icon={props.icon} width="54" class="text-(--secondary)" />
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
        @apply bg-(--accent);
    }

    .dashboard-option {
        @apply relative h-28 rounded-xl bg-(--primary-faded) p-4;

        .tooltip {
            @apply absolute top-4 right-4;
        }
        .label {
            @apply absolute bottom-2 left-4 text-lg text-(--accent);
        }
    }
</style>
