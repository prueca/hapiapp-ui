<script lang="ts">
    import Icon from '@iconify/svelte'
</script>

<div class="dropdown dropdown-end">
    <button tabIndex={0} class="btn btn-square btn-ghost btn-xl">
        <Icon icon="material-symbols:menu-rounded" width="36" />
    </button>
    <ul tabIndex="-1" class="dropdown-content menu menu-sm rounded-box bg-base-100">
        <div class="greetings">Hello there, John Doe!</div>
        <div class="menu-item-group">
            <li>
                <a href="/profile" class="menu-item">User Profile</a>
            </li>
        </div>
        <div class="menu-item-group">
            <div class="group-title">Support</div>
            <li>
                <a href="faq" class="menu-item">FAQ</a>
            </li>
            <li>
                <a href="/chat-with-us" class="menu-item">Chat With Us</a>
            </li>
            <li>
                <a href="/contact-us" class="menu-item">Contact Us</a>
            </li>
        </div>
        <div class="menu-item-group">
            <div class="group-title">Legal</div>
            <li>
                <a href="/terms-and-use" class="menu-item">Terms and Use</a>
            </li>
            <li>
                <a href="/data-protection-policy" class="menu-item">Data Protection Policy</a>
            </li>
        </div>
    </ul>
</div>

<style lang="postcss">
    @reference 'tailwindcss';

    .dropdown-content {
        @apply z-1 mt-3 w-70 border border-gray-200 p-2 shadow-lg;

        .greetings {
            @apply w-full truncate p-2 text-base text-gray-400;
        }

        .menu-item-group {
            @apply mb-2 border-b border-b-gray-200 pb-2;

            &:last-of-type {
                @apply mb-0 border-none;
            }

            .group-title {
                @apply mb-2 px-2 font-bold text-gray-400;
            }

            .menu-item {
                @apply text-base;
            }
        }
    }
</style>
