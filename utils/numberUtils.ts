export const $formatCurrency = (value: string | number) => {
    return new Intl.NumberFormat('fr-FR', {
        style: 'currency',
        currency: 'MGA',
    }).format(+value);
}