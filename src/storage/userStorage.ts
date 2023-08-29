export const UserStorage = {
    setUserStorage(user: any) {
        localStorage.setItem("local-user", JSON.stringify(user));
    },
    getUserStorage() {
        let resp = localStorage.getItem("local-user");
        resp = JSON.parse(resp!);
        return resp;
    }
}