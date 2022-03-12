function buildNotification(perClick, resource, value) {
    switch (resource) {
        case 'wood':
            switch ((Math.floor(Math.random() * (5)) + 1)) {
                case 1:
                    return `You gather ${perClick} wood (${value + perClick})`;
                case 2:
                    return `You manage to gain ${perClick} wood (${value + perClick})`;
                case 3:
                    return `You quickly grab ${perClick} wood (${value + perClick})`;
                case 4:
                    return `A very difficult tree rewards you with ${perClick} wood (${value + perClick})`;
                case 5:
                    return `You find an already fallen tree and gain ${perClick} wood (${value + perClick})`;
                default:
                    return `+${perClick} ${resource} (${value + perClick})`
            }
        case 'food-berries':
            switch ((Math.floor(Math.random() * (3)) + 1)) {
                case 1:
                    return `You gather ${perClick} berr${(perClick === 1) ? 'y' : 'ies'} (${value + perClick})`;
                case 2:
                    return `You pick ${perClick} berr${(perClick === 1) ? 'y off a nearby bush' : 'ies off nearby bushes'} (${value + perClick})`;
                case 3:
                    return `You find and harvest ${perClick} berr${(perClick === 1) ? 'y' : 'ies'} (${value + perClick})`;
                default:
                    return `+${perClick} ${resource} (${value + perClick})`
            }
        default: 
            return `+${perClick} ${resource} (${value + perClick})`
    }
}

export default buildNotification;