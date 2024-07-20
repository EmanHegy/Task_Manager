export class ApiFeatures {
    constructor(mongooseQuery, searchQuery) {
        this.mongooseQuery = mongooseQuery;
        this.searchQuery = searchQuery;
    }
    pagination() {
        let pageNumber = this.searchQuery.page * 1 || 1;
        if (this.searchQuery.page < 1) pageNumber = 1
        const limit = 3;
        let skip = (parseInt(pageNumber) - 1) * limit
        this.pageNumber = pageNumber;
        this.mongooseQuery.skip(skip).limit(limit);
        return this;
    }
    sort() {
        if (this.searchQuery.sort) {
            let sortBy = this.searchQuery.sort.split(',').join(' ')
            this.mongooseQuery.sort(sortBy)
        }
        return this;
    }
}