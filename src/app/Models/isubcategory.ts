export interface Isubcategory {
    _id: string
    name: string
    categoryId: {
        _id: string
        name: string
        createdAt: Date
        updatedAt: Date
    }
    __v: string
}
