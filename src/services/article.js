// import axios from "axios";

// export const getListArticles = async (params) => {
//     try {
//         const response = await axios.get("http://localhost:3000/articles", { params });
//         const { status, data } = response;

//         let results = data || [];
//         const { catetory: filterCatetory } = params || {};

//         if (filterCatetory) {
//             results = (data || []).filter((item) => {
//                 const { catetory } = item || {};
//                 return filterCatetory === catetory;
//             });
//         }

//         return {
//             status,
//             data: results
//         };
//     } catch (error) {
//         return {
//             status: 500,
//             data: [],
//             error: "Failed to fetch articles"
//         };
//     }
// };


// export const getListSuggestionArticles = async () => {
//     try {
//         const response = await axios.get("http://localhost:3000/articles");
//         const { status, data } = response;

//         let results = [];
//         let duplicateFilter = {};

//         (data || []).forEach((item) => {
//             const { catetory } = item || {};
//             if (!duplicateFilter[catetory]) {
//                 results.push(item);
//             }
//             duplicateFilter[catetory] = true;
//         });

//         return {
//             status,
//             data: results
//         };
//     } catch (error) {
//         return {
//             status: 500,
//             data: [],
//             error: "Failed to fetch suggested articles"
//         };
//     }
// };

import data from '../../data.json';

export const getListArticles = (params) => {
    try {
        const { articles } = data;
        let results = articles || [];

        const { catetory: filterCatetory } = params || {};
        if (filterCatetory) {
            results = articles.filter((item) => {
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
            error: "Failed to fetch articles"
        };
    }
};

export const getListSuggestionArticles = () => {
    try {
        const { articles } = data;
        let results = [];
        let duplicateFilter = {};

        articles.forEach((item) => {
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
            error: "Failed to fetch suggested articles"
        };
    }
};

