<script lang="ts">
    import Icon from '@iconify/svelte'

    const props = $props()

    const tooltipOnClick = (evt: Event) => {
        evt.preventDefault()
    }
</script>

<a href={props.href}>
    <div class="dashboard-option {props.color}">
        <button class="tooltip" data-tip={props.tooltip} onclick={tooltipOnClick}>
            <Icon icon="ic:twotone-info" color="white" width="24" />
        </button>
        <Icon icon={props.icon} width="58" />
        <div class="label">{props.label}</div>
    </div>
</a>

<style lang="postcss">
    @reference 'tailwindcss';

    .green {
        @apply bg-(--green);
    }
    .blue {
        @apply bg-(--blue);
    }
    .purple {
        @apply bg-(--purple);
    }
    .red {
        @apply bg-(--red);
    }

    .dashboard-option {
        @apply relative h-28 rounded-xl p-4 text-white;

        .tooltip {
            @apply absolute top-4 right-4;
        }
        .label {
            @apply absolute bottom-2 left-4 text-lg font-bold text-white;
        }
    }
</style>
