<script lang="ts">
    import Icon from '@iconify/svelte'
    import logo from '$lib/assets/Selecta_Logo_2003.svg'
</script>

<div class="nav">
    <div class="center">
        <div class="navbar bg-base-100">
            <div class="flex-1">
                <a href="/" class="btn btn-ghost btn-xl">
                    <div class="w-12">
                        <img src={logo} alt="Selecta Logo" />
                    </div>
                </a>
            </div>
            <div class="flex-none">
                <button class="btn btn-square btn-ghost btn-xl">
                    <Icon icon="fluent:text-align-right-20-filled" width="36" />
                </button>
            </div>
        </div>
    </div>
</div>

<style lang="postcss">
    @reference 'tailwindcss';

    .nav {
        @apply border-b border-b-gray-300;
    }
    .center {
        @apply mx-auto max-w-300;
    }
</style>
