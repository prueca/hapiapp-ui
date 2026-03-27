<script lang="ts">
    import Icon from '@iconify/svelte'
</script>

<div class="dashboard-selection">
    <div class="content-wrapper">
        <div class="section-title">
            <Icon icon="duo-icons:dashboard" width="20" />
            <span>Browse Dashboard</span>
        </div>
        <div class="dashboard-grid">
            <a href="/admin/freezers">
                <div class="dashboard-item bg-(--green)">
                    <div class="tooltip" data-tip="Tooltip">
                        <Icon icon="ic:twotone-info" color="white" width="24" />
                    </div>
                    <Icon icon="solar:fridge-bold-duotone" width="58" />
                    <div class="label">Freezers</div>
                </div>
            </a>
            <a href="/admin/accounts">
                <div class="dashboard-item bg-(--blue)">
                    <div class="tooltip" data-tip="Tooltip">
                        <Icon icon="ic:twotone-info" color="white" width="24" />
                    </div>
                    <Icon icon="stash:shop-duotone" width="58" />
                    <div class="label">Accounts</div>
                </div>
            </a>
            <a href="/admin/users">
                <div class="dashboard-item bg-(--purple)">
                    <div class="tooltip" data-tip="Tooltip">
                        <Icon icon="ic:twotone-info" color="white" width="24" />
                    </div>
                    <Icon icon="solar:user-circle-bold-duotone" width="58" />
                    <div class="label">Users</div>
                </div>
            </a>
            <a href="/admin/cabcons">
                <div class="dashboard-item bg-(--red)">
                    <div class="tooltip" data-tip="Tooltip">
                        <Icon icon="ic:twotone-info" color="white" width="24" />
                    </div>
                    <Icon icon="solar:notes-bold-duotone" width="58" />
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

        .tooltip {
            @apply absolute top-4 right-4;
        }
        .label {
            @apply absolute bottom-2 left-4 text-lg font-bold text-white;
        }
    }
</style>
