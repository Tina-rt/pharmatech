export const getProductList = async (filter?: {
    price?: "asc" | "desc";
    category?: number;
}) => {
    let queryUrl = "produit?";
    if (filter?.price) {
        queryUrl += `price=${filter?.price}`;
    }
    if (filter?.category !== undefined) {
        queryUrl += `&cat=${filter?.category}`;
    }

    const { data } = await $api(queryUrl, {
        method: "GET",
    });
    return data;
};

export const getProduitById = async (id: number) => {
    const { data } = await $api(`produit/${id}`, {
        method: "GET",
    });
    return data;
};

export const getTopProduits = async () => {
    const { data } = await $api("produit/top", {
        method: "GET",
    });
    return data;
};

export const getProduitByCategorie = async (id: number) => {
    const { data } = await $api(`produit/categorie/${id}`, {
        method: "GET",
    });
    return data;
};
