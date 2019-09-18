
export const convertDate = (date) => {
    let dateParse = Date.parse(date);
    
    return dateParse.toLocaleString();
};
