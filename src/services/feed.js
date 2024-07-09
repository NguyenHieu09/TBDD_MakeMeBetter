import data from '../../data.json';

export const getListFeed = async (params) => {
    try {
        const { feeds } = data;
        let results = feeds || [];

        const { catetory: filterCatetory } = params || {};
        if (filterCatetory) {
            results = feeds.filter((item) => {
                const { catetory } = item || {};
                return filterCatetory === catetory;
            });
        }

        return {
            status: 200,
            data: results
        };
    } catch (error) {
        return {
            status: 500,
            data: [],
            error: "Failed to fetch feeds"
        };
    }
};

export const getListSuggestionFeed = async () => {
    try {
        const { feeds } = data;
        let results = [];
        let duplicateFilter = {};

        feeds.forEach((item) => {
            const { catetory } = item || {};
            if (!duplicateFilter[catetory]) {
                results.push(item);
            }
            duplicateFilter[catetory] = true;
        });

        return {
            status: 200,
            data: results
        };
    } catch (error) {
        return {
            status: 500,
            data: [],
            error: "Failed to fetch suggested feeds"
        };
    }
};
