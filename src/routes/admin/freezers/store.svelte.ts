let listOptionsFlag = $state(false)

export const getListOptionsFlag = () => listOptionsFlag

export const toggleListOptions = (flag: boolean) => {
    listOptionsFlag = flag
}

export const statusOpts = $state([
    {
        label: 'Assigned',
        value: 'assigned'
    },
    {
        label: 'Deployed',
        value: 'deployed'
    },
    {
        label: 'For Deployment',
        value: 'for_deployment'
    },
    {
        label: 'Pull',
        value: 'pull'
    },
    {
        label: 'For Pullout',
        value: 'for_pullout'
    },
    {
        label: 'For Replacement (Breakdown)',
        value: 'for_replacement_breakdown'
    },
    {
        label: 'For Replacement (Upgrade)',
        value: 'for_replacement_upgrade'
    },
    {
        label: 'For Replacement (Downgrade)',
        value: 'for_replacement_downgrade'
    }
])

export const getStatusOpts = () => statusOpts
