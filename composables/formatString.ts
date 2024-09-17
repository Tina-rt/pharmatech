export const useFormatString = () => {
    const capitalize = (str: string) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };
    return {
        capitalize,
    };
};