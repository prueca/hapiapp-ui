<script lang="ts">
    import Icon from '@iconify/svelte'
    import DashboardOption from './DashboardOption.svelte'
</script>

<div>
    <div class="content-wrapper">
        <div class="section-title">Browse Dashboard</div>
        <div class="dashboard-grid">
            <DashboardOption
                href="/admin/freezers"
                icon="solar:fridge-bold-duotone"
                label="Freezers"
                tooltip="Tooltip"
            />
            <DashboardOption
                href="/admin/accounts"
                icon="stash:shop-duotone"
                label="Accounts"
                tooltip="Tooltip"
            />
            <DashboardOption
                href="/admin/users"
                icon="solar:user-circle-bold-duotone"
                label="Users"
                tooltip="Tooltip"
            />
            <DashboardOption
                href="/admin/cabcons"
                icon="solar:notes-bold-duotone"
                label="CabCons"
                tooltip="Tooltip"
            />
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
</style>
