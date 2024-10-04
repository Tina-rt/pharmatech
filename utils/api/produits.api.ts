export const getProductList = async () => {
    const { data } = await $api("produit", {
        method: "GET",
    });
    return data;
};
