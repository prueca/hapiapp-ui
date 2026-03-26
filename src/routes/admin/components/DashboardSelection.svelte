<script lang="ts">
    import Icon from '@iconify/svelte'
</script>

<div class="dashboard-selection">
    <div class="content-wrapper">
        <div class="section-title">
            <Icon icon="ph:squares-four-duotone" width="20" />
            <span>Browse Dashboard</span>
        </div>
        <div class="dashboard-grid">
            <a href="/admin/freezers">
                <div class="dashboard-item bg-(--green)">
                    <Icon icon="icon-park-twotone:refrigerator" width="42" />
                    <div class="label">Freezers</div>
                </div>
            </a>
            <a href="/admin/accounts">
                <div class="dashboard-item bg-(--blue)">
                    <Icon icon="solar:shop-bold-duotone" width="42" />
                    <div class="label">Accounts</div>
                </div>
            </a>
            <a href="/admin/users">
                <div class="dashboard-item bg-(--purple)">
                    <Icon icon="uim:user-md" width="42" />
                    <div class="label">Users</div>
                </div>
            </a>
            <a href="/admin/cabcons">
                <div class="dashboard-item bg-(--red)">
                    <Icon icon="solar:notes-bold-duotone" width="42" />
                    <div class="label">CabCons</div>
                </div>
            </a>
        </div>
    </div>
</div>

<style lang="postcss">
    @reference 'tailwindcss';

    .section-title {
        @apply mb-4 flex items-center gap-2 text-xl;
    }
    .dashboard-grid {
        @apply grid grid-cols-2 gap-4;
    }
    .dashboard-item {
        @apply relative h-28 rounded-xl p-4 text-white;

        .label {
            @apply absolute bottom-4 left-4 text-lg text-white;
        }
    }
</style>
