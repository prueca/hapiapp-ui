<script lang="ts">
    import _ from 'lodash'

    type TProps = {
        text: string
        index: number
        status: {
            text: string
            selected: boolean
        }[]
    }

    const { index, text, status = $bindable() }: TProps = $props()
    let active = $derived(status[index]?.selected ?? false)

    const handleClick = () => {
        status[index].selected = !active
        const all = index === 0 && active

        if (all) {
            status.map((item) => (item.selected = false))
        }

        status[0].selected = all
        const isNoneSelected = _.every(status, (item) => !item.selected)

        if (isNoneSelected) {
            status[0].selected = true
        }
    }
</script>

<button class="btn" class:active onclick={handleClick}>{text}</button>

<style lang="postcss">
    @reference 'tailwindcss';

    .btn {
        @apply rounded-lg border-none bg-transparent text-(--primary);

        &:hover {
            @apply bg-(--primary-faded);
        }
        &.active {
            @apply bg-(--primary) text-(--accent);
        }
    }
</style>
