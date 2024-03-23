export interface User {

    email: String,
    password: String,
    refreshToken: String
    profile: {
        name: String
        avatar: String
        bio: String
        phoneNumber: String
    }
    roles: Object
    likedProducts: []
}
