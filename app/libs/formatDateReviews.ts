import moment from 'moment';
export const formatDate = (date: any) => {
    const reviewDate = moment(date);
    
    const today = moment();
    const weeks = today.diff(reviewDate, 'weeks');
    const months = today.diff(reviewDate, 'months');
    const years = today.diff(reviewDate, 'years');

    if (weeks <= 4) {
        return `${weeks} weeks ago`; // Less than or equal to 4 weeks
    } else if (months < 12) {
        return `${months} months ago`; // Less than 12 months
    } else if (months >= 12 && months <= 15) {
        return `1 year ago`; // Exactly 12 months
    } else {
        return `${years} years ago`; // More than one year
    }
};