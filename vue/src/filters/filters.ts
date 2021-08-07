export default {
  formatPrice(value: number) : string {
    const formatter = new Intl.NumberFormat('es-ES', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 2,
    });

    return formatter.format(value);
  },
  limitCharacters(value: string, strLength: number) : string {
    if (value.length > 10) {
      return value.substring(0, strLength);
    }
    return value;
  },
};
